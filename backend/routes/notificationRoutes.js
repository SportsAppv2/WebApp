import express from "express";
import { getNotifications } from "../api/notification/getNotifications.js";
import { isAccountSetupDone } from "../middleware/accountSetupVerify.js";
import protect from "../middleware/authVerify.js";
const router = express.Router();
router.use(protect);
router.use(isAccountSetupDone);
router.route("/fetch").get(getNotifications);
export default router;
