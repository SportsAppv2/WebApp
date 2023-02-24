import mongoose from "mongoose";

const notificationSchema = mongoose.Schema({
  type: { type: String, required: true },
  receipentId: { type: String, required: true },
  // parentPostId: { type: String },
  postId: { type: String },
  // parentCommentId: { type: String },
  commentId: { type: String },
  like: {
    senderId: { type: String, default: "" },
    isRead: { type: Boolean, default: false },
    timeStamp: { type: Date, default: Date.now },
  },
  comment: {
    senderId: { type: String, default: "" },
    isRead: { type: Boolean, default: false },
    timeStamp: { type: Date, default: Date.now },
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
