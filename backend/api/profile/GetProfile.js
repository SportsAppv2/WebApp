import express from "express";
import asyncHandler from "express-async-handler";
import { decodeJwt } from "../../helpers/decodeJwt.js";
import Profile from "../../models/UserProfile.js";

export const getProfile = asyncHandler(async (req, res) => {
  try {
    const userName = req.params.id;
    const profileData = await Profile.findOne({ userName }).catch((err) => {
      res.json({
        status: "FAILED",
        message: err.message,
      });
    });
    return res.json({
      status: "SUCCESS",
      data: {
        name: profileData.name,
        contact: profileData.contact,
        location: profileData.location,
        profileView: profileData.profileView,
        follower: profileData.follower,
        following: profileData.following,
        tags: profileData.tags,
      },
    });
  } catch {
    (err) =>
      res.json({
        status: "FAILED",
        message: err.message,
      });
  }
});

export const getProfileOwn = asyncHandler(async (req, res) => {
  try {
    const jwtToken = req.headers.authorization.split(" ")[1];
    console.log("Token is ", jwtToken);
    const userId = decodeJwt(jwtToken);
    if (!userId) {
      return res.json({
        status: "FAILED",
        message: "Bearer token not found",
      });
    }
    console.log("User ID is ", userId);
    const profileData = await Profile.findOne(
      { userId: userId },
      { strictQuery: false }
    ).catch((err) => {
      res.json({
        status: "FAILED",
        message: err.message,
      });
    });
    console.log("Profile data is ", profileData);
    console.log("User ID is ", userId);
    return res.json({
      status: "SUCCESS",
      data: profileData,
    });
  } catch {
    (err) => {
      res.json({
        status: "FAILED",
        message: err.message,
      });
    };
  }
});
