import express from "express";
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import Comment from "../../models/Comments.js";
import Notification from "../../models/Notification.js";
import Post from "../../models/Posts.js";
import User from "../../models/User.js";
import {
  addCommentNotification,
  commentAdded,
} from "../notification/commentNotification.js";

const router = express.Router();

export const createComment = asyncHandler(async (req, res) => {
  try {
    const { parentPostId, parentCommentId, content } = req.body;
    const userId = req.userId;
    console.log(parentPostId, parentCommentId, content);
    const isParentPostIdEmpty = false;
    const isCreatorEmpty = false;
    const isContentEmpty = false;
    let parentPostNotificationId = "";
    let parentCommentNotificationId = "";
    let parentComment;
    if (isParentPostIdEmpty || isCreatorEmpty || isContentEmpty) {
      throw new Error("Empty entries");
    } else {
      // Check if userId is valid
      const user = await User.findById(mongoose.Types.ObjectId(userId));
      if (!user) {
        throw new Error("User not found.");
      }
      const creator = {
        id: userId,
        firstName: user.name.firstName,
        lastName: user.name.lastName,
        userName: user.userName,
      };
      console.log(creator);
      // Check if parentCommentId exists
      if (parentCommentId) {
        parentComment = await Comment.findById(parentCommentId);
        parentCommentNotificationId = parentComment.notification.notificationId;
        if (!parentComment) {
          throw new Error("Parent comment not found.");
        }
      }

      // Check if parentPostId is valid
      const post = await Post.findById(parentPostId);
      parentPostNotificationId = post.notification.notificationId;
      if (!post) {
        throw new Error("Parent Post not found.");
      }

      const newComment = new Comment({
        parentPostId,
        parentCommentId,
        creator,
        content,
      });
      const savedComment = await newComment.save();
      const notification = new Notification({
        type: "Comment",
        receipentId: userId,
        commentId: savedComment._id,
      });
      console.log(
        "Ids and notification are ",
        notification._id,
        savedComment._id,
        notification
      );
      notification
        .save()
        .then(async (notification) => {
          await Comment.findByIdAndUpdate(savedComment._id, {
            "notification.notificationId": notification._id,
          });
          console.log("Ids are ", notification._id, savedComment._id);
        })
        .catch((err) => {
          return res.json({
            status: "FAILED",
            message: err.message,
          });
        });
      const notificationData = {
        //here the recipient is the user of whose post/comment the new comment has been posted
        recipientId:
          (parentCommentId && parentComment.creator.id) || post.creator.id,
        senderId: userId,
        postId: "",
        commentId: savedComment._id,
        notificationId: parentCommentNotificationId || parentPostNotificationId,
      };
      commentAdded(notificationData);
      // It is a parent comment, update the post
      if (!parentCommentId) {
        await Post.findOneAndUpdate(
          { _id: parentPostId },
          {
            $inc: { "comments.count": 1 },
            $push: { "comments.commentsList": savedComment._id },
          },
          { new: true }
        );
      } else {
        // It is a child comment, update the parent comment
        await Comment.findOneAndUpdate(
          { _id: parentCommentId },
          {
            $inc: { "comments.count": 1 },
            $push: { "comments.commentsList": savedComment._id },
          },
          { new: true }
        );
      }

      res.json({
        status: "SUCCESS",
        message: "Comment Added successfully",
      });
    }
  } catch (error) {
    res.json({
      status: "FAILED",
      message: error.message,
    });
  }
});
