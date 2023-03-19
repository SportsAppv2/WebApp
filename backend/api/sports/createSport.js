import express from "express";
import asyncHandler from "express-async-handler";
import Sports from "../../models/Sports.js";

const router = express.Router();

export const createSport = asyncHandler(async (req, res) => {
  try {
    const { sportsList } = req.body;
    for (const sport of sportsList) {
      const existingSport = await Sports.findOne({ name: sport.name }).catch();
      if (!existingSport) {
        //the sport is not present in the DB. Create a new instance of that sport
        const newSport = new Sports({
          name: sport.name,
          emoji: sport.emoji,
        });
        await newSport.save();
      } else {
        console.log(sport.name, " already exists in the database");
      }
    }
    return res.json({
      status: "SUCCESS",
      message: "Successfully added the sports",
    });
  } catch (err) {
    return res.json({
      status: "FAILED",
      message: err.message,
    });
  }
});
