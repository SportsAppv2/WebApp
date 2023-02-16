import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserDataInitial = createAsyncThunk(
  "user/data",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const response = await axios
      .get("http://localhost:5000/api/profile/initalfetch", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log("Response data is ", response.data.data);
    dispatch(editProfileActions.originalDataUpdated(response.data.data));
    // console.log("Updated Originial data is ", state.editProfile);
    return response.data;
  }
);
export const fetchUpdateProfile = createAsyncThunk(
  "user/data/update",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const data = {
      "name.firstName": state.editProfile.editedData.firstName,
      "name.lastName": state.editProfile.editedData.lastName,
      "profileView.bio": state.editProfile.editedData.bio,
      "location.country": state.editProfile.editedData.country,
      "location.region": state.editProfile.editedData.region,
      "contact.instagram": state.editProfile.editedData.instagram,
      "contact.youtube": state.editProfile.editedData.youtube,
      "contact.tiktok": state.editProfile.editedData.tiktok,
      "contact.facebook": state.editProfile.editedData.facebook,
    };
    console.log("About to update this data ", data);
    const jwtToken = localStorage.getItem("token");
    const response = await axios
      .post("http://localhost:5000/api/profile/edit", data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log("Response received ", response);
    if (response.data.status == "SUCCESS") {
      dispatch(editProfileActions.originalDataUpdated(response.data.message));
      dispatch(editProfileActions.updatedEditedData());
    }
  }
);

const editProfileSlice = createSlice({
  name: "editProfile",
  initialState: {
    userOriginal: {
      firstName: "",
      lastName: "",
      profilePic: "",
      bio: "",
      country: "",
      region: "",
      instagram: "",
      youtube: "",
      tiktok: "",
      facebook: "",
    },
    editedData: {
      firstName: "",
      lastName: "",
      profilePic: "",
      bio: "",
      country: "",
      region: "",
      instagram: "",
      youtube: "",
      tiktok: "",
      facebook: "",
    },
    follower: {
      count: 0,
      followerList: [],
    },
    following: {
      count: 0,
      followingList: [],
    },
    userName: "",
    showDiscardChanges: false,
  },
  reducers: {
    fnameAdded(state, action) {
      state.editedData.firstName = action.payload;
    },
    lnameAdded(state, action) {
      state.editedData.lastName = action.payload;
    },
    bioAdded(state, action) {
      state.editedData.bio = action.payload;
    },
    countryAdded(state, action) {
      state.editedData.country = action.payload;
    },
    regionAdded(state, action) {
      state.editedData.region = action.payload;
    },
    instaAdded(state, action) {
      state.editedData.instagram = action.payload;
    },
    youtubeAdded(state, action) {
      state.editedData.firstName = action.payload;
    },
    tiktokAdded(state, action) {
      state.editedData.tiktok = action.payload;
    },
    facebookAdded(state, action) {
      state.editedData.facebook = action.payload;
    },
    revertToInitial(state) {
      state.editedData = state.userOriginal;
    },
    toggleDiscardChanges(state) {
      state.showDiscardChanges = !state.showDiscardChanges;
    },
    profileUpdated(state) {
      state.userOriginal = state.editedData;
    },
    updatedEditedData(state) {
      state.editedData = state.userOriginal;
      console.log(
        "Edited user data ",
        state.userName,
        state.editedData.firstName,
        state.editedData.lastName,
        state.editedData.profilePic,
        state.editedData.bio,
        state.editedData.country,
        state.editedData.region,
        state.editedData.instagram,
        state.editedData.youtube,
        state.editedData.tiktok,
        state.editedData.facebook
      );
    },
    originalDataUpdated(state, action) {
      state.userName = action.payload.userName;
      state.userOriginal.firstName = action.payload.name.firstName;
      state.userOriginal.lastName = action.payload.name.lastName;
      state.userOriginal.profilePic = action.payload.profileView.profilePic;
      state.userOriginal.bio = action.payload.profileView.bio;
      state.userOriginal.country = action.payload.location.country;
      state.userOriginal.region = action.payload.location.region;
      state.userOriginal.instagram = action.payload.contact.instagram;
      state.userOriginal.youtube = action.payload.contact.youtube;
      state.userOriginal.tiktok = action.payload.contact.tiktok;
      state.userOriginal.facebook = action.payload.contact.facebook;
      state.follower.count = action.payload.follower.count;
      state.following.count = action.payload.following.count;

      console.log(
        "Original user data ",
        state.userName,
        state.userOriginal.firstName,
        state.userOriginal.lastName,
        state.userOriginal.profilePic,
        state.userOriginal.bio,
        state.userOriginal.country,
        state.userOriginal.region,
        state.userOriginal.instagram,
        state.userOriginal.youtube,
        state.userOriginal.tiktok,
        state.userOriginal.facebook
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserDataInitial.pending, (state, action) => {
      state.isLoading = true;
      console.log("Loading...");
    });
    builder.addCase(fetchUserDataInitial.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Success");
    });
    builder.addCase(fetchUserDataInitial.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Failed");
    });
    builder.addCase(fetchUpdateProfile.pending, (state, action) => {
      state.isLoading = true;
      console.log("Loading...");
    });
    builder.addCase(fetchUpdateProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Success");
    });
    builder.addCase(fetchUpdateProfile.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Failed");
    });
  },
});

export const editProfileActions = editProfileSlice.actions;

export default editProfileSlice;
