import express from "express";
import { testRoute } from "../api/auth/Test.js";
const router = express.Router();

router.route("/test").post(testRoute);

export default router;
