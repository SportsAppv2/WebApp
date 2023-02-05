import express from "express";
import dotenv from "dotenv";
import postRoutes from "./routes/postRoutes.js";
import connectDB from "./config/db.js";
import cors from "cors";
import UserRoutes from "./routes/userRoutes.js";

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

//SERVER part
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`);
  }
});
