import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import postRoutes from "./routes/postRoutes.js";
import UserRoutes from "./routes/userRoutes.js";
import ProfileRoutes from "./routes/profileRoutes.js";
import RoomRoutes from "./routes/roomRoutes.js";
import NotificationRoutes from "./routes/notificationRoutes.js";
import GeneralRoutes from "./routes/sportRoutes.js";
import Profile from "./models/UserProfile.js";

dotenv.config({ path: "../.env" });

connectDB();
const app = express();
app.use(express.json()); //to parse the json from the request
app.use(cors());
//main route
app.get("/", (req, res) => {
  res.send("SportsHub API is running.");
});

//Routes
app.use("/api/user", UserRoutes);
app.use("/api/home", postRoutes);
app.use("/api/profile", ProfileRoutes);
app.use("/api/room", RoomRoutes);
app.use("/api/notification", NotificationRoutes);
app.use("/api/general", GeneralRoutes);

//SERVER part
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`);
  }
});
