import express from "express";
import asyncHandler from "express-async-handler";
import Post from "../../models/Posts.js";
import User from "../../models/User.js";

export const addNotification = async ({
  recipientId,
  senderId,
  postId,
  commentId,
  notificationType,
}) => {
  if (notificationType == "postLiked") {
  }
};
