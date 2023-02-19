//this will return the group details given a room ID
import express from "express";
import asyncHandler from "express-async-handler";
import Room from "../../models/Room.js";
import Profile from "../../models/UserProfile.js";

const router = express.Router();

export const getRoomDetails = asyncHandler(async (req, res) => {
  try {
    const userId = req.userId;
    const roomId = req.params.roomId;
    const room = req.room;
    if (!room) {
      return res.json({
        status: "FAILED",
        message: "Room not found",
      });
    }
    return res.json({
      status: "SUCCESS",
      data: { roomDetails: room.roomDetails, userCount: room.users.count },
    });
  } catch (err) {
    return res.json({
      status: "FAILED",
      message: err.message,
    });
  }
});
