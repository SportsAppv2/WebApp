import express from "express";
import asyncHandler from "express-async-handler";
import Room from "../../models/Room.js";
import Profile from "../../models/UserProfile.js";

const router = express.Router();

export const acceptUser = asyncHandler(async (req, res) => {
  try {
    const userId = req.userId;
    const { roomId, pendingUserId } = req.body;
    const room = await Room.findById(roomId).catch((err) => {
      res.json({ status: "FAILED", message: err.message });
    });
    console.log("ROOM IS ", room);
    if (room.admin.owner == userId || room.admin.moderators.includes(userId)) {
      //user is authorized to accept the pending User
      room.pendingUsers.count -= 1;
      room.pendingUsers.userList.pull(pendingUserId);
      room.users.count += 1;
      room.users.userList.push(pendingUserId);
      await room.save().catch((err) => {
        res.json({ status: "FAILED", message: err.message });
      });
      //push the room Id to the list of Profile.joinedRoom
      const userProfile = await Profile.findOneAndUpdate(
        { userId },
        { $push: { "roomsJoined.allRooms": room._id } }
      ).catch((err) => res.json({ status: "FAILED", message: err.message }));
      return res.json({ message: "Successfully joined the room" });
    } else {
      //user is not authozied to accept the pending User
      return res.json({
        status: "FAILED",
        message:
          "User not authorized. Acceptance of new users are limited only to room owner and moderators.",
      });
    }
  } catch (err) {
    res.json({
      status: "FAILED",
      message: err.message,
    });
  }
});
