import mongoose from "mongoose";

const postSchema = mongoose.Schema({
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
  settings: {
    privacy: { type: String, required: true },
  },
  stats: {
    views: { type: Number, default: 0 },
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

// Expected JSON response:
// {
//     "postId":"",
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
//     "settings":{
//        "privacy":""
//     },
//     "stats":{
//        "views":"",
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

const Post = mongoose.model("Posts", postSchema);

export default Post;
