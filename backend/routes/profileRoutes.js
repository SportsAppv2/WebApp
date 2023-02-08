import express from "express";
import { testRoute } from "../api/auth/Test.js";
import { createProfile } from "../api/profile/CreateProfile.js";
import { editProfile, verifyProfile } from "../api/profile/EditProfile.js";
import { getProfile } from "../api/profile/GetProfile.js";
const router = express.Router();

router.route("/test").post(testRoute);
router.route("/post").post(createProfile);
router.route("/edit").patch(verifyProfile, editProfile);
router.route("/").get(getProfile);

export default router;
