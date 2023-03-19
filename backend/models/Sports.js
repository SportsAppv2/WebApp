import mongoose from "mongoose";

const sportsSchema = mongoose.Schema({
  name: { type: String, required: true },
  emoji: { type: String, required: true },
  users: {
    count: { type: Number, default: 0 },
    userList: [{ type: String, default: null }],
  },
  groups: {
    count: { type: Number, default: 0 },
    privateGroup: [{ type: String, default: null }],
    publicGroup: [{ type: String, default: null }],
  },
});

const Sports = mongoose.model("Sports", sportsSchema);
export default Sports;

// {
//     "sportsName": {
//       users: {
//         count: ,
//         userList: [],
//       },
//       groups:{
//         count: ,
//         groupList:[{groupId, isPrivate}]
//       }
//     }
//   }
