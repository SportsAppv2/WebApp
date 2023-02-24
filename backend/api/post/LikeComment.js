import express from "express";
import asyncHandler from "express-async-handler";
import Post from "../../models/Posts.js";
import Comment from "../../models/Comments.js";
import User from "../../models/User.js";
import mongoose from "mongoose";
import { decodeJwt } from "../../helpers/decodeJwt.js";
import { addCommentNotification } from "../notification/commentNotification.js";

const router = express.Router();

export const likeComment = asyncHandler(async (req, res) => {
  try {
    const userId = req.userId;
    const { commentId } = req.body;
    User.findOne({ _id: mongoose.Types.ObjectId(userId) })
      .then(async (user) => {
        if (!user) {
          return Promise.reject(new Error("User not found."));
        }
        return Comment.findOne({
          _id: mongoose.Types.ObjectId(commentId),
          "stats.upvotes.users": userId,
        })
          .then((comment) => {
            if (comment) {
              console.log("Comment is ", comment);
              return Promise.reject(
                new Error("User has already upvoted this comment.")
              );
            }

            return Comment.findOne({
              _id: mongoose.Types.ObjectId(commentId),
              "stats.downvotes.users": userId,
            });
          })
          .then((comment) => {
            if (!comment) {
              //user has not downvoted the comment
              return Comment.findOneAndUpdate(
                { _id: commentId },
                {
                  $inc: { "stats.upvotes.count": 1 },
                  $push: { "stats.upvotes.users": userId },
                },
                { new: true }
              );
            }
            //user has downvoted the comment
            return Comment.findOneAndUpdate(
              { _id: commentId, "stats.downvotes.users": userId },
              {
                $inc: { "stats.upvotes.count": 1, "stats.downvotes.count": -1 },
                $pull: { "stats.downvotes.users": userId },
                $push: { "stats.upvotes.users": userId },
              },
              { new: true }
            );
          })
          .then((comment) => {
            const notificationData = {
              recipientId: comment.creator.id,
              senderId: userId,
              postId: "",
              commentId,
              notificationId: comment.notification.notificationId,
              notificationType: "commentLiked",
            };
            addCommentNotification(notificationData);
            console.log("Comment is ", comment);
            res.json({
              status: "SUCCESS",
              message: "Successfully upvoted the comment.",
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
