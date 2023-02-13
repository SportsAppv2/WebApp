import express from "express";
import asyncHandler from "express-async-handler";
import Room from "../../models/Room.js";
import Profile from "../../models/UserProfile.js";

const router = express.Router();

export const joinRoom = asyncHandler(async (req, res) => {
  try {
    const userId = req.userId;
    const { joiningCode, roomName } = req.body;
    console.log("res.body is ", req.body);
    let room = null;
    if (joiningCode) {
      room = await Room.findOne({ joiningCode }).catch((err) => {
        res.json({
          status: "FAILED 1",
          message: err.message,
        });
      });
    } else if (roomName) {
      room = await Room.findOne({ "roomDetails.roomName": roomName }).catch(
        (err) => {
          res.json({
            status: "FAILED 2",
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
    // Check if the user is already in the user list or the pending list
    if (
      room.pendingUsers.userList.includes(userId) ||
      room.users.userList.includes(userId)
    ) {
      return res.status(400).json({
        status: "FAILED",
        message: "User is already in the room or has pending request",
      });
    }
    //if public room add the user to the user list
    if (room.roomDetails.isPrivateRoom == false) {
      room.users.count += 1;
      room.users.userList.push(userId);
      await room.save().catch((err) => {
        res.json({
          status: "FAILED",
          message: err.message,
        });
      });
      //push the room Id to the list of Profile.joinedRoom
      const userProfile = await Profile.findOneAndUpdate(
        { userId },
        { $push: { roomsJoined: room._id } }
      ).catch((err) => res.json({ status: "FAILED", message: err.message }));
      return res.json({ message: "Successfully joined the room" });
    }
    //if private room add the user to the pending list
    else if (room.roomDetails.isPrivateRoom == true) {
      room.pendingUsers.count += 1;
      room.pendingUsers.userList.push(userId);
      await room.save();
      return res.json({
        message: "Request to join the room sent successfully",
      });
    }
    return res.json({
      status: "SUCCESS",
      room: room,
    });
  } catch (err) {
    res.json({
      status: "FAILED 3",
      message: err.message,
    });
  }
});
