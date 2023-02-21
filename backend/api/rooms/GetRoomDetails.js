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
    let admins = {
      moderators: [],
    };
    const profile = await Profile.findOne({
      userId: room.admin.owner,
    }).catch((err) => {
      return res.json({ status: "FAILED", message: err.message });
    });
    admins.owner = {
      name: profile.name,
      userName: profile.userName,
      profilePic: profile.profileView.profilePic,
      userId: profile.userId,
    };
    for (let i = 0; i < room.admin.moderators.length; i++) {
      const profile = await Profile.findOne({
        userId: room.admin.moderators[i],
      }).catch((err) => {
        return res.json({ status: "FAILED", message: err.message });
      });
      admins.moderators.push({
        name: profile.name,
        userName: profile.userName,
        profilePic: profile.profileView.profilePic,
        userId: profile.userId,
      });
    }
    return res.json({
      status: "SUCCESS",
      data: {
        roomDetails: room.roomDetails,
        userCount: room.users.count,
        admin: admins,
        joiningCode: room.joiningCode,
      },
    });
  } catch (err) {
    return res.json({
      status: "FAILED",
      message: err.message,
    });
  }
});
