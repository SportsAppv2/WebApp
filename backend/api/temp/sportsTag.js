// This function is putting the sports tags from the room collection into the sports collection
import express from "express";
import asyncHandler from "express-async-handler";
import Room from "../../models/Room.js";
import Sports from "../../models/Sports.js";
import Profile from "../../models/UserProfile.js";

const router = express.Router();

export const exportTags = asyncHandler(async (req, res) => {
  try {
    const rooms = await Room.find();
    for (const room of rooms) {
      const sports = room.roomDetails.sportsName;
      for (const sport of sports) {
        const sportDb = await Sports.findOne({ name: sport });
        if (sportDb) {
          // check if sport is found
          sportDb.groups.count++;
          if (room.roomDetails.isPrivateRoom) {
            if (!sportDb.groups.privateGroup.includes(room._id)) {
              sportDb.groups.privateGroup.push(room._id);
            }
          } else {
            if (!sportDb.groups.publicGroup.includes(room._id)) {
              sportDb.groups.publicGroup.push(room._id);
            }
          }
          await sportDb.save();
        }
      }
    }

    return res.json({
      status: "SUCCESS",
      message: "Exported tags successfully",
    });
  } catch (err) {
    return res.json({
      status: "FAILED",
      message: err.message,
    });
  }
});

export const updateLawnTennisToTennis = asyncHandler(async (req, res) => {
  try {
    // Update all the documents where "Lawn Tennis" is found in the sport array
    const result = await Room.updateMany(
      { "roomDetails.sportsName": "Lawn Tennis" },
      { $set: { "roomDetails.sportsName.$": "Tennis" } }
    );
    // Send a success response to the client
    res
      .status(200)
      .send(`Updated ${result.nModified} rooms with Lawn Tennis to Tennis`);
  } catch (err) {
    return res.json({
      status: "FAILED",
      message: err.message,
    });
  }
});
