//This returns a list of rooms the user is an admin of
import express from "express";
import asyncHandler from "express-async-handler";
import Room from "../../models/Room.js";
import Profile from "../../models/UserProfile.js";

const router = express.Router();

export const getMyAdminRooms = asyncHandler(async (req, res) => {
  try {
    const userId = req.userId;
    const userProfile = await Profile.findOne({ userId }).catch();
    console.log("User profile is ", userProfile);
    const adminRooms = userProfile.roomsJoined.moderatorOf; //rooms which the user is an admin of
    console.log("User is moderator of ", adminRooms);
    const pendingUserReq = { totalCount: 0, userList: [] };
    const totalReq = 0;
    const limit = 5; //This is the max number of user room join request from each room
    for (let i = 0; i < adminRooms.length; i++) {
      const room = await Room.findById(adminRooms[i]).catch();
      // console.log("User is admin of ", room);
      if (
        room.roomDetails.isPrivateRoom == false ||
        room.pendingUsers.count == 0
      ) {
        continue;
      }
      const reqObj = {
        roomName: room.roomDetails.roomName,
        reqCount: room.pendingUsers.count,
        roomId: room._id,
        users: [],
      };
      pendingUserReq.totalCount += room.pendingUsers.count;
      for (let j = 0; j < Math.min(limit, room.pendingUsers.count); j++) {
        const user = await Profile.findOne({
          userId: room.pendingUsers.userList[j],
        });
        // console.log("Requested user is ", user);
        reqObj.users.push({
          name: user.name,
          userName: user.userName,
          profilePic: user.profileView.profilePic,
          userId: user.userId,
        });
      }
      pendingUserReq.userList.push(reqObj);
    }
    return res.json({
      status: "SUCCESS",
      data: pendingUserReq,
    });
  } catch (err) {
    res.json({
      status: "FAILED",
      message: err.message,
    });
  }
});
