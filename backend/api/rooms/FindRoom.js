import express from "express";
import asyncHandler from "express-async-handler";
import Room from "../../models/Room.js";
import Profile from "../../models/UserProfile.js";

const router = express.Router();

export const findRoom = asyncHandler(async (req, res) => {
  try {
    // const userId = req.userId;
    const { joiningCode, roomName } = req.body;
    let room = null;
    if (joiningCode) {
      room = await Room.findOne({ joiningCode }).catch((err) => {
        res.json({
          status: "FAILED",
          message: err.message,
        });
      });
    } else if (roomName) {
      room = await Room.findOne({ "roomDetails.roomName": roomName }).catch(
        (err) => {
          res.json({
            status: "FAILED",
            message: err.message,
          });
        }
      );
    }
    console.log("ROOM IS ", room);
    if (!room) {
      res.json({
        status: "FAILED",
        message: "Room not found",
      });
    }
    return res.json({
      status: "SUCCESS",
      data: {
        roomDetails: room.roomDetails,
        admin: room.admin,
        userCount: room.users.count,
      },
    });
  } catch (err) {
    res.json({
      status: "FAILED",
      messahe: err.message,
    });
  }
});
