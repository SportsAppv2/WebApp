import express from "express";
import { testRoute } from "../api/auth/Test.js";
import { createProfile } from "../api/profile/CreateProfile.js";
import { editProfile, verifyProfile } from "../api/profile/EditProfile.js";
import { getProfile, getProfileOwn } from "../api/profile/GetProfile.js";
import protect from "../middleware/authVerify.js";
const router = express.Router();
router.use(protect);
router.route("/test").post(testRoute);
router.route("/post").post(createProfile);
router.route("/edit").patch(verifyProfile, editProfile);
router.route("/initalfetch").get(getProfileOwn);
router.route("/:id").get(protect, getProfile);

export default router;
