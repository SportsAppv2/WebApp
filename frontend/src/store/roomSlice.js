import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { modalActions } from "./modalSlice";

export const fetchRooms = createAsyncThunk(
  "rooms/get",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const BASE_URL = process.env.REACT_APP_BASE_URL_backend;
    const response = await axios
      .get(`${BASE_URL}/api/room/`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data.status == "SUCCESS") {
          dispatch(roomActions.insertRooms(res.data.data));
        }
      })
      .catch((err) => console.log(err.message));
  }
);
export const fetchFindRoom = createAsyncThunk(
  "room/find",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const data = {
      joiningCode: state.room.roomCode,
      roomName: state.room.roomName,
    };
    const BASE_URL = process.env.REACT_APP_BASE_URL_backend;
    const response = await axios
      .post(`${BASE_URL}/api/room/find`, JSON.stringify(data), {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.status == "SUCCESS") {
          dispatch(roomActions.updateSearchedRoom(res.data.data));
          dispatch(roomActions.toogleSearchedRoomModal());
        } else if (res.data.status == "FAILED") {
          alert(res.data.message);
        }
      })
      .catch((err) => console.log(err.message));
  }
);
export const fetchJoinRoom = createAsyncThunk(
  "room/join",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const data = {
      joiningCode: state.room.roomCode,
      roomName: state.room.roomName,
    };
    const BASE_URL = process.env.REACT_APP_BASE_URL_backend;
    const response = await axios
      .post(`${BASE_URL}/api/room/join`, JSON.stringify(data), {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.status == "SUCCESS") {
          dispatch(roomActions.toogleSearchedRoomModal());
        } else if (res.data.status == "FAILED") {
          alert(res.data.message);
        }
      })
      .catch((err) => console.log(err.message));
  }
);
export const getRoomDetails = createAsyncThunk(
  "room/get",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const BASE_URL = process.env.REACT_APP_BASE_URL_backend;
    const response = await axios
      .get(`${BASE_URL}/api/room/details/${arg.roomId}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data.status == "SUCCESS") {
          dispatch(roomActions.resetRoomStatus());
          dispatch(roomActions.updateCurrentRoom(res.data.data));
        } else if (
          res.data.status == "FAILED" &&
          res.data.message == "Room not found"
        ) {
          dispatch(roomActions.resetRoomStatus());
          dispatch(roomActions.toggleRoomNotFound(true));
        } else if (
          res.data.status == "FAILED" &&
          res.data.message == "User must join the room"
        ) {
          dispatch(roomActions.resetRoomStatus());
          dispatch(roomActions.toggleRoomNotJoined(true));
          dispatch(roomActions.updateSearchedRoom(res.data.room));
        }
      })
      .catch((err) => console.log(err.message));
  }
);
export const leaveRoom = createAsyncThunk(
  "room/leave",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const data = {
      roomId: arg.roomId,
    };
    const BASE_URL = process.env.REACT_APP_BASE_URL_backend;
    const response = await axios
      .post(`${BASE_URL}/api/room/leave`, JSON.stringify(data), {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.status == "SUCCESS") {
          dispatch(roomActions.toggleRoomLeft(true));
        }
      })
      .catch((err) => console.log(err.message));
  }
);
const roomSlice = createSlice({
  name: "room",
  initialState: {
    currentFeedType: "top",
    searchBy: "roomName",
    currentRoomId: "",
    roomName: "",
    roomCode: "",
    showSearchedRoomModal: false,
    showModal: false, //This is the create post modal
    showRoomInfoModal: false,
    showRoomSettingsModal: false,
    showComments: false,
    showTournament: false,
    searchedRoom: {
      roomName: "",
      roomPic: "",
      isVerified: false,
      isPrivate: false,
      userCount: 0,
      roomSummary: "",
      sports: [],
    },
    currentRoom: {
      joiningCode: "",
      roomName: "",
      roomPic: "",
      isVerified: false,
      isPrivate: false,
      userCount: 0,
      roomSummary: "",
      sports: [],
      admin: {
        owner: "",
        moderators: [],
      },
      createdAt: "",
    },
    fetchedRooms: [],
    roomLeft: false,
    roomNotFound: false,
    roomNotJoined: false,
  },
  reducers: {
    feedTypeChanged(state, action) {
      state.currentFeedType = action.payload.feedType;
    },
    toggleModal(state) {
      state.showModal = !state.showModal;
    },
    toggleComments(state) {
      state.showComments = !state.showComments;
    },
    toggleTournament(state) {
      state.showTournament = !state.showTournament;
    },
    insertRooms(state, action) {
      state.fetchedRooms = action.payload;
    },
    removedRoom(state, action) {
      state.fetchedRooms = state.fetchedRooms.filter(
        (item) => item._id !== action.payload
      );
    },
    insertRoomName(state, action) {
      state.roomName = action.payload;
    },
    insertRoomCode(state, action) {
      state.roomCode = action.payload;
    },
    toggleJoin(state) {
      state.roomName = "";
      state.roomCode = "";
      if (state.searchBy == "roomName") {
        state.searchBy = "roomCode";
      } else if (state.searchBy == "roomCode") {
        state.searchBy = "roomName";
      }
    },
    toggleRoomLeft(state, action) {
      state.roomLeft = action.payload;
    },
    toggleRoomInfoModal(state) {
      state.showRoomInfoModal = !state.showRoomInfoModal;
      state.showRoomSettingsModal = false;
    },
    toggleRoomSettingsModal(state) {
      state.showRoomSettingsModal = !state.showRoomSettingsModal;
      state.showRoomInfoModal = false;
    },
    toogleSearchedRoomModal(state) {
      state.showSearchedRoomModal = !state.showSearchedRoomModal;
    },
    toggleRoomNotFound(state, action) {
      state.roomNotFound = action.payload;
    },
    toggleRoomNotJoined(state, action) {
      state.roomNotJoined = action.payload;
    },
    resetRoomStatus(state) {
      state.roomNotFound = false;
      state.roomNotJoined = false;
    },
    updateCurrentRoom(state, action) {
      state.currentRoom.roomName = action.payload.roomDetails.roomName;
      state.currentRoom.roomPic = action.payload.roomDetails.roomPic;
      state.currentRoom.roomSummary = action.payload.roomDetails.roomSummary;
      state.currentRoom.isVerified = action.payload.roomDetails.isVerified;
      state.currentRoom.userCount = action.payload.userCount;
      state.currentRoom.sports = action.payload.roomDetails.sportsName;
      state.currentRoom.createdAt = action.payload.roomDetails.createdAt;
      state.currentRoom.admin = action.payload.admin;
      state.currentRoom.joiningCode = action.payload.joiningCode;
      // console.log(state.currentRoom.roomName);
    },
    updateSearchedRoom(state, action) {
      state.searchedRoom.roomName = action.payload.roomDetails.roomName;
      state.searchedRoom.roomPic = action.payload.roomDetails.roomPic;
      state.searchedRoom.roomSummary = action.payload.roomDetails.roomSummary;
      state.searchedRoom.isVerified = action.payload.roomDetails.isVerified;
      state.searchedRoom.isPrivate = action.payload.roomDetails.isPrivateRoom;
      state.searchedRoom.sports = action.payload.roomDetails.sportsName;
      state.searchedRoom.userCount = action.payload.userCount;
    },
    updateCurrentRoomId(state, action) {
      if (state.currentRoomId != action.payload) {
        state.currentRoomId = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRooms.pending, (state, action) => {
      state.isLoading = true;
      console.log("Loading...");
    });
    builder.addCase(fetchRooms.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Success");
    });
    builder.addCase(fetchRooms.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Failed");
    });
    builder.addCase(fetchFindRoom.pending, (state, action) => {
      state.isLoading = true;
      console.log("Loading...");
    });
    builder.addCase(fetchFindRoom.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Success");
    });
    builder.addCase(fetchFindRoom.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Failed");
    });
    builder.addCase(fetchJoinRoom.pending, (state, action) => {
      state.isLoading = true;
      console.log("Loading...");
    });
    builder.addCase(fetchJoinRoom.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Success");
    });
    builder.addCase(fetchJoinRoom.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Failed");
    });
    builder.addCase(getRoomDetails.pending, (state, action) => {
      state.isLoading = true;
      console.log("Loading...");
    });
    builder.addCase(getRoomDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Success");
    });
    builder.addCase(getRoomDetails.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Failed");
    });
    builder.addCase(leaveRoom.pending, (state, action) => {
      state.isLoading = true;
      console.log("Loading...");
    });
    builder.addCase(leaveRoom.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Success");
    });
    builder.addCase(leaveRoom.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Failed");
    });
  },
});

export const roomActions = roomSlice.actions;

export default roomSlice;
