import jwt from "jsonwebtoken";
import { decodeJwt } from "../helpers/decodeJwt.js";
import User from "../models/User.js";
const protect = async (req, res, next) => {
  console.log("INSIDE MIDDLEWARE");
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      const jwtToken = req.headers.authorization.split(" ")[1];
      const userId = decodeJwt(jwtToken);
      console.log("User ID is ", userId);
      const user = await User.findById(userId).catch((err) => {
        res.json({
          status: "FAILED",
          message: err.message,
        });
      });
      console.log("User is ", user);
      if (!user) {
        res.status(401).json({
          status: "UNAUTHORIZED",
          message: "User not authenticated.",
        });
      } else if (user) {
        req.userId = user._id;
      }
    } else {
      res.status(401).json({
        status: "UNAUTHORIZED",
        message: "User authentication failed. Invalid token.",
      });
    }

    next();
  } catch {}
};

export default protect;
