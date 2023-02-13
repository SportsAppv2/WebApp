import express from "express";
import { testRoute } from "../api/auth/Test.js";
import { acceptUser } from "../api/rooms/AcceptUser.js";
import { createRoom } from "../api/rooms/CreateRoom.js";
import { joinRoom } from "../api/rooms/JoinRoom.js";
import protect from "../middleware/authVerify.js";
const router = express.Router();
router.use(protect);
router.route("/test").post(testRoute);
router.route("/create").post(createRoom);
router.route("/join").post(joinRoom);
router.route("/accept").post(acceptUser);

export default router;
