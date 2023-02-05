import express from "express";
import asyncHandler from "express-async-handler";
import Post from "../../models/Posts.js";
import Comment from "../../models/Comments.js";
import User from "../../models/User.js";
import mongoose from "mongoose";

const router = express.Router();

export const dislikeComment = asyncHandler(async (req, res) => {
  try {
    const { commentId, userId } = req.body;
    User.findOne({ _id: mongoose.Types.ObjectId(userId) })
      .then((user) => {
        if (!user) {
          return Promise.reject(new Error("User not found."));
        }
        return Comment.findOne({
          _id: mongoose.Types.ObjectId(commentId),
          "stats.downvotes.users": userId,
        })
          .then((comment) => {
            if (comment) {
              console.log("Comment is ", comment);
              return Promise.reject(
                new Error("User has already downvoted this comment.")
              );
            }

            return Comment.findOne({
              _id: mongoose.Types.ObjectId(commentId),
              "stats.upvotes.users": userId,
            });
          })
          .then((comment) => {
            if (!comment) {
              //user has not upvoted the comment
              return Comment.findOneAndUpdate(
                { _id: commentId },
                {
                  $inc: { "stats.downvotes.count": 1 },
                  $push: { "stats.downvotes.users": userId },
                },
                { new: true }
              );
            }
            //user has upvoted the comment
            return Comment.findOneAndUpdate(
              { _id: commentId, "stats.upvotes.users": userId },
              {
                $inc: { "stats.upvotes.count": -1, "stats.downvotes.count": 1 },
                $pull: { "stats.upvotes.users": userId },
                $push: { "stats.downvotes.users": userId },
              },
              { new: true }
            );
          })
          .then((comment) => {
            console.log("Comment is ", comment);
            res.json({
              status: "SUCCESS",
              message: "Successfully downvoted the comment.",
            });
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
  } catch (error) {
    res.json({
      status: "FAILED",
      message: error.message,
    });
  }
});
