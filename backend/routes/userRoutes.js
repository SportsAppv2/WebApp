import express from "express";
import { loginRoute } from "../api/Login.js";
import { testRoute } from "../api/Test.js";
const router = express.Router();
import { resendOtp, signupRoute, verifyOtp } from "../api/User.js";

router.route("/test").post(testRoute);
router.route("/signup").post(signupRoute);
router.route("/verifyotp").post(verifyOtp);
router.route("/resendotp").post(resendOtp);
router.route("/login").post(loginRoute);
export default router;
