import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL_backend } from "../helpers/links";

export const fetchFollowReq = createAsyncThunk(
  "followreq/get",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const jwtToken = localStorage.getItem("token");
    const response = await axios
      .get(`${BASE_URL_backend}/api/profile/followrequest`, {
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
export const fetchRoomJoinReq = createAsyncThunk(
  "roomreq/get",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const jwtToken = localStorage.getItem("token");
    const response = await axios
      .get(`${BASE_URL_backend}/api/room/roomreq/all`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("Response data is ", res.data);
        dispatch(notificationActions.updateRoomJoinReq(res.data.data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
);
export const fetchEngagementReq = createAsyncThunk(
  "engagement/get",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const jwtToken = localStorage.getItem("token");
    const response = await axios
      .get(`${BASE_URL_backend}/api/notification/fetch`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("Response data is ", res.data);
        dispatch(notificationActions.updateEngagementReq(res.data.data));
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
        `${BASE_URL_backend}/api/profile/acceptrequest`,
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
        `${BASE_URL_backend}/api/profile/declinerequest`,
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
export const fetchAcceptRoomJoin = createAsyncThunk(
  "roomreq/accept",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    console.log("Follower ID is ", arg.roomId);
    const data = {
      roomId: arg.roomId,
      pendingUserId: arg.pendingUserId,
    };
    const jwtToken = localStorage.getItem("token");
    console.log(state);
    const response = await axios
      .post(`${BASE_URL_backend}/api/room/accept`, JSON.stringify(data), {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("Successfully accepted the room join request request");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
);
export const fetchRejectRoomJoin = createAsyncThunk(
  "roomreq/reject",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    console.log("Follower ID is ", arg.roomId);
    const data = {
      roomId: arg.roomId,
      pendingUserId: arg.pendingUserId,
    };
    const jwtToken = localStorage.getItem("token");
    console.log(state);
    const response = await axios
      .post(`${BASE_URL_backend}/api/room/reject`, JSON.stringify(data), {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("Successfully rejected the room join request request");
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
    roomReq: {
      totalCount: 0,
      requestList: [],
    },
    engagementReq: {
      requestList: [],
    },
  },
  reducers: {
    updateFollowReq(state, action) {
      state.followReq.count = action.payload.count;
      state.followReq.requestList = action.payload.requestList;
    },
    updateRoomJoinReq(state, action) {
      state.roomReq.totalCount = action.payload.totalCount;
      state.roomReq.requestList = action.payload.userList;
    },
    updateEngagementReq(state, action) {
      state.engagementReq.requestList = action.payload;
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
    builder.addCase(fetchRoomJoinReq.pending, (state, action) => {
      state.isLoading = true;
      console.log("Loading...");
    });
    builder.addCase(fetchRoomJoinReq.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Success");
    });
    builder.addCase(fetchRoomJoinReq.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Failed");
    });
    builder.addCase(fetchAcceptRoomJoin.pending, (state, action) => {
      state.isLoading = true;
      console.log("Loading...");
    });
    builder.addCase(fetchAcceptRoomJoin.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Success");
    });
    builder.addCase(fetchAcceptRoomJoin.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Failed");
    });
    builder.addCase(fetchRejectRoomJoin.pending, (state, action) => {
      state.isLoading = true;
      console.log("Loading...");
    });
    builder.addCase(fetchRejectRoomJoin.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Success");
    });
    builder.addCase(fetchRejectRoomJoin.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Failed");
    });
    builder.addCase(fetchEngagementReq.pending, (state, action) => {
      state.isLoading = true;
      console.log("Loading...");
    });
    builder.addCase(fetchEngagementReq.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Success");
    });
    builder.addCase(fetchEngagementReq.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Failed");
    });
  },
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice;
