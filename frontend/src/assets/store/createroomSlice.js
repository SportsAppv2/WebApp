import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { homeActions } from "./homeSlice";
import { fetchRooms, roomActions } from "./roomSlice";
import { BASE_URL_backend } from "../helpers/links";

export const fetchCreateRoom = createAsyncThunk(
  "rooms/create",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const data = {
      roomDetails: {
        roomName: state.createroom.info.roomName,
        isPrivateRoom: state.createroom.info.isPrivate,
        sportsName: state.createroom.info.tags,
        roomSummary: state.createroom.info.bio,
      },
    };
    console.log(
      data.roomDetails.roomName,
      data.roomDetails.isPrivateRoom,
      data.roomDetails.sportsName,
      data.roomDetails.roomSummary
    );
    const response = await axios
      .post(`${BASE_URL_backend}/api/room/create`, JSON.stringify(data), {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.status == "SUCCESS") {
          alert("New room created successfully");
          dispatch(fetchRooms());
        } else if (res.data.status == "FAILED") {
          alert(res.data.message);
        }
        dispatch(homeActions.pageChanged(0));
      })
      .catch((err) => console.log(err.message));
  }
);
const createroomSlice = createSlice({
  name: "createroom",
  initialState: {
    info: {
      roomName: "",
      isPrivate: false,
      bio: "",
      tags: [],
    },
  },
  reducers: {
    infoAdded(state, action) {
      state.info = action.payload;
    },
    tagsRemoved(state, action) {
      const tagName = action.payload;
      const index = state.info.tags.indexOf(tagName);
      state.info.tags.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCreateRoom.pending, (state, action) => {
      state.isLoading = true;
      console.log("Loading...");
    });
    builder.addCase(fetchCreateRoom.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Success");
    });
    builder.addCase(fetchCreateRoom.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Failed");
    });
  },
});

export const createroomActions = createroomSlice.actions;

export default createroomSlice;
