//this returns the list of rooms the user has joined
import express from "express";
import asyncHandler from "express-async-handler";
import Room from "../../models/Room.js";
import Profile from "../../models/UserProfile.js";

const router = express.Router();

export const getRooms = asyncHandler(async (req, res) => {
  try {
    const userId = req.userId;
    const userProfile = await Profile.findOne({ userId }).catch();
    const roomsJoined = userProfile.roomsJoined.allRooms;
    const roomDetails = [];
    if (!roomsJoined) {
      return res.json({
        status: "WARNING",
        message: "User didn't join any rooms.",
      });
    }
    for (let i = 0; i < roomsJoined.length; i++) {
      const room = await Room.findById(roomsJoined[i]);
      if (room) {
        roomDetails.push(room);
      }
    }
    res.json({ status: "SUCCESS", data: roomDetails });
  } catch (err) {
    res.json({
      status: "FAILED",
      message: err.message,
    });
  }
});
