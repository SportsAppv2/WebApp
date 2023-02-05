import express from "express";
import asyncHandler from "express-async-handler";
import Post from "../../models/Posts.js";
import { User } from "../../models/User.js";

const router = express.Router();

export const likePost = asyncHandler(async (req, res) => {
  try {
    const { postId, userId } = req.body;

    User.find({ _id: userId })
      .then(async (user) => {
        //the user Id exists
        if (user.length >= 0) {
          Post.find({ _id: postId, "stats.upvotes.users": { $ne: userId } })
            .then(async (post) => {
              console.log("The post is ", post, post.length);
              if (post.length == 0) {
                //user has already liked the post
                console.log("Post has already been liked");
                res.json({
                  status: "FAILED",
                  message: "Post not available or has been already liked",
                });
              } else if (post.length > 0) {
                //post is available and the user has not liked the post
                Post.findOneAndUpdate(
                  { _id: postId },
                  {
                    $inc: { "stats.upvotes.count": 1 },
                    $push: { "stats.upvotes.users": userId },
                  },
                  { new: true }
                )
                  .then((post) => {
                    console.log("Updated Post: ", post);
                    res.json({
                      status: "SUCCESS",
                      message: "Post liked",
                    });
                  })
                  .catch((err) => {
                    res.json({
                      status: "FAILED",
                      message: err.message,
                    });
                  });
              }
            })
            .catch((err) => {
              console.log("The error is ", err.message);
              res.json({
                status: "FAILED",
                message: err.message,
              });
            });
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
