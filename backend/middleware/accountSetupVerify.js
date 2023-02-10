import { decodeJwt } from "../helpers/decodeJwt.js";
import User from "../models/User.js";

export const isAccountSetupDone = async (req, res, next) => {
  console.log("INSIDE MIDDLEWARE 2");
  try {
    /*if Bearer token is available in local storage then get the user Id from there 
    and if the Bearer token is not found then check for */
    console.log(req.initalProfileDone);
    if (req.initalProfileDone == false) {
      return res.json({
        status: "SETUP NOT COMPLETE",
        message: "User has not completed the inital profile setup.",
      });
    }
    console.log("User ID is ", req.userId);
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
