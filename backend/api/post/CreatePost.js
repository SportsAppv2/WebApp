import express from "express";
import asyncHandler from "express-async-handler";
import { decodeJwt } from "../../helpers/decodeJwt.js";
import Notification from "../../models/Notification.js";
import Post from "../../models/Posts.js";
import Room from "../../models/Room.js";
import User from "../../models/User.js";
import Profile from "../../models/UserProfile.js";

const router = express.Router();

export const createPost = asyncHandler(async (req, res) => {
  try {
    const { content, settings, roomId } = req.body;
    const userId = req.userId;
    console.log("User ID while creating a post is ", userId);
    const isCreatorEmpty = false;
    const isContentEmpty = false;
    const isSettingsEmpty = false;
    if (isCreatorEmpty || isContentEmpty || isSettingsEmpty) {
      res.json({
        status: "FAILED",
        message: "Invalid input fields",
      });
    } else {
      let postId;
      const user = await Profile.findOne({ userId })
        .then((user) => {
          const creator = {
            id: userId,
          };
          const newPost = new Post({
            roomId,
            creator,
            content,
            settings,
          });
          newPost.save().then(async (post) => {
            postId = post._id;
            user.activities.posts.posted.unshift(postId);
            console.log("Saved new post", post);
            const notification = new Notification({
              type: "Post",
              receipentId: userId,
              postId: postId,
            });
            notification
              .save()
              .then(async (notification) => {
                await Post.findByIdAndUpdate(postId, {
                  "notification.notificationId": notification._id,
                });
              })
              .catch((err) => {
                return res.json({
                  status: "FAILED",
                  message: err.message,
                });
              });
            //push the postId to Room.post
            const room = await Room.findByIdAndUpdate(roomId, {
              $push: { postList: { $each: [post._id], $position: 0 } },
            }).catch((err) => {
              res.json({ status: "FAILED", message: err.message });
            });
            if (!room) {
              return res.json({ status: "FAILED", message: "Room not found" });
            }
            await user.save().catch((err) => {
              res.json({ status: "FAILED", message: err.message });
            });
            let newPostJson = post.toObject();
            console.log("The user details are ", user);
            newPostJson.creator.userName = user.userName;
            newPostJson.creator.firstName = user.name.firstName;
            newPostJson.creator.lastName = user.name.lastName;
            return res.json({
              status: "SUCCESS",
              message: "Post successfully saved.",
              post: newPostJson,
            });
          });
        })
        .catch((err) => {
          res.json({
            status: "FAILED",
            message: err.message,
          });
        });
    }
  } catch (error) {
    res.json({
      status: "FAILED",
      message: error.message,
    });
  }
});
