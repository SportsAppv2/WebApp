import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchComments = createAsyncThunk(
  "comments/get",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const BASE_URL = process.env.REACT_APP_BASE_URL_backend;
    const response = await axios
      .get(
        `${BASE_URL}/api/home/rooms/${arg.postId}/comments/${
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
export const fetchCreateComment = createAsyncThunk(
  "comment/create",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const data = {
      parentPostId: arg.postId,
      parentCommentId: arg.commentId,
      content: {
        text: arg.content.text,
      },
    };
    const jwtToken = localStorage.getItem("token");
    console.log(state);
    const BASE_URL = process.env.REACT_APP_BASE_URL_backend;
    const response = await axios
      .post(
        `${BASE_URL}/api/home/comment/create`,
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
          dispatch(roomComments.commentAdded(res.data.comment));
          dispatch(roomComments.toggleNewComment(true));
          console.log(state.roomcomments.postedComment);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

const roomCommentsSlice = createSlice({
  name: "roomcomments",
  initialState: {
    comments: [],
    totalComments: 0,
    currentPage: 1,
    newComment: false,
    commentedPostId: "",
    commentedCommentId: "",
    postedComment: {},
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
    toggleNewComment(state, action) {
      state.newComment = action.payload;
      if (action.payload == false) {
        state.commentedCommentId = "";
        state.commentedPostId = "";
        state.postedComment = {};
      }
    },
    commentIdAdded(state, action) {
      state.commentedCommentId = action.payload;
    },
    postIdAdded(state, action) {
      state.commentedPostId = action.payload;
    },
    commentAdded(state, action) {
      state.postedComment = action.payload;
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
    builder.addCase(fetchCreateComment.pending, (state, action) => {
      state.isLoading = true;
      console.log("Loading...");
    });
    builder.addCase(fetchCreateComment.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Success");
    });
    builder.addCase(fetchCreateComment.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Failed");
    });
  },
});

export const roomComments = roomCommentsSlice.actions;

export default roomCommentsSlice;
