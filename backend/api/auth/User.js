import express from "express";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import asyncHandler from "express-async-handler";
//mongoDB user modeldotenv
import User from "../../models/User.js";
//mongoDB user verification model
import { UserOtpVerification } from "../../models/UserVerification.js";
dotenv.config({ path: "../../../.env" });

const router = express.Router();
//nodemailer stuff
let transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: "julianne.schaden@ethereal.email",
    pass: "mbK19dQqVB4nqUmSVA",
  },
});

//signup
export const signupRoute = asyncHandler(async (req, res) => {
  let { firstName, lastName, email, password, dateOfBirth } = req.body;
  firstName = firstName.trim();
  lastName = lastName.trim();
  email = email.trim();
  password = password.trim();
  dateOfBirth = dateOfBirth.trim();
  if (
    firstName == "" ||
    lastName == "" ||
    email == "" ||
    password == "" ||
    dateOfBirth == ""
  ) {
    res.json({
      status: "FAILED",
      message: "Invalid input fields",
    });
  } else {
    //Checking if user already exists
    User.find({ email }).then((result) => {
      console.log(result);
      if (result.length) {
        res.json({
          status: "FAILED",
          message: "User with the provided email already exists",
        });
      } else {
        //Trying to create a new user
        const saltRounds = 10;
        bcrypt.hash(password, saltRounds).then((hashedPassword) => {
          const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            dateOfBirth,
            verified: false,
          });
          newUser.save().then((result) => {
            //Handle account verification
            // sendVerificationEmail(result, res);
            sendOtpVerificationEmail(result, res);
          });
        });
      }
    });
  }
});

export const verifyOtp = asyncHandler(async (req, res) => {
  try {
    let { userId, otp } = req.body;
    // console.log("userId and OTP are: ", userId, otp);
    if (!userId || !otp) {
      throw Error("Empty OTP details are not allowed.");
    } else {
      const UserOtpVerificationRecords = await UserOtpVerification.find({
        userId,
      });
      console.log("Records: ", UserOtpVerificationRecords);
      if (UserOtpVerificationRecords.length <= 0) {
        //no records found
        throw new Error(
          "Account record does not exist or has been verified already"
        );
      } else {
        //user OTP exists
        const { expiresAt } = UserOtpVerificationRecords[0];
        const hashedOtp = UserOtpVerificationRecords[0].otp;
        if (expiresAt < Date.now()) {
          //user OTP has expired
          await UserOtpVerification.deleteMany({ userId });
          throw new Error("Code has expired. Please try again.");
        } else {
          const validOtp = await bcrypt.compare(otp, hashedOtp);
          if (!validOtp) {
            //supplied OTP was wrong
            throw new Error("Wrong code passed.");
          } else {
            await User.updateOne({ _id: userId }, { verified: true });
            await UserOtpVerification.deleteMany({ userId });
            res.json({
              status: "VERIFIED",
              message: "User email verified successfully",
            });
          }
        }
      }
    }
  } catch (error) {
    res.json({
      status: "FAILED",
      message: error.message,
    });
  }
});

export const resendOtp = asyncHandler(async (req, res) => {
  try {
    let { userId, email } = req.body;
    console.log(userId, email);
    if (!userId || !email) {
      throw Error("Empty User details not allowed");
    } else {
      //delete existing records and resend
      await UserOtpVerification.deleteMany({ userId });
      sendOtpVerificationEmail({ _id: userId, email }, res);
    }
  } catch (error) {
    res.json({
      status: "FAILED",
      message: error.message,
    });
  }
});
//send OTP verification email
const sendOtpVerificationEmail = async ({ _id, email }, res) => {
  console.log(_id, email);
  try {
    //OTP is a 6 digit random number
    const otp = `${Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000}`;
    //mail options
    const mailOptions = {
      from: '"Julianne Schaden" <julianne.schaden@ethereal.email>',
      to: email,
      subject: "Verify Your Email",
      html: `<p>Enther <b>${otp}</b> in the app to verify your email address and complete the signup process. The OTP expires in 1 hour</p>`,
    };

    //hash the otp
    const saltRounds = 10;
    const hashedOtp = await bcrypt.hash(otp, saltRounds);
    const newOtpVerification = new UserOtpVerification({
      userId: _id,
      otp: hashedOtp,
      createAt: Date.now(),
      expiresAt: Date.now() + 3600000,
    });
    await newOtpVerification.save();
    await transporter.sendMail(mailOptions);
    res.json({
      status: "PENDING",
      message: "Verification OTP email sent",
      data: {
        userId: _id,
        email,
      },
    });
  } catch (error) {
    console.log("error is ", error);
    res.json({
      status: "FAILED",
      message: error.message,
    });
  }
};
