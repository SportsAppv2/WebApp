import { createSlice } from "@reduxjs/toolkit";

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    user: {
      userName: "",
      name: {
        firstName: "",
        lastName: "",
      },
      profileView: {
        profilePic: "",
      },
    },
    reducers: {
      userNameAdded(state, action) {
        state.user.userName = action.payload;
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
    },
  },
});

export const userProfileActions = userProfileSlice.actions;

export default userProfileSlice;
