import express from "express";
import asyncHandler from "express-async-handler";
import { decodeJwt } from "../../helpers/decodeJwt.js";
import Post from "../../models/Posts.js";
import User from "../../models/User.js";

const router = express.Router();

export const likePost = asyncHandler(async (req, res) => {
  try {
    const userId = req.userId;
    const { postId } = req.body;
    User.findById(userId)
      .then(async (user) => {
        // if (!user) {
        //   return Promise.reject(new Error("User not found."));
        // }
        return Post.findOne({ _id: postId, "stats.upvotes.users": userId })
          .then((post) => {
            if (post) {
              console.log(post);
              return Promise.reject(
                new Error("User has already upvoted this post.")
              );
            }

            return Post.findOne({
              _id: postId,
              "stats.downvotes.users": userId,
            });
          })
          .then((post) => {
            if (!post) {
              //user has not downvoted the post
              return Post.findOneAndUpdate(
                { _id: postId },
                {
                  $inc: { "stats.upvotes.count": 1 },
                  $push: { "stats.upvotes.users": userId },
                },
                { new: true }
              );
            }
            //user has downvoted the post
            return Post.findOneAndUpdate(
              { _id: postId, "stats.downvotes.users": userId },
              {
                $inc: { "stats.upvotes.count": 1, "stats.downvotes.count": -1 },
                $pull: { "stats.downvotes.users": userId },
                $push: { "stats.upvotes.users": userId },
              },
              { new: true }
            );
          })
          .then((post) => {
            const notificationData = {
              recipientId: userId,
              senderId: post.creator.id,
              postId,
              commentId: "",
              notificationType: "postLiked",
            };
            addNotification(notificationData);
            console.log(post);
            res.json({
              status: "SUCCESS",
              message: "Successfully upvoted the post.",
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
