import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
  "posts/get",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const response = await axios
      .get(
        `http://localhost:5000/api/home/rooms/${arg.roomId}/posts?page=${arg.pageNumber}&limit=${arg.postLimit}`,
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
      state.posts = [];
    },
    postsAdded(state, action) {
      state.posts = state.posts.concat(action.payload);
    },
    currentPageUpdated(state, action) {
      state.currentPage = action.payload;
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
  },
});

export const roomPostsActions = roomPostsSlice.actions;

export default roomPostsSlice;
