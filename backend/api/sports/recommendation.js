import express from "express";
import asyncHandler from "express-async-handler";
import Room from "../../models/Room.js";
import Sports from "../../models/Sports.js";
import Profile from "../../models/UserProfile.js";

const router = express.Router();
/*
Expected response =>
{
  "Football" : [{roomId, roomName, memberCount}]
}
*/
export const getRecommendedRooms = asyncHandler(async (req, res) => {
  try {
    const userId = req.userId;
    const user = await Profile.findOne({ userId }).catch();
    const tagsDictArr = user.tags;
    const tagsArr = tagsDictArr.map((tag) => tag.tagName);
    const sports = [
      "Cricket",
      "Football",
      "Hockey",
      "American Football",
      "Tennis",
      "Volleyball",
      "Table Tennis",
      "Basketball",
      "Baseball",
      "Rugby",
      "Golf",
      "Formula 1",
      "Wrestling",
      "Boxing",
      "MMA",
      "MotoGP",
      "Swimming",
    ];
    const tags = sports.filter((element) => {
      const lowerCaseElement = element.toLowerCase();
      const lowerCaseArray2 = tagsArr.map((e) => e.toLowerCase());
      return lowerCaseArray2.includes(lowerCaseElement);
    });

    const roomTags = [{ Football: 1 }, { Tennis: 2 }, { MMA: 2 }];
    const weight_tags = 1.5;
    const weight_roomTags = 1;
    const totalRecommend = 10;
    const totalRoomTags = 6; //load this dynamically
    const totalWeight =
      weight_tags * tags.length + weight_roomTags * totalRoomTags;
    // Calculate the weight of each tag and normalize the result
    const tagWeights = [...tags, ...roomTags.map((obj) => Object.keys(obj)[0])]
      .filter((value, index, self) => self.indexOf(value) === index)
      .map((tag) => ({
        [tag]:
          ((tags.includes(tag) ? weight_tags : 0) +
            (roomTags.find((obj) => obj.hasOwnProperty(tag))?.[tag] || 0) *
              weight_roomTags) /
          totalWeight,
      }));
    const tagWeightPromises = tagWeights.map(async (item) => {
      const num_rooms = Math.ceil(Object.values(item)[0] * totalRecommend);
      const room_name = Object.keys(item)[0];
      const sport = await Sports.findOne({ name: room_name }).catch();
      const roomArr = sport.groups.publicGroup.slice(0, num_rooms);
      const roomObj = await roomDetails(roomArr);
      return { [room_name]: roomObj };
    });

    const tagWeightResults = await Promise.all(tagWeightPromises);
    const recommended = Object.assign(...tagWeightResults);
    console.log("Recommended Obj ", recommended);

    return res.json({
      status: "SUCCESS",
      data: recommended,
    });
  } catch (err) {
    return res.json({
      status: "FAILED",
      message: err.message,
    });
  }
});

export const roomDetails = async (roomIds) => {
  //console.log(roomIds);
  const arr = [];
  const promises = roomIds.map(async (roomId) => {
    const room = await Room.findById(roomId).catch();
    const roomDetail = {
      roomId,
      roomDetails: room.roomDetails.toJSON(),
    };
    //console.log("Room details ", roomDetail);
    return roomDetail;
  });
  const results = await Promise.all(promises);
  //console.log("Array is ", results);
  return results;
};
