import express from "express";
import { testRoute } from "../api/auth/Test.js";
import { createSport } from "../api/sports/createSport.js";
import { getSportList } from "../api/sports/getSports.js";
import protect from "../middleware/authVerify.js";
const router = express.Router();
router.route("/test").get(testRoute);
router.route("/createSport").get(createSport);
router.use(protect);
router.route("/getSports").get(getSportList);
// router.route("/newRoom/add").get();
// router.route("/getRooms").get();
// router.route("/room/userJoined").get();
// router.route("/room/userLeft").get();
export default router;
