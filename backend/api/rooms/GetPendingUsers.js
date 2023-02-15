import express from "express";
import asyncHandler from "express-async-handler";
import Room from "../../models/Room.js";
import Profile from "../../models/UserProfile.js";

const router = express.Router();

export const getPendingUsers = asyncHandler(async (req, res) => {
  try {
    const userId = req.userId;
    const roomId = req.params.id;
    const room = await Room.findById(roomId).catch((err) => {
      res.json({ status: "FAILED", message: err.message });
    });
    console.log("Room is ", room);
    if (!room) {
      return res.json({ status: "FAILED", message: "Room not found" });
    }
    if (room.admin.owner == userId || room.admin.moderators.includes(userId)) {
      return res.json({ status: "SUCCESS", data: room.pendingUsers });
    } else {
      return res.json({
        status: "FAILED",
        message: "User not authorized for this request",
      });
    }
  } catch (err) {
    res.json({ status: "FAILED", message: err.message });
  }
});
