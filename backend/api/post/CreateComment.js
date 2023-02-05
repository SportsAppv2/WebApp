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
            throw new Error("User not found. Hehe");
          }
          //user present
          // Check if parentCommentId exists
          if (parentCommentId) {
            const parentComment = Comment.findById(parentCommentId)
              .then((parentComment) => {
                if (!parentComment) {
                  throw new Error("Invalid parent comment ID");
                }
                //create the comment
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
                  .then((comment) => {
                    console.log("Comment saved");
                    if (!parentCommentId) {
                      // It is a parent comment, update the post
                      const post = Post.findOneAndUpdate(
                        { _id: parentPostId },
                        {
                          $inc: { "comments.count": 1 },
                          $push: { "comments.commentsList": comment._id },
                        },
                        { new: true }
                      )
                        .then((post) => {
                          console.log("Comment Added. Parent post updated");
                        })
                        .catch((error) => {
                          throw new Error(error.message);
                        });
                    } else {
                      // It is a child comment, update the parent comment
                      const comment = Comment.findOneAndUpdate(
                        { _id: parentCommentId },
                        {
                          $inc: { "comments.count": 1 },
                          $push: { "comments.commentsList": comment._id },
                        },
                        { new: true }
                      );
                    }
                  })
                  .catch((error) => {
                    res.json({
                      status: "FAILED",
                      message: error.message,
                    });
                  });
              })
              .catch((error) => {
                res.json({
                  status: "FAILED",
                  message: error.message,
                });
              });
          }
        })
        .catch(
          res.json({
            status: "FAILED",
            message: error.message,
          })
        );
    }
  } catch (error) {
    res.json({
      status: "FAILED",
      message: "1" + error.message,
    });
  }
});
