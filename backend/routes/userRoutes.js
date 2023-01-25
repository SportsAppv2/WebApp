import express from "express";
const router = express.Router();

import {
  authUser,
  registerUser,
  otpverifyfunc,
  authorizeAccountSetup,
  requestnewotp,
  setuptags,
  getUserProfile,
} from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";

router.route("/signup").post(registerUser);
export default router;
