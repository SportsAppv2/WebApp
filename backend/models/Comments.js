import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  parentPostId: { type: String, required: true },
  parentCommentId: { type: String, default: null },
  creator: {
    id: {
      type: String,
      ref: "User",
      required: true,
    },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
  },
  content: {
    text: { type: String },
    image: [{ type: String }],
    video: { type: String },
  },
  stats: {
    upvotes: {
      count: { type: Number, default: 0 },
      users: [
        {
          type: String,
          ref: "User",
          default: null,
        },
      ],
    },
    downvotes: {
      count: { type: Number, default: 0 },
      users: [
        {
          type: String,
          ref: "User",
          default: null,
        },
      ],
    },
  },
  comments: {
    count: { type: Number, default: 0 },
    commentsList: [
      {
        type: String,
        ref: "Comments",
        default: null,
      },
    ],
  },
});

// {  "commentId": "",
//     "parentCommentId": "",
//     "creator":{
//        "id":"",
//        "firstName":"",
//        "lastName":"",
//        "userName":""
//     },
//     "content":{
//        "text":"",
//        "image":[
//           "",
//           ""
//        ],
//        "video":""
//     },
//     "stats":{
//        "upvotes":{
//           "count":"",
//           "users":[
//              "",
//              ""
//           ]
//        },
//        "downvotes":{
//           "count":"",
//           "users":[
//              "",
//              ""
//           ]
//        }
//     },
//     "comments":{
//        "count":"",
//        "list":[
//           "",
//           ""
//        ]
//     }
//  }

const Comment = mongoose.model("Comments", commentSchema);

export default Comment;
