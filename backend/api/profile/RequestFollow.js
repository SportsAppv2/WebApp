import express from "express";
import asyncHandler from "express-async-handler";
import Room from "../../models/Room.js";
import Profile from "../../models/UserProfile.js";

const router = express.Router();

export const requestFollow = asyncHandler(async (req, res) => {
  try {
    /** When a user A request to follow user B
     * Things happening:
     * First check whether the A has already requested to follow B
     * 1. User B gets added to user A's following list, and count also increases by 1
     * 2. User A gets added to user B's pendingRequest list, and count also increases by 1
     */
    const followerUserId = req.userId; // user id of the follower
    const { followingUserId } = req.body; // user id of the user being followed
    if (followerUserId == followingUserId) {
      return res.json({
        status: "FAILED",
        message: "User cannot follow themself",
      });
    }
    // Find the follower profile
    const followerProfile = await Profile.findOne({
      userId: followerUserId,
    }).catch((err) => {
      res.json({ status: "FAILED", message: err.message });
    });

    // Check if the follower has already followed the user
    if (followerProfile.following.followingList.includes(followingUserId)) {
      return res.status(400).json({
        status: "FAILED",
        message: "You are already following this user.",
      });
    }

    // Check if the follower has already sent a follow request to the user
    if (
      followerProfile.followingRequest.requestList.includes(followingUserId)
    ) {
      return res.status(400).json({
        status: "FAILED",
        message: "You have already sent a follow request to this user.",
      });
    }

    // Find the user being followed profile
    const followingProfile = await Profile.findOne({
      userId: followingUserId,
    }).catch((err) => {
      res.json({ status: "FAILED", message: err.message });
    });

    // If both conditions are false, then follow the user
    followingProfile.followRequest.count++;
    followingProfile.followRequest.requestList.push(followerUserId);
    followerProfile.followingRequest.count++;
    followerProfile.followingRequest.requestList.push(followingUserId);

    // Save the changes to the database
    await followingProfile.save();
    await followerProfile.save();

    return res
      .status(200)
      .json({ status: "SUCCESS", message: "Follow request sent." });
  } catch (err) {
    res.json({ status: "FAILED", message: err.message });
  }
});
