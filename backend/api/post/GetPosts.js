//fetches the posts in a pagination manner

import express from "express";
import asyncHandler from "express-async-handler";
import { Error } from "mongoose";
import Post from "../../models/Posts.js";
import Room from "../../models/Room.js";
import User from "../../models/User.js";
import Profile from "../../models/UserProfile.js";

const router = express.Router();

export const getPosts = asyncHandler(async (req, res) => {
  try {
    const userId = req.userId;
    const roomId = req.params.roomId;
    const page = parseInt(req.query.page) || 1; // default to page 1 if not specified
    const limit = parseInt(req.query.limit) || 10; // default to 10 posts per page if not specified
    const skip = (page - 1) * limit;
    const room = await Room.findById(roomId).select("postList").exec();
    const postIds = room.postList.slice(skip, skip + limit);
    const posts = [];
    for (const postId of postIds) {
      try {
        const post = await Post.findById(postId).catch((err) => {
          return res.json({ status: "FAILED", message: err.message });
        });
        const creatorId = post.creator.id;
        console.log("CREATOR IS ", creatorId);
        const postJson = post.toJSON();
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
          profilePic: creatorProfile.profileView.profilePic,
        };
        postJson.creator = creator;
        if (post.stats.upvotes.users.includes(userId)) {
          postJson.liked = true;
        } else {
          postJson.liked = false;
        }
        if (post.stats.downvotes.users.includes(userId)) {
          postJson.disliked = true;
        } else {
          postJson.disliked = false;
        }
        posts.push(postJson);
      } catch (err) {
        return res.json({
          status: "FAILED",
          message: err.message,
        });
      }
    }
    const count = room.postList.length;
    const totalPages = Math.ceil(count / limit);
    return res.json({
      status: "SUCCESS",
      userId: req.userId,
      data: posts,
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
export const getPostsOwn = asyncHandler(async (req, res) => {
  try {
    const userId = req.userId;
    const page = parseInt(req.query.page) || 1; // default to page 1 if not specified
    const limit = parseInt(req.query.limit) || 10; // default to 10 posts per page if not specified
    const skip = (page - 1) * limit;
    const userProfile = await Profile.findOne({ userId }).catch((err) => {
      res.json({ status: "FAILED", message: err.message });
    });
    const postIds = userProfile.activities.posts.posted.slice(
      skip,
      skip + limit
    );
    const posts = [];
    for (const postId of postIds) {
      try {
        const post = await Post.findById(postId).catch((err) => {
          return res.json({ status: "FAILED", message: err.message });
        });
        const creatorId = post.creator.id;
        const postJson = post.toJSON();
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
          profilePic: creatorProfile.profileView.profilePic,
        };
        postJson.creator = creator;
        if (post.stats.upvotes.users.includes(userId)) {
          postJson.liked = true;
        } else {
          postJson.liked = false;
        }
        if (post.stats.downvotes.users.includes(userId)) {
          postJson.disliked = true;
        } else {
          postJson.disliked = false;
        }
        posts.push(postJson);
      } catch (err) {
        return res.json({
          status: "FAILED",
          message: err.message,
        });
      }
    }
    const count = userProfile.activities.posts.posted.length;
    const totalPages = Math.ceil(count / limit);
    return res.json({
      status: "SUCCESS",
      userId: req.userId,
      data: posts,
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
export const getProfilePost = asyncHandler(async (req, res) => {
  try {
    const userName = req.params.userName; //This is userName for now. Might change it to userId later on
    const page = parseInt(req.query.page) || 1; // default to page 1 if not specified
    const limit = parseInt(req.query.limit) || 10; // default to 10 posts per page if not specified
    const skip = (page - 1) * limit;
    const userProfile = await Profile.findOne({
      userName,
    }).catch((err) =>
      res.json({
        status: "FAILED",
        message: err.message,
      })
    );
    const userId = userProfile.userId;
    const postIds = userProfile.activities.posts.posted.slice(
      skip,
      skip + limit
    );
    console.log("POST IDS ARE ", postIds);
    const posts = [];
    for (const postId of postIds) {
      try {
        console.log("POST FOUND ", postId);
        const post = await Post.findById(postId).catch((err) => {
          return res.json({ status: "FAILED", message: err.message });
        });
        if (post) {
          console.log("POST FOUND ", postId);
        }
        const creatorId = post.creator.id;
        console.log("CREATOR ID IS ", creatorId);
        const postJson = post.toJSON();
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
          profilePic: creatorProfile.profileView.profilePic,
        };
        postJson.creator = creator;
        if (post.stats.upvotes.users.includes(userId)) {
          postJson.liked = true;
        } else {
          postJson.liked = false;
        }
        if (post.stats.downvotes.users.includes(userId)) {
          postJson.disliked = true;
        } else {
          postJson.disliked = false;
        }
        posts.push(postJson);
      } catch (err) {
        return res.json({
          status: "FAILED",
          message: err.message,
        });
      }
    }
    const count = userProfile.activities.posts.posted.length;
    const totalPages = Math.ceil(count / limit);
    return res.json({
      status: "SUCCESS",
      userId: req.userId,
      data: posts,
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

export const getPost = asyncHandler(async (req, res) => {
  try {
    const userId = req.userId;
    const postId = req.params.postId;
    const post = await Post.findById(postId).catch((err) => {
      throw new Error(err.message);
    });
    const user = await Profile.findOne({ userId: post.creator.id }).catch(
      (err) => {
        throw new Error(err.message);
      }
    );
    const room = await Room.findById(post.roomId).catch((err) => {
      throw new Error(err.message);
    });
    console.log("USER IS ", user);
    return res.json({
      status: "SUCCESS",
      data: {
        postId: post._id,
        roomName: room.roomDetails.roomName,
        roomId: room._id,
        creator: {
          id: user.userId,
          name: user.name,
          userName: user.userName,
          profilePic: user.profileView.profilePic,
        },
        stats: {
          upvotes: { count: post.stats.upvotes.count },
          downvotes: { count: post.stats.downvotes.count },
          createdAt: post.stats.createdAt,
        },
        content: {
          text: post.content.text,
          image: post.content.image,
          video: "",
        },
        comments: {
          count: post.comments.count,
        },
        liked: post.stats.upvotes.users.includes(userId),
        disliked: post.stats.downvotes.users.includes(userId),
      },
    });
  } catch (err) {
    return res.json({
      status: "FAILED",
      message: err.message,
    });
  }
});
