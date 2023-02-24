import express from "express";
import asyncHandler from "express-async-handler";
import Notification from "../../models/Notification.js";
import Post from "../../models/Posts.js";
import User from "../../models/User.js";
import Profile from "../../models/UserProfile.js";

export const addCommentNotification = async ({
  recipientId,
  senderId,
  parentComment,
  parentPost,
  postId,
  commentId,
  notificationId,
  notificationType,
}) => {
  const notification = await Notification.findById(notificationId).catch(
    (err) => {
      return res.json({
        status: "FAILED",
        message: err.message,
      });
    }
  );

  const userProfile = await Profile.findOne({ userId: recipientId }).catch(
    (err) => {
      return res.json({
        status: "FAILED",
        message: err.message,
      });
    }
  );
  // userProfile.notification.notificationList.push(notificationId);
  // Add the new notification ID to the notificationList array
  userProfile.notification.notificationList.addToSet(notificationId);
  // Remove the new notification ID from its current position in the array (if it exists)
  userProfile.notification.notificationList.pull(notificationId);
  // Add the new notification ID to the front of the array
  userProfile.notification.notificationList.unshift(notificationId);
  userProfile.save();
  console.log(userProfile);
  notification.like.senderId = senderId;
  notification.like.timeStamp = Date.now();
  notification.save();
};

export const commentAdded = async ({
  recipientId,
  senderId,
  postId,
  commentId,
  notificationId,
}) => {
  const userProfile = await Profile.findOne({ userId: recipientId }).catch(
    (err) => {
      return res.json({
        status: "FAILED",
        message: err.message,
      });
    }
  );
  const notification = await Notification.findById(notificationId);
  // Add the new notification ID to the notificationList array
  userProfile.notification.notificationList.addToSet(notificationId);
  // Remove the new notification ID from its current position in the array (if it exists)
  userProfile.notification.notificationList.pull(notificationId);
  // Add the new notification ID to the front of the array
  userProfile.notification.notificationList.unshift(notificationId);
  userProfile.save();
  notification.comment.senderId = senderId;
  notification.like.timeStamp = Date.now();
  notification.save();
};
