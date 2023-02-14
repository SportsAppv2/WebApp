import express from "express";
import { testRoute } from "../api/auth/Test.js";
import { acceptUser } from "../api/rooms/AcceptUser.js";
import { createRoom } from "../api/rooms/CreateRoom.js";
import { findRoom } from "../api/rooms/FindRoom.js";
import { getRooms } from "../api/rooms/GetRooms.js";
import { joinRoom } from "../api/rooms/JoinRoom.js";
import protect from "../middleware/authVerify.js";
const router = express.Router();
router.use(protect);
router.route("/test").post(testRoute);
router.route("/create").post(createRoom);
router.route("/join").post(joinRoom);
router.route("/accept").post(acceptUser);
router.route("/find").post(findRoom);
router.route("/").get(getRooms);

export default router;
