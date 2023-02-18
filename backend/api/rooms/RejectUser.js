import express from "express";
import asyncHandler from "express-async-handler";
import Room from "../../models/Room.js";
import Profile from "../../models/UserProfile.js";

const router = express.Router();

export const rejectUser = asyncHandler(async (req, res) => {
  try {
    const userId = req.userId;
    const { roomId, pendingUserId } = req.body;
    const room = await Room.findById(roomId).catch((err) => {
      res.json({ status: "FAILED", message: err.message });
    });
    if (room.admin.owner == userId || room.admin.moderators.includes(userId)) {
      //user is authorized to reject the pending User
      room.pendingUsers.count -= 1;
      room.pendingUsers.userList.pull(pendingUserId);
      await room.save().catch((err) => {
        res.json({ status: "FAILED", message: err.message });
      });
      return res.json({
        message: "Successfully declined the room join request.",
      });
    } else {
      //user is not authozied to accept the pending User
      return res.json({
        status: "FAILED",
        message:
          "User not authorized. Declining request of new users are limited only to room owner and moderators.",
      });
    }
  } catch (err) {
    res.json({
      status: "FAILED",
      message: err.message,
    });
  }
});
