import express from "express";
import dotenv from "dotenv";
import asyncHandler from "express-async-handler";
import User from "../../models/User.js";

dotenv.config({ path: "../../../.env" });

const router = express.Router();

export const logoutRoute = asyncHandler(async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        return res.json({
          status: "FAILED",
          message: err.message,
        });
      } else {
        return res.json({
          status: "SUCCESS",
          message: "Successfully logged out.",
        });
      }
    });
  } catch (err) {
    return res.json({
      status: "FAILED",
      message: err.message,
    });
  }
});
