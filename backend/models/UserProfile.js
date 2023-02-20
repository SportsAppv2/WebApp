import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
  userId: { type: String, required: true },
  userName: { type: String, required: true },
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  contact: {
    email: { type: String, required: true },
    phone: { type: String, default: "" },
    website: { type: String, default: "" },
    instagram: { type: String, default: "" },
    facebook: { type: String, default: "" },
    youtube: { type: String, default: "" },
    tiktok: { type: String, default: "" },
  },
  location: {
    country: { type: String, required: true },
    region: { type: String, required: true },
  },
  profileView: {
    profilePic: { type: String, default: "" },
    backgroundPic: { type: String, default: "" },
    bio: { type: String, default: "Hey, I'm using sportsHub! Its cool!" },
    createdAt: { type: Date, default: Date.now },
    profileScore: { type: Number, default: 0 },
    profileVisits: { type: Number, default: 0 },
  },
  follower: {
    count: { type: Number, default: 0 },
    followerList: [{ type: String }],
  },
  following: {
    count: { type: Number, default: 0 },
    followingList: [{ type: String }],
  },
  followRequest: {
    count: { type: Number, default: 0 },
    requestList: [{ type: String }],
  },
  followingRequest: {
    count: { type: Number, default: 0 },
    requestList: [{ type: String }],
  },
  tags: [
    {
      tagId: { type: String },
      tagName: { type: String, required: true },
    },
  ],
  settings: {
    profilePrivacy: { type: String, default: "Everyone" },
  },
  roomsJoined: {
    ownerOf: [{ type: String, default: null }],
    moderatorOf: [{ type: String, default: null }],
    allRooms: [{ type: String, default: null }],
  },
  posts: {
    posted: [{ type: String, default: null }],
  },
  setupDone: { type: Boolean, default: false },
});

// Expected JSON response:
// {
//     "profileId": "",
//     "userName": "",
//     "name": {
//       "firstName": "",
//       "lastName": ""
//     },
//     "contact": {
//       "email": "",
//       "phone": "",
//       "website": "",
//       "instagram": "",
//       "facebook": "",
//       "youtube": "",
//       "tiktok": ""
//     },
//     "location": {
//       "country": "",
//       "state": ""
//     },
//     "profileView": {
//       "profilePic": "",
//       "backgroundPic": "",
//       "bio": "",
//       "createdAt": "",
//       "profileScore": "",
//       "profileVisits": ""
//     },
//     "follower": {
//       "count": "",
//       "followerList": [""]
//     },
//     "following": {
//       "count": "",
//       "followingList": [""]
//     },
//     "tags": [{
//        "tagId": "",
//       "tagName": ""
//     }],
//     "settings": {
//       "profilePrivacy": ""
//     },
//     "setupDone": false,
//   }

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
