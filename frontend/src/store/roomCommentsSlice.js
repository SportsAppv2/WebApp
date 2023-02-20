import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchComments = createAsyncThunk(
  "comments/get",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const response = await axios
      .get(
        `http://localhost:5000/api/home/rooms/${arg.postId}/comments/${
          arg.commentId ? arg.commentId + "/" : ""
        }?page=${arg.pageNumber}&limit=${arg.commentLimit}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        dispatch(roomComments.commentsAdded(res.data.data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
);

const roomCommentsSlice = createSlice({
  name: "roomcomments",
  initialState: {
    comments: [],
    totalComments: 0,
    currentPage: 1,
  },
  reducers: {
    resetComments(state) {
      state.comments = [];
    },
    commentsAdded(state, action) {
      state.comments = state.comments.concat(action.payload);
    },
    currentPageUpdated(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state, action) => {
      state.isLoading = true;
      console.log("Loading...");
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Success");
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Failed");
    });
  },
});

export const roomComments = roomCommentsSlice.actions;

export default roomCommentsSlice;
