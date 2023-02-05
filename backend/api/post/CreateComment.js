import express from "express";
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import Comment from "../../models/Comments.js";
import Post from "../../models/Posts.js";
import User from "../../models/User.js";

const router = express.Router();

export const createComment = asyncHandler(async (req, res) => {
  try {
    const { parentPostId, parentCommentId, creator, content, stats, comments } =
      req.body;
    console.log(
      parentPostId,
      parentCommentId,
      creator,
      content,
      stats,
      comments
    );
    const isParentPostEmpty = false;
    const isCreatorEmpty = false;
    const isContentEmpty = false;
    if (isParentPostEmpty || isCreatorEmpty || isContentEmpty) {
      throw new Error("Empty entries");
    } else {
      // Check if userId is valid
      await User.findById(mongoose.Types.ObjectId(creator.id))
        .then((user) => {
          console.log("User is ", user);
          if (!user) {
            console.log("Entered here");
            throw new Error("User not found.");
          }
          //user present
          // Check if parentCommentId exists
          if (parentCommentId) {
            const parentComment = Comment.findById(parentCommentId)
              .then((comment) => {
                if (!comment) {
                  //parentComment is not valid
                  console.log("Comment is ", comment);
                  throw new Error("Parent comment not found.");
                }
              })

              .catch((error) => {
                res.json({
                  status: "FAILED",
                  message: error.message,
                });
              });
          }
          //parentId is valid or empty
          const newComment = new Comment({
            parentPostId,
            parentCommentId,
            creator,
            content,
            stats,
            comments,
          });
          newComment
            .save()
            .then((newComment) => {
              console.log("Comment saved ", newComment);
              if (!parentCommentId) {
                // It is a parent comment, update the post
                const post = Post.findOneAndUpdate(
                  { _id: parentPostId },
                  {
                    $inc: { "comments.count": 1 },
                    $push: { "comments.commentsList": newComment._id },
                  },
                  { new: true }
                )
                  .then((updatedPost) => {
                    res.json({
                      status: "SUCCESS",
                      message: "Comment Added successfully",
                    });
                  })
                  .catch();
              } else {
                // It is a child comment, update the parent comment
                const updatedComment = Comment.findOneAndUpdate(
                  { _id: parentCommentId },
                  {
                    $inc: { "comments.count": 1 },
                    $push: { "comments.commentsList": newComment._id },
                  },
                  { new: true }
                )
                  .then((updatedComment) => {
                    res.json({
                      status: "SUCCESS",
                      message: "Comment Added successfully",
                    });
                  })
                  .catch();
              }
            })
            .catch();
        })
        .catch((error) => {
          res.json({
            status: "FAILED",
            message: "2" + error.message,
          });
        });
    }
  } catch (error) {
    res.json({
      status: "FAILED",
      message: "1" + error.message,
    });
  }
});
