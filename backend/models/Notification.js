import mongoose from "mongoose";

const notificationSchema = mongoose.Schema({
  type: { type: String, required: true },
  sender: { type: String, required: true },
  receipent: { type: String, required: true },
  message: { type: String, required: true },
  isRead: { type: Boolean, default: false },
  metaData: {
    groupId: { type: String },
    postId: { type: String },
    commentId: { type: String },
  },
});

const Notification = mongoose.model("Notification", notificationSchema);

export default Notification;

// const dummy = {
//     type: "",
//     sender: "",
//     receipent: "",
//     message: "",
//     isRead: false,
//     metaData: {}
// }
