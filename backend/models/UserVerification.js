import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserOtpVerificationSchema = new Schema({
  userId: String,
  otp: String,
  createAt: Date,
  expiresAt: Date,
});

export const UserOtpVerification = mongoose.model(
  "UserOtpVerification",
  UserOtpVerificationSchema
);
