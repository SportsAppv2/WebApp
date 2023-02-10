import express from "express";
import { testRoute } from "../api/auth/Test.js";
import { createProfile } from "../api/profile/CreateProfile.js";
import { editProfile, verifyProfile } from "../api/profile/EditProfile.js";
import { getProfile, getProfileOwn } from "../api/profile/GetProfile.js";
import { isAccountSetupDone } from "../middleware/accountSetupVerify.js";
import protect from "../middleware/authVerify.js";
const router = express.Router();
router.use(protect);
router.route("/post").post(createProfile);
router.route("/test").post(testRoute);
router.use(isAccountSetupDone);
router.route("/edit").patch(verifyProfile, editProfile);
router.route("/initalfetch").get(getProfileOwn);
router.route("/:id").get(getProfile);

export default router;
