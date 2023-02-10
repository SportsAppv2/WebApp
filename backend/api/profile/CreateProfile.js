import express from "express";
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import { decodeJwt } from "../../helpers/decodeJwt.js";
import User from "../../models/User.js";
import Profile from "../../models/UserProfile.js";

const router = express.Router();

export const createProfile = asyncHandler(async (req, res) => {
  try {
    const jwtToken = req.headers.authorization.split(" ")[1];
    const userId = decodeJwt(jwtToken);
    console.log("Request received for creating profile ", req.body);
    const { userName, location, tags } = req.body;
    // Check if userName is already taken
    const existingProfile = await Profile.findOne({ userName });
    if (existingProfile)
      return res.status(400).send({ error: "User name already taken" });
    const userDetails = await User.findById(
      mongoose.Types.ObjectId(userId)
    ).then((user) => {
      const name = user.name;
      const email = user.email;
      const newProfile = new Profile({
        userId,
        userName,
        name,
        contact: {
          email,
        },
        location,
        tags,
      });
      console.log("About to create a new profile ", newProfile);
      const savedProfile = newProfile
        .save()
        .then(async (profile) => {
          const userNameAdded = await User.findByIdAndUpdate(
            userId,
            {
              $set: {
                userName,
                initalProfileDone: true,
              },
            },
            { new: true }
          ).catch((err) => {
            res.json({
              status: "FAILED",
              message: err.message,
            });
          });
          res.status(201).json({
            status: "SUCCESS",
            message: "Profile Added successfully",
          });
        })
        .catch((err) => {
          res.json({
            status: "FAILED",
            message: err.message,
          });
        });
    });
  } catch (error) {
    res.json({
      status: "FAILED",
      message: error.message,
    });
  }
});
