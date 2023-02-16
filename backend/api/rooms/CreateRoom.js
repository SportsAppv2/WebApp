import express from "express";
import asyncHandler from "express-async-handler";
import Room from "../../models/Room.js";
import Profile from "../../models/UserProfile.js";

const router = express.Router();

export const createRoom = asyncHandler(async (req, res) => {
  try {
    const userId = req.userId;
    const { roomDetails } = req.body;
    const admin = {
      owner: userId,
    };
    if (
      !roomDetails.roomName ||
      !roomDetails.isPrivateRoom.toString().length ||
      !roomDetails.sportsName ||
      !roomDetails.roomSummary
    ) {
      return res.json({
        status: "FAILED",
        message: "Empty fields not allowed",
      });
    }
    const newRoom = new Room({
      roomDetails,
      admin,
    });
    const savedRoom = await newRoom.save().catch((err) => {
      res.json({
        status: "FAILED",
        message: err.message,
      });
    });
    console.log("Room saved ", savedRoom);
    //push the room Id to the list of Profile.joinedRoom
    const userProfile = await Profile.findOneAndUpdate(
      { userId },
      {
        $push: {
          "roomsJoined.ownerOf": newRoom._id,
          "roomsJoined.moderatorOf": newRoom._id,
          "roomsJoined.allRooms": newRoom._id,
        },
      },
      { new: true }
    ).catch((err) => res.json({ status: "FAILED", message: err.message }));
    console.log("Updated user profile ", userProfile);
    return res.json({
      status: "SUCCESS",
      message: "New room created successfully.",
    });
  } catch (err) {
    res.json({
      status: "FAILED",
      message: err.message,
    });
  }
});
