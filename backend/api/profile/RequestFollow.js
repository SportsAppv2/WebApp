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
    const { followedUserId } = req.body; // user id of the user being followed
    if (followerUserId == followedUserId) {
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
    if (followerProfile.following.followingList.includes(followedUserId)) {
      return res.status(400).json({
        status: "FAILED",
        message: "You are already following this user.",
      });
    }

    // Check if the follower has already sent a follow request to the user
    if (followerProfile.followingRequest.requestList.includes(followedUserId)) {
      return res.status(400).json({
        status: "FAILED",
        message: "You have already sent a follow request to this user.",
      });
    }

    // Find the user being followed profile
    const followedProfile = await Profile.findOne({
      userId: followedUserId,
    }).catch((err) => {
      res.json({ status: "FAILED", message: err.message });
    });
    console.log(
      "Profile about to follow has privacy ",
      followerProfile.settings.profilePrivacy
    );
    if (followedProfile.settings.profilePrivacy == "Everyone") {
      followedProfile.follower.count++;
      followedProfile.follower.followerList.push(followerUserId);
      followerProfile.following.count++;
      followerProfile.following.followingList.push(followedUserId);
    } else if (followedProfile.settings.profilePrivacy == "Private") {
      followedProfile.followRequest.count++;
      followedProfile.followRequest.requestList.push(followerUserId);
      followerProfile.followingRequest.count++;
      followerProfile.followingRequest.requestList.push(followedUserId);
    }

    // Save the changes to the database
    await followedProfile.save();
    await followerProfile.save();

    return res.status(200).json({
      status: "SUCCESS",
      profilePrivacy: followedProfile.settings.profilePrivacy,
      message: "Follow request sent.",
    });
  } catch (err) {
    res.json({ status: "FAILED", message: err.message });
  }
});

export const unfollowUser = asyncHandler(async (req, res) => {
  try {
    const userId = req.userId;
    const { followedUserId } = req.body;
    const followerProfile = await Profile.findOne({ userId }).catch((err) => {
      return res.json({ status: "FAILED", message: err.message });
    });
    if (
      followerProfile.following.followingList.includes(followedUserId) == false
    ) {
      return res.json({
        status: "FAILED",
        message: "You are not following this user.",
      });
    }
    const followedProfile = await Profile.findOne({
      userId: followedUserId,
    }).catch((err) => {
      return res.json({ status: "FAILED", message: err.message });
    });
    //unfollow the user
    followedProfile.follower.count--;
    followedProfile.follower.followerList.pull(userId);
    followerProfile.following.count--;
    followerProfile.following.followingList.pull(followedUserId);
    followedProfile.save();
    followerProfile.save();
    return res.json({
      status: "SUCCESS",
      message: "Successfully unfollowed the user.",
    });
  } catch (err) {
    return res.json({
      status: "FAILED",
      message: err.message,
    });
  }
});
