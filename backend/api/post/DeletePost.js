import express from "express";
import asyncHandler from "express-async-handler";
import { decodeJwt } from "../../helpers/decodeJwt.js";
import Notification from "../../models/Notification.js";
import Post from "../../models/Posts.js";
import Room from "../../models/Room.js";
import Profile from "../../models/UserProfile.js";

const router = express.Router();
export const deletePost = asyncHandler(async (req, res) => {
  try {
    const userId = req.userId;
    const postId = req.params.id;
    console.log("User ID is ", userId);
    console.log("Post ID is ", postId);

    Post.findById(postId)
      .then((post) => {
        if (!post) {
          return res
            .status(404)
            .json({ status: "FAILED", message: "Post not found." });
        }
        console.log(post.creator.id, userId);
        if (post.creator.id !== userId.toString()) {
          console.log("Request not authorized");
          return res
            .status(401)
            .json({ status: "FAILED", message: "Unauthorized request." });
        } else {
          post
            .remove()
            .then(async (post) => {
              const room = await Room.findByIdAndUpdate(post.roomId, {
                $pull: { postList: postId },
              }).catch((err) => {
                res.json({ status: "FAILED", message: err.message });
              });
              const userProfile = await Profile.findOne({ userId }).catch(
                (err) => {
                  res.json({ status: "FAILED", message: err.message });
                }
              );
              const notification = await Notification.findOne({ postId }).catch(
                (err) => {
                  res.json({ status: "FAILED", message: err.message });
                }
              );
              if (notification) {
                const notificationId = notification._id;
                userProfile.notification.notificationList.pull(notificationId);
              }
              userProfile.activities.posts.posted.pull(postId);
              userProfile.save();
              console.log("Deleted Post ", post);
              return res.status(200).json({
                status: "SUCCESS",
                message: "Post deleted successfully",
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
