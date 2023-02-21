import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRooms = createAsyncThunk(
  "rooms/get",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const response = await axios
      .get("http://localhost:5000/api/room/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
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
    console.log("Searching for room with this ", data);
    const response = await axios
      .post("http://localhost:5000/api/room/find", JSON.stringify(data), {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("Searched for a room and this is the response ", res);
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
    console.log("Joining a room with this ", data);
    const response = await axios
      .post("http://localhost:5000/api/room/join", JSON.stringify(data), {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.status == "SUCCESS") {
          dispatch(roomActions.toogleSearchedRoomModal());
          console.log(
            "After this the user should redirect to the newly joined room"
          );
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
    const response = await axios
      .get(`http://localhost:5000/api/room/details/${arg.roomId}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log("Res data is ", res.data.data);
        if (res.data.status == "SUCCESS") {
          console.log("Success. Res is ", res.data.data);
          dispatch(roomActions.updateCurrentRoom(res.data.data));
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
      userCount: 0,
      roomSummary: "",
      sports: [],
    },
    currentRoom: {
      joiningCode: "",
      roomName: "",
      roomPic: "",
      isVerified: false,
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
  },
  reducers: {
    feedTypeChanged(state, action) {
      state.currentFeedType = action.payload.feedType;
    },
    toggleModal(state) {
      state.showModal = !state.showModal;
      console.log(state.showModal);
    },
    toggleComments(state) {
      state.showComments = !state.showComments;
    },
    toggleTournament(state) {
      state.showTournament = !state.showTournament;
    },
    insertRooms(state, action) {
      state.fetchedRooms = action.payload;
      console.log("fetched rooms is now ", state.fetchedRooms);
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
      state.searchedRoom.userCount = action.payload.users.count;
      state.searchedRoom.sports = action.payload.roomDetails.sportsName;
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
  },
});

export const roomActions = roomSlice.actions;

export default roomSlice;
