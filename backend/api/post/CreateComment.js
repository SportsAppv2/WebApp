import express from "express";
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import Comment from "../../models/Comments.js";
import Post from "../../models/Posts.js";
import User from "../../models/User.js";

const router = express.Router();

export const createComment = asyncHandler(async (req, res) => {
  try {
    const { parentPostId, parentCommentId, content } = req.body;
    const userId = req.userId;
    console.log(parentPostId, parentCommentId, content);
    const isParentPostIdEmpty = false;
    const isCreatorEmpty = false;
    const isContentEmpty = false;
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
        const parentComment = await Comment.findById(parentCommentId);
        if (!parentComment) {
          throw new Error("Parent comment not found.");
        }
      }

      // Check if parentPostId is valid
      const post = await Post.findById(parentPostId);
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
