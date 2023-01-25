import mongoose from "mongoose";

const connectDB = (req, res) => {
  const DB_URL = process.env.MONGO_URI;
  try {
    const conn = mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("MongoDB connected.");
  } catch (error) {
    console.log("Not able to connect to the database.");
    console.log("Error: ", error);
  }
};

export default connectDB;
