import express from "express";
import asyncHandler from "express-async-handler";
import Post from "../../models/Posts.js";

const router = express.Router();

export const createPost = asyncHandler(async (req, res) => {
  try {
    const { creator, content, settings, stats, comments } = req.body;
    const isCreatorEmpty = false;
    const isContentEmpty = false;
    const isSettingsEmpty = false;
    if (isCreatorEmpty || isContentEmpty || isSettingsEmpty) {
      res.json({
        status: "FAILED",
        message: "Invalid input fields",
      });
    } else {
      const newPost = new Post({
        creator,
        content,
        settings,
        stats,
        comments,
      });
      newPost.save().then((post) => {
        console.log("Saved new post", post);
        res.json({
          status: "SUCCESS",
          message: "Post successfully saved.",
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
