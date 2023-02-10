import express from "express";
import asyncHandler from "express-async-handler";
import { decodeJwt } from "../../helpers/decodeJwt.js";
import Post from "../../models/Posts.js";
import User from "../../models/User.js";
import Profile from "../../models/UserProfile.js";

const router = express.Router();

export const createPost = asyncHandler(async (req, res) => {
  try {
    const { content, settings } = req.body;
    // const jwtToken = req.headers.authorization.split(" ")[1];
    // const userId = decodeJwt(jwtToken);
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
      const userDetails = await Profile.findOne({ userId })
        .then((user) => {
          const creator = {
            id: userId,
            firstName: user.name.firstName,
            lastName: user.name.lastName,
            userName: user.userName,
          };
          const newPost = new Post({
            creator,
            content,
            settings,
          });
          newPost.save().then((post) => {
            console.log("Saved new post", post);
            res.json({
              status: "SUCCESS",
              message: "Post successfully saved.",
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
