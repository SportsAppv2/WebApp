import express from "express";
import asyncHandler from "express-async-handler";
import { decodeJwt } from "../../helpers/decodeJwt.js";
import Profile from "../../models/UserProfile.js";

export const getProfile = asyncHandler(async (req, res) => {
  try {
    const jwtToken = req.headers.authorization.split(" ")[1];
    const userId = decodeJwt(jwtToken);
    const profileData = await Profile.findOne({ userId }).catch((err) => {
      res.json({
        status: "FAILED",
        message: err.message,
      });
    });
    return res.json({
      status: "SUCCESS",
      data: profileData,
    });
  } catch {
    (err) =>
      res.json({
        status: "FAILED",
        message: err.message,
      });
  }
});
