import express from "express";
import { testRoute } from "../api/auth/Test.js";
import { acceptUser } from "../api/rooms/AcceptUser.js";
import { createRoom } from "../api/rooms/CreateRoom.js";
import { findRoom } from "../api/rooms/FindRoom.js";
import { getMyAdminRooms } from "../api/rooms/GetMyAdminRooms.js";
import { getPendingUsers } from "../api/rooms/GetPendingUsers.js";
import { getRoomDetails } from "../api/rooms/GetRoomDetails.js";
import { getRooms } from "../api/rooms/GetRooms.js";
import { joinRoom } from "../api/rooms/JoinRoom.js";
import { rejectUser } from "../api/rooms/RejectUser.js";
import protect from "../middleware/authVerify.js";
import { roomAuth } from "../middleware/roomAuth.js";
const router = express.Router();
router.use(protect);
router.route("/test").post(testRoute);
router.route("/create").post(createRoom);
router.route("/join").post(joinRoom);
router.route("/accept").post(acceptUser);
router.route("/reject").post(rejectUser);
router.route("/find").post(findRoom);
router.route("/details/:roomId").get(roomAuth, getRoomDetails);
router.route("/roomreq/all").get(getMyAdminRooms);
router.route("/pendinguser/:id").get(getPendingUsers);
router.route("/").get(getRooms);

export default router;
