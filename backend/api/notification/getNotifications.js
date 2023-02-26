//fetches the notifications in a pagination manner

import express from "express";
import asyncHandler from "express-async-handler";
import Notification from "../../models/Notification.js";
import Profile from "../../models/UserProfile.js";

const router = express.Router();

export const getNotifications = asyncHandler(async (req, res) => {
  try {
    const userId = req.userId;
    const page = parseInt(req.query.page) || 1; // default to page 1 if not specified
    const limit = parseInt(req.query.limit) || 10; // default to 10 posts per page if not specified
    const skip = (page - 1) * limit;
    const userProfile = await Profile.findOne({ userId }).catch((err) => {
      return res.json({
        status: "FAILED",
        message: err.message,
      });
    });
    const notificationArr = userProfile.notification.notificationList.slice(
      skip,
      skip + limit
    );
    console.log("Notification Array is ", notificationArr);
    let response = [];
    for (const notificationId of notificationArr) {
      try {
        const notification = await Notification.findById(notificationId).catch(
          (err) =>
            res.json({
              status: "FAILED",
              message: err.message,
            })
        );
        const isLike = notification.like.senderId;
        const isComment = notification.comment.senderId;
        let likedBy;
        let commentedBy;
        if (isLike) {
          const user = await Profile.findOne({
            userId: notification.like.senderId,
          });
          likedBy = user.name.firstName + " " + user.name.lastName;
        }
        if (isComment) {
          const user = await Profile.findOne({
            userId: notification.comment.senderId,
          });
          commentedBy = user.name.firstName + " " + user.name.lastName;
        }
        const isRead = notification.like.isRead || notification.comment.isRead;
        const resObj = {
          read: isRead,
          postId: notification.postId,
          message: `Your ${
            notification.type == "Post" ? "Post" : "Comment"
          } has ${isLike ? `like from ${likedBy}` : ""} ${
            isLike && isComment ? "and" : ""
          } ${isComment ? `comment from ${commentedBy}` : ""}`,
        };
        response.push(resObj);
      } catch (err) {
        return res.json({
          status: "FAILED",
          message: err.message,
        });
      }
    }
    return res.json({
      status: "SUCCESS",
      data: response,
    });
  } catch {
    return res.json({
      status: "FAILED",
      message: err.message,
    });
  }
});
