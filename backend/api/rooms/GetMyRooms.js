//This returns a list of rooms the user is an admin of
import express from "express";
import asyncHandler from "express-async-handler";
import Room from "../../models/Room.js";
import Profile from "../../models/UserProfile.js";

const router = express.Router();

export const getRooms = asyncHandler(async (req, res) => {
  try {
    const userId = req.userId;
    const userProfile = await Profile.findOne(userId).catch();
    const adminRooms = userProfile.roomsJoined.moderatorOf; //rooms which the user is an admin of
    const adminRoomsArr = [];
    for (let i = 0; i < adminRooms.length; i++) {}
  } catch (err) {
    res.json({
      status: "FAILED",
      message: err.message,
    });
  }
});
