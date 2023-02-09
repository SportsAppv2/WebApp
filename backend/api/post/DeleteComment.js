import express from "express";
import mongoose from "mongoose";
import asyncHandler from "express-async-handler";
import Comment from "../../models/Comments.js";
import Post from "../../models/Posts.js";
import { decodeJwt } from "../../helpers/decodeJwt.js";

const router = express.Router();

export const deleteComment = asyncHandler(async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const userId = decodeJwt(token);
    const commentId = req.params.id;
    console.log("User ID is ", userId);
    console.log("Comment ID is ", commentId);

    Comment.findById(mongoose.Types.ObjectId(commentId))
      .then((comment) => {
        console.log("Deleted comment is ", comment);
        if (!comment) {
          return res
            .status(404)
            .json({ status: "FAILED", message: "Comment not found." });
        }
        const parentPostId = comment.parentPostId;
        const parentCommentId = comment.parentCommentId;
        if (comment.creator.id !== userId) {
          console.log("Request not authorized");
          return res
            .status(401)
            .json({ status: "FAILED", message: "Unauthorized request." });
        } else {
          Comment.deleteOne({ _id: commentId })
            .then((comment) => {
              if (parentCommentId) {
                //Parent comment Id exists. This means the comment is not a top level comment
                Comment.updateOne(
                  { _id: parentCommentId },
                  {
                    $pull: { "comments.commentsList": commentId },
                    $inc: { "comments.count": -1 },
                  }
                )
                  .then((parentComment) => {
                    console.log("Parent Comment modified", parentComment);
                    return res
                      .status(200)
                      .json({ message: "Comment deleted successfully" });
                  })
                  .catch((error) => {
                    res.json({
                      status: "FAILED",
                      message: error.message,
                    });
                  });
              } else {
                // The comment to be deleted is a top level comment
                Post.updateOne(
                  { _id: parentPostId },
                  {
                    $pull: { "comments.commentsList": commentId },
                    $inc: { "comments.count": -1 },
                  }
                )
                  .then((parentPost) => {
                    console.log("Parent Post modified", parentPost);
                    return res
                      .status(200)
                      .json({ message: "Comment deleted successfully" });
                  })
                  .catch((error) => {
                    res.json({
                      status: "FAILED",
                      message: error.message,
                    });
                  });
              }
            })
            .catch();
        }
      })
      .catch((err) => {
        res.json({
          status: "FAILED",
          message: err.message,
        });
      });
  } catch (error) {
    res.json({
      status: "FAILED",
      message: error.message,
    });
  }
});
