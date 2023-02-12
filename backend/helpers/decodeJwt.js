import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const decodeJwt = (token) => {
  try {
    console.log(token, process.env.JWT_SECRET);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded JWT token ", decoded);
    return decoded.userId;
  } catch (error) {
    console.error("Error encountered, ", error);
    console.error("About to return NULL");
    return null;
  }
};
