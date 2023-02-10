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
    const userId = req.userId;
    const profileData = await Profile.findOne(
      { userId },
      { strictQuery: false }
    ).catch((err) => {
      res.json({
        status: "FAILED",
        message: err.message,
      });
    });
    console.log("Profile data is ", profileData);
    console.log("Should return the response now");
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
