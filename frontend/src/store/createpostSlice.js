import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { roomPostsActions } from "./roomPostsSlice";
import { roomActions } from "./roomSlice";

export const fetchCreatePost = createAsyncThunk(
  "post/create",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const roomId = state.room.currentRoomId;
    const data = {
      roomId,
      content: {
        text: state.createpost.text,
      },
      settings: {
        privacy: state.createpost.privacy,
      },
    };
    const jwtToken = localStorage.getItem("token");
    console.log(state);
    const response = await axios
      .post(
        "http://localhost:5000/api/home/post/create",
        JSON.stringify(data),
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.status == "SUCCESS") {
          dispatch(roomActions.toggleModal());
          dispatch(createpostActions.resetContent());
          dispatch(roomPostsActions.postUploaded(res.data.post));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

const createpostSlice = createSlice({
  name: "createpost",
  initialState: {
    text: "",
    privacy: "Everyone",
    files: "",
    pollShow: false,
  },
  reducers: {
    addHashtag(state) {
      state.text = state.text + " #";
    },
    contentChanged(state, action) {
      state.text = action.payload;
    },
    privacyChanged(state, action) {
      state.privacy = action.payload;
    },
    filesAdded(state, action) {
      state.files = action.payload;
    },
    filesDeleted(state) {
      state.files = "";
    },
    emojiAdded(state, action) {
      state.text = state.text + action.payload;
    },
    pollModal(state) {
      state.pollShow = !state.pollShow;
    },
    resetContent(state) {
      state.text = "";
      state.files = "";
      state.pollShow = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCreatePost.pending, (state, action) => {
      state.isLoading = true;
      console.log("Loading...");
    });
    builder.addCase(fetchCreatePost.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Success");
    });
    builder.addCase(fetchCreatePost.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Failed");
    });
  },
});

export const createpostActions = createpostSlice.actions;

export default createpostSlice;
