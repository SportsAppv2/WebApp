//fetches the comments in a pagination manner

import express from "express";
import asyncHandler from "express-async-handler";
import Comment from "../../models/Comments.js";
import Post from "../../models/Posts.js";
import Profile from "../../models/UserProfile.js";

const router = express.Router();

export const getComments = asyncHandler(async (req, res) => {
  try {
    const userId = req.userId;
    const postId = req.params.postId;
    const commentId = req.params.commentId || "";
    console.log(
      "Searching for comments for the postID ",
      postId,
      "And commentId ",
      commentId
    );
    const page = parseInt(req.query.page) || 1; // default to page 1 if not specified
    const limit = parseInt(req.query.limit) || 10; // default to 10 posts per page if not specified
    const skip = (page - 1) * limit;
    let comment;
    if (commentId == "") {
      comment = await Post.findById(postId).select("comments").exec();
    } else {
      comment = await Comment.findById(commentId).select("comments").exec();
    }
    console.log("Comment list is ", comment);
    if (!comment.comments.commentsList) {
      return res.json({
        data: [],
        page: 0,
        limit: 0,
        totalPages: 0,
      });
    }
    const commentIds = comment.comments.commentsList.slice(skip, skip + limit);
    const comments = [];
    for (const commentId of commentIds) {
      try {
        const comment = await Comment.findById(commentId);
        const creatorId = comment.creator.id;
        const creatorProfile = await Profile.findOne({
          userId: creatorId,
        }).catch((err) => {
          return res.json({ status: "FAILED", message: err.message });
        });
        const creator = {
          id: creatorId,
          firstName: creatorProfile.name.firstName,
          lastName: creatorProfile.name.lastName,
          userName: creatorProfile.userName,
        };
        const commentJson = comment.toJSON();
        commentJson.creator = creator;
        if (comment.stats.upvotes.users.includes(userId)) {
          commentJson.liked = true;
        } else {
          commentJson.liked = false;
        }
        if (comment.stats.downvotes.users.includes(userId)) {
          commentJson.disliked = true;
        } else {
          commentJson.disliked = false;
        }
        comments.push(commentJson);
      } catch (err) {
        return res.json({
          status: "FAILED",
          message: err.message,
        });
      }
    }
    const count = comment.comments.count;
    const totalPages = Math.ceil(count / limit);
    return res.json({
      data: comments,
      page,
      limit,
      totalPages,
    });
  } catch (err) {
    return res.json({
      status: "FAILED",
      message: err.message,
    });
  }
});
