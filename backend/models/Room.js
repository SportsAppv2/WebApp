import mongoose from "mongoose";

const generateRandomString = () => {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomString = "";
  for (let i = 0; i < 7; i++) {
    randomString += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomString;
};

const roomSchema = mongoose.Schema({
  joiningCode: { type: String, default: generateRandomString() },
  roomDetails: {
    roomName: { type: String, required: true },
    roomSummary: { type: String, default: "" },
    isPrivateRoom: { type: Boolean, default: false },
    sportsName: [{ type: String, required: true }],
    isVerified: { type: Boolean, default: false },
    roomPic: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now },
  },
  admin: {
    owner: { type: String, required: true },
    moderators: {
      type: [String],
      default: function () {
        return [this.admin.owner];
      },
    },
  },
  users: {
    count: { type: Number, default: 1 },
    userList: {
      type: [String],
      default: function () {
        return [this.admin.owner];
      },
    },
  },
  pendingUsers: {
    count: { type: Number, default: 0 },
    userList: [{ type: String, default: null }],
  },
  newsList: [{ type: String, default: null }],
  postList: [{ type: String, default: null }],
  scoreCardId: [{ type: String, default: null }],
});

const Room = mongoose.model("Room", roomSchema);

export default Room;
// {
//   _id: "",
//   roomDetails: {
//     roomName: "",
//     roomBio: "",
//     isPrivateRoom: "",
//     sportsName: "",
//     joiningCode: "",
//     createdAt: DATE,
//   },
//   admin: {
//     owner: "",
//     moderators: [""],
//   },
//   users: {
//       count: 0,
//       userList: [""],
//       pendingUsers: [""],
//   },
//   newsList: [""],
//   postList: [""],
//   scoreCardId: [""],
// };
