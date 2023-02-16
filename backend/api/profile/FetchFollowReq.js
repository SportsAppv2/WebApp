import express from "express";
import asyncHandler from "express-async-handler";
import Room from "../../models/Room.js";
import Profile from "../../models/UserProfile.js";

const router = express.Router();

export const fetchFollowReq = asyncHandler(async (req, res) => {
  try {
    const userId = req.userId;
    const userProfile = await Profile.findOne({ userId }).catch((err) => {
      res.json({ status: "FAILED", message: err.message });
    });
    const users = [];
    for (let i = 0; i < userProfile.followRequest.count; i++) {
      const followerId = userProfile.followRequest.requestList[i];
      const user = await Profile.findOne({ userId: followerId }).catch(
        (err) => {
          res.json({ status: "FAILED", status: err.message });
        }
      );
      const userDetail = {
        name: user.name.firstName + " " + user.name.lastName,
        profilePic: user.profileView.profilePic,
        userId: followerId,
      };
      users.push(userDetail);
    }
    return res.json({
      status: "SUCCESS",
      data: {
        count: userProfile.followRequest.count,
        requestList: users,
      },
    });
  } catch (err) {
    res.json({
      status: "FAILED",
      message: err.message,
    });
  }
});
