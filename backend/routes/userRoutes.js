import express from "express";
import { loginRoute } from "../api/auth/Login.js";
import { testRoute } from "../api/auth/Test.js";
const router = express.Router();
import { resendOtp, signupRoute, verifyOtp } from "../api/auth/User.js";

router.route("/test").post(testRoute);
router.route("/signup").post(signupRoute);
router.route("/verifyotp").post(verifyOtp);
router.route("/resendotp").post(resendOtp);
router.route("/login").post(loginRoute);
export default router;
