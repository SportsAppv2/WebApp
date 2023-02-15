import express from "express";
import asyncHandler from "express-async-handler";
import Profile from "../../models/UserProfile.js";

const router = express.Router();

export const rejectFollowReq = asyncHandler(async (req, res) => {
  try {
    const userId = req.userId;
    const { followerId } = req.body;
    const userProfile = await Profile.findOne({ userId }).catch();
    if (userProfile.followRequest.requestList.includes(followerId)) {
      const followerProfile = await Profile.findOne({
        userId: followerId,
      }).catch((err) => {
        res.json({ status: "FAILED", message: err.message });
      });
      //transfer the userId from followingRequest to following
      followerProfile.followingRequest.count--;
      followerProfile.followingRequest.requestList.pull(userId);
      //transfer the followerId from followRequest to follower
      userProfile.followRequest.count--;
      userProfile.followRequest.requestList.pull(followerId);
      await userProfile.save();
      await followerProfile.save();
      return res.json({
        status: "SUCCESS",
        message: "Rejected follow request",
      });
    } else {
      return res.json({
        status: "FAILED",
        message:
          "Cannot reject the request since the user has not requested to follow",
      });
    }
  } catch (err) {
    res.json({ status: "FAILED", message: err.message });
  }
});
