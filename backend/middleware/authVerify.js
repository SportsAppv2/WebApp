import { decodeJwt } from "../helpers/decodeJwt.js";
import User from "../models/User.js";
const protect = async (req, res, next) => {
  console.log("INSIDE MIDDLEWARE 1");
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
        console.log("User is ", user);
        req.userId = user._id;
        req.initalProfileDone = user.initalProfileDone;
        console.log("req body is now ", req.initalProfileDone);
      }
    } else {
      res.status(401).json({
        status: "UNAUTHORIZED",
        message: "User authentication failed. Invalid token.",
      });
    }
    next();
  } catch {
    (err) => {
      res.json({
        status: "FAILED",
        message: err.message,
      });
    };
  }
};

export default protect;
