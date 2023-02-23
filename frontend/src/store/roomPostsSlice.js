import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
  "posts/get",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const response = await axios
      .get(
        `http://localhost:5000/api/home/rooms/${arg.roomId}/posts?page=${state.roomposts.currentPage}&limit=${arg.postLimit}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        dispatch(roomPostsActions.postsAdded(res.data.data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
);
export const fetchOwnPosts = createAsyncThunk(
  "posts/getown",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const response = await axios
      .get(
        `http://localhost:5000/api/home/post/getown?page=${state.roomposts.currentPage}&limit=${arg.postLimit}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        dispatch(roomPostsActions.postsAdded(res.data.data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
);

const roomPostsSlice = createSlice({
  name: "roomposts",
  initialState: {
    posts: [],
    totalPost: 0,
    currentPage: 1,
  },
  reducers: {
    resetPosts(state) {
      state.currentPage = 1;
      state.posts = [];
    },
    postsAdded(state, action) {
      state.posts = state.posts.concat(action.payload);
    },
    currentPageIncreased(state) {
      state.currentPage = state.currentPage + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.isLoading = true;
      console.log("Loading...");
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Success");
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Failed");
    });
    builder.addCase(fetchOwnPosts.pending, (state, action) => {
      state.isLoading = true;
      console.log("Loading...");
    });
    builder.addCase(fetchOwnPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Success");
    });
    builder.addCase(fetchOwnPosts.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Failed");
    });
  },
});

export const roomPostsActions = roomPostsSlice.actions;

export default roomPostsSlice;
