import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { editProfileActions } from "./editProfileSlice";
import { modalActions } from "./modalSlice";

export const fetchFollowProfile = createAsyncThunk(
  "profile/follow",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const data = {
      followedUserId: arg.followedUserId,
    };
    console.log("Data is ", data);
    const jwtToken = localStorage.getItem("token");
    const BASE_URL = process.env.REACT_APP_BASE_URL_backend;
    const response = await axios
      .post(`${BASE_URL}/api/profile/follow`, JSON.stringify(data), {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("Following user respose ", res);
        if (res.data.status == "SUCCESS") {
          if (res.data.profilePrivacy == "Everyone") {
            dispatch(editProfileActions.followerIncreased(1));
            dispatch(editProfileActions.toggleIsFollowing(true));
          }
          console.log("Follower increased");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
);
export const fetchUnfollowProfile = createAsyncThunk(
  "profile/unfollow",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const data = {
      followedUserId: arg.followedUserId,
    };
    console.log("Data is ", data);
    const jwtToken = localStorage.getItem("token");
    const BASE_URL = process.env.REACT_APP_BASE_URL_backend;
    const response = await axios
      .post(
        `${BASE_URL}/api/profile/unfollow`,
        JSON.stringify(data),
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("Following user respose ", res);
        if (res.data.status == "SUCCESS") {
          dispatch(editProfileActions.followerIncreased(-1));
          dispatch(editProfileActions.toggleIsFollowing(false));
          dispatch(modalActions.resetButtons());
          dispatch(modalActions.toggleShowWarningModal(false));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

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
    showFollow: false,
  },
  reducers: {
    userNameAdded(state, action) {
      state.user.userName = action.payload;
    },
    userIdAdded(state, action) {
      state.user.userId = action.payload;
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
    openShowFollow(state, action) {
      state.showFollow = !state.showFollow;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFollowProfile.pending, (state, action) => {
      state.isLoading = true;
      console.log("Loading...");
    });
    builder.addCase(fetchFollowProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Success");
    });
    builder.addCase(fetchFollowProfile.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Failed");
    });
  },
});

export const userProfileActions = userProfileSlice.actions;

export default userProfileSlice;
