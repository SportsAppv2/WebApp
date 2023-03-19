import express from "express";
import asyncHandler from "express-async-handler";
import Sports from "../../models/Sports.js";

const router = express.Router();

export const getSportList = asyncHandler(async (req, res) => {
  try {
    const sportsArr = [];
    const sportsList = await Sports.find();
    for (const sport of sportsList) {
      sportsArr.push({
        name: sport.name,
        emoji: sport.emoji,
      });
    }
    return res.json({
      status: "SUCCESS",
      data: sportsArr,
    });
  } catch (err) {
    res.json({
      status: "FAILED",
      message: err.message,
    });
  }
});
