import express from "express";
import asyncHandler from "express-async-handler";
import { decodeJwt } from "../../helpers/decodeJwt.js";
import Profile from "../../models/UserProfile.js";

export const editProfile = asyncHandler(async (req, res) => {
  try {
    res.profile.set(req.body);
    const updatedProfile = await res.profile.save();
    res.json(updatedProfile);
  } catch {
    res.status(400).json({ message: error.message });
  }
});

// Middleware function to retrieve a profile by ID
export const verifyProfile = async (req, res, next) => {
  try {
    const jwtToken = req.headers.authorization.split(" ")[1];
    const userId = decodeJwt(jwtToken);
    const profile = await Profile.findById(userId);
    if (!profile)
      return res
        .status(404)
        .json({ status: "FAILED", message: "Profile not found" });
    res.profile = profile;
    next();
  } catch (error) {
    return res.status(500).json({ status: "FAILED", message: error.message });
  }
};
