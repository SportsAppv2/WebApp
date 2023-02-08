import express from "express";
import { testRoute } from "../api/auth/Test.js";
import { createProfile } from "../api/profile/CreateProfile.js";
import { editProfile, getProfile } from "../api/profile/EditProfile.js";
const router = express.Router();

router.route("/test").post(testRoute);
router.route("/post").post(createProfile);
router.patch("/edit").post(getProfile, editProfile);

export default router;
