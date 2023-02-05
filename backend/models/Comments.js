import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  commentId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  parentCommentId: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
  },
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  creatorName: {
    type: String,
    required: true,
  },
  creatorUserName: {
    type: String,
    required: true,
  },
  textContent: {
    type: String,
  },
  imageUrl: [
    {
      type: String,
    },
  ],
  videoUrl: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  upvoteCount: {
    type: number,
    default: 0,
  },
  upvotedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  downvoteCount: {
    type: number,
    default: 0,
  },
  downvotedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  commentCount: {
    type: number,
    default: 0,
  },
  commentedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comments",
    },
  ],
});

const Comments = mongoose.model("Comments", commentSchema);

export default Comments;
