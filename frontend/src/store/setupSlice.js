import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL_backend } from "../helpers/links";

export const fetchCreateProfile = createAsyncThunk(
  "setup/check",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const data = {
      userName: state.setup.profileInfo.userName,
      location: {
        country: state.setup.profileInfo.country,
        region: state.setup.profileInfo.region,
      },
      tags: state.setup.profileInfo.tags,
    };
    const jwtToken = localStorage.getItem("token");
    console.log(data);
    console.log(jwtToken);
    const response = await axios
      .post(`${BASE_URL_backend}/api/profile/post`, JSON.stringify(data), {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("Setting up profile...", res);
        if (res.data.status == "SUCCESS") {
          dispatch(setupActions.setupDone(true));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

const setupSlice = createSlice({
  name: "setup",
  initialState: {
    profileInfo: {
      userName: "",
      country: "",
      region: "",
      tags: [],
    },
    currentPage: 1,
    setupComplete: false,
  },
  reducers: {
    pageChanged(state, action) {
      state.currentPage = action.payload.goTo;
      console.log("State changed to", state.currentPage);
    },
    profileInfoAdded(state, action) {
      state.profileInfo = action.payload;
    },
    tagsRemoved(state, action) {
      const index = action.payload;
      state.profileInfo.tags = state.profileInfo.tags.filter(
        (item, i) => item.id != index
      );
    },
    setupDone(state, action) {
      state.setupComplete = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCreateProfile.pending, (state, action) => {
      state.isLoading = true;
      console.log("Loading...");
    });
    builder.addCase(fetchCreateProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Success");
    });
    builder.addCase(fetchCreateProfile.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Failed");
    });
  },
});

export const setupActions = setupSlice.actions;

export default setupSlice;
