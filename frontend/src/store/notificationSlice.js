import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFollowReq = createAsyncThunk(
  "followreq/get",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const jwtToken = localStorage.getItem("token");
    const response = await axios
      .get("http://localhost:5000/api/profile/followrequest", {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("Response data is ", res.data);
        dispatch(notificationActions.updateFollowReq(res.data.data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
);

export const fetchAcceptFollow = createAsyncThunk(
  "follower/accept",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    console.log("Follower ID is ", arg.followerId);
    const data = {
      followerId: arg.followerId,
    };
    const jwtToken = localStorage.getItem("token");
    console.log(state);
    const response = await axios
      .post(
        "http://localhost:5000/api/profile/acceptrequest",
        JSON.stringify(data),
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("Successfully accepted the follow request");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
);
export const fetchDeclineFollow = createAsyncThunk(
  "follower/decline",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const data = {
      followerId: arg.followerId,
    };
    const jwtToken = localStorage.getItem("token");
    console.log(state);
    const response = await axios
      .post(
        "http://localhost:5000/api/profile/declinerequest",
        JSON.stringify(data),
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("Successfully declined the follow request");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
);
const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    followReq: {
      count: 0,
      requestList: [],
    },
    roomReq: {},
  },
  reducers: {
    updateFollowReq(state, action) {
      state.followReq.count = action.payload.count;
      state.followReq.requestList = action.payload.requestList;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFollowReq.pending, (state, action) => {
      state.isLoading = true;
      console.log("Loading...");
    });
    builder.addCase(fetchFollowReq.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Success");
    });
    builder.addCase(fetchFollowReq.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Failed");
    });
    builder.addCase(fetchAcceptFollow.pending, (state, action) => {
      state.isLoading = true;
      console.log("Loading...");
    });
    builder.addCase(fetchAcceptFollow.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Success");
    });
    builder.addCase(fetchAcceptFollow.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Failed");
    });
    builder.addCase(fetchDeclineFollow.pending, (state, action) => {
      state.isLoading = true;
      console.log("Loading...");
    });
    builder.addCase(fetchDeclineFollow.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Success");
    });
    builder.addCase(fetchDeclineFollow.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Failed");
    });
  },
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice;
