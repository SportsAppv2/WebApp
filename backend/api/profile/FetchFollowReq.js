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
    return res.json({
      status: "SUCCESS",
      data: userProfile.followRequest,
    });
  } catch (err) {
    res.json({
      status: "FAILED",
      message: err.message,
    });
  }
});
