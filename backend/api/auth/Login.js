import express from "express";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../../models/User.js";

dotenv.config({ path: "../../../.env" });

const router = express.Router();

export const loginRoute = asyncHandler(async (req, res) => {
  try {
    let { email, password } = req.body;
    email = email.trim();
    password = password.trim();
    if (!email || !password) {
      res.json({
        status: "FAILED",
        message: "Invalid input fields",
      });
    } else {
      //check if user not exists
      //if exists then check the password
      // //if not match, display error
      // //else if match, redirect and save JWT
      // ** save the userID in the JWT **
      User.findOne({ email })
        .then(async (user) => {
          //entered email doesnot exists
          console.log("User details", user);
          console.log(email, password);
          if (!user) {
            return res.json({
              status: "FAILED",
              message: "Invalid email/password",
            });
          }
          const validUser = await bcrypt.compare(password, user.password);
          if (!validUser) {
            res.json({
              status: "FAILED",
              message: "Invalid email/password",
            });
          } else {
            const token = jwt.sign(
              { userId: user._id },
              process.env.JWT_SECRET
            );
            if (user.initalProfileDone == false) {
              return res.json({
                status: "SETUP NOT COMPLETE",
                message: "User has not completed the inital profile setup.",
              });
            }
            return res.json({
              status: "SUCCESS",
              message: "You logged in to Sports Hub. Congratulations!",
              token,
            });
          }
        })
        .catch((err) => {
          res.json({ status: "FAILED", message: err.message });
        });
    }
  } catch (error) {
    res.json({
      status: "FAILED",
      message: error.message,
    });
  }
});
