//fetches the comments in a pagination manner

import express from "express";
import asyncHandler from "express-async-handler";
import Comment from "../../models/Comments.js";
import Post from "../../models/Posts.js";

const router = express.Router();

export const getComments = asyncHandler(async (req, res) => {
  try {
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
        comments.push(comment);
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
