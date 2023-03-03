import { createSlice } from "@reduxjs/toolkit";

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    user: {
      userName: "",
      userId: "",
      name: {
        firstName: "",
        lastName: "",
      },
      profileView: {
        profilePic: "",
      },
      country: "",
      region: "",
      follower: {
        count: 0,
        followerList: [],
      },
      following: {
        count: 0,
        followingList: [],
      },
    },
    showEditProfile: false,
  },
  reducers: {
    userNameAdded(state, action) {
      state.user.userName = action.payload;
    },
    userIdAdded(state, action) {
      state.userId = action.payload;
    },
    nameAdded(state, action) {
      state.user.name.firstName = action.payload.firstName;
      state.user.name.lastName = action.payload.lastName;
    },
    contactAdded(state, action) {
      state.user.name.firstName = action.payload.firstName;
      state.user.name.lastName = action.payload.lastName;
    },
    profilePicAdded(state, action) {
      state.user.profileView.profilePic = action.payload;
    },
    toggleEditProfile(state) {
      state.showEditProfile = !state.showEditProfile;
    },
    countryAdded(state, action) {
      state.user.country = action.payload;
    },
    regionAdded(state, action) {
      state.user.region = action.payload;
    },
  },
});

export const userProfileActions = userProfileSlice.actions;

export default userProfileSlice;
