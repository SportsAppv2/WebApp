import express from "express";
import asyncHandler from "express-async-handler";
import { decodeJwt } from "../../helpers/decodeJwt.js";
import Profile from "../../models/UserProfile.js";

export const editProfile = asyncHandler(async (req, res) => {
  try {
    const userId = req.userId;
    console.log("INSIDE EDITPROFILE ", userId);
    const updatedData = req.body;
    console.log(updatedData);
    const updatedProfile = await Profile.findOneAndUpdate(
      { userId },
      {
        $set: updatedData,
      },
      {
        new: true,
      }
    ).catch((err) => {
      res.json({
        status: "FAILED",
        message: err.message,
      });
    });
    console.log("Updated profile data is ", updatedProfile);
    return res.status(200).json({ status: "SUCCESS", message: updatedProfile });
  } catch (err) {
    res.status(400).json({ status: "FAILED", message: err.message });
  }
});
