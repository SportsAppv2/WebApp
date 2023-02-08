import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const decodeJwt = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded JWT token ", decoded);
    return decoded.userId;
  } catch (error) {
    console.error(error);
    return null;
  }
};
