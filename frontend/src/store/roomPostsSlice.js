import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { userProfileActions } from "./userProfileSlice";

export const fetchPosts = createAsyncThunk(
  "posts/get",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const BASE_URL = process.env.REACT_APP_BASE_URL_backend;
    const response = await axios
      .get(
        `${BASE_URL}/api/home/rooms/${arg.roomId}/posts?page=${state.roomposts.currentPage}&limit=${arg.postLimit}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        if (res.data.status == "SUCCESS") {
          dispatch(userProfileActions.userIdAdded(res.data.userId));
          if (res.data.data.length == 0) {
            dispatch(roomPostsActions.setHasMoreItem(false));
          } else {
            dispatch(roomPostsActions.setIsLoading(false));
            dispatch(roomPostsActions.postsAdded(res.data.data));
          }
        }
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
    const BASE_URL = process.env.REACT_APP_BASE_URL_backend;
    const response = await axios
      .get(
        `${BASE_URL}/api/home/post/get?page=${state.roomposts.currentPage}&limit=${arg.postLimit}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        if (res.data.status == "SUCCESS") {
          dispatch(userProfileActions.userIdAdded(res.data.userId));
          if (res.data.data.length == 0) {
            dispatch(roomPostsActions.setHasMoreItem(false));
          } else {
            dispatch(roomPostsActions.setIsLoading(false));
            dispatch(roomPostsActions.postsAdded(res.data.data));
          }
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
);
export const fetchProfilePosts = createAsyncThunk(
  "posts/profile",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const BASE_URL = process.env.REACT_APP_BASE_URL_backend;
    const response = await axios
      .get(
        `${BASE_URL}/api/home/post/get/${arg.userName}?page=${state.roomposts.currentPage}&limit=${arg.postLimit}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        if (res.data.status == "SUCCESS") {
          dispatch(userProfileActions.userIdAdded(res.data.userId));
          if (res.data.data.length == 0) {
            dispatch(roomPostsActions.setHasMoreItem(false));
          } else {
            dispatch(roomPostsActions.setIsLoading(false));
            dispatch(roomPostsActions.postsAdded(res.data.data));
          }
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
);
export const fetchDeletePost = createAsyncThunk(
  "post/delete",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const BASE_URL = process.env.REACT_APP_BASE_URL_backend;
    const response = await axios
      .delete(`${BASE_URL}/api/home/post/${arg.postId}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log("DELETED POST, res is ", res);
        if (res.data.status == "SUCCESS") {
          dispatch(roomPostsActions.postDeleted(arg.postId));
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
);
export const fetchPost = createAsyncThunk(
  "post/get",
  async (arg, { getState, dispatch }) => {
    console.log("INSIDE FETCH POST");
    const state = getState();
    const BASE_URL = process.env.REACT_APP_BASE_URL_backend;
    const response = await axios
      .get(`${BASE_URL}/api/home/post/${arg.postId}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data.status == "SUCCESS") {
          const post = res.data.data;
          const obj = {
            key: post.postId,
            roomName: post.roomName,
            roomId: post.roomId,
            postId: post.postId,
            dp: post.creator.profilePic,
            name:
              post.creator.name.firstName + " " + post.creator.name.lastName,
            userName: post.creator.userName,
            userId: post.creator.id,
            time: post.stats.createdAt,
            textContent: post.content.text,
            upvotes: post.stats.upvotes.count,
            downvotes: post.stats.downvotes.count,
            totalComments: post.comments.count,
            imageUrl: post.content.image,
            videoUrl: post.content.video,
            liked: post.liked,
            disliked: post.disliked,
          };
          dispatch(roomPostsActions.setEnlargedPost(obj));
        }
      })
      .catch((err) => console.log(err.message));
  }
);
const roomPostsSlice = createSlice({
  name: "roomposts",
  initialState: {
    posts: [],
    totalPost: 0,
    currentPage: 1,
    isLoading: false,
    hasMoreItems: true,
    reachedPageEnd: false,
    postEnlarged: false,
    refreshFeed: true,
    scrollNow: false,
    scroll: {
      feedScroll: 0,
      overallScroll: 0,
    },
    enlargedPost: {},
  },
  reducers: {
    resetPosts(state) {
      state.currentPage = 1;
      state.posts = [];
      state.isLoading = false;
      state.hasMoreItems = true;
      state.reachedPageEnd = false;
    },
    postsAdded(state, action) {
      state.posts = state.posts.concat(action.payload);
    },
    postDeleted(state, action) {
      state.posts = state.posts.filter((obj) => {
        console.log(obj);
        return obj._id !== action.payload;
      });
    },
    postUploaded(state, action) {
      state.posts.unshift(action.payload);
    },
    currentPageIncreased(state) {
      state.currentPage = state.currentPage + 1;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setHasMoreItem(state, action) {
      state.hasMoreItems = action.payload;
    },
    togglePageEndReached(state, action) {
      state.reachedPageEnd = action.payload;
    },
    togglePostEnlarged(state, action) {
      console.log(action.payload);
      state.postEnlarged = action.payload;
    },
    toggleRefreshFeed(state, action) {
      state.refreshFeed = action.payload;
    },
    setOverallScroll(state, action) {
      state.scroll.overallScroll = action.payload;
    },
    setFeedScroll(state, action) {
      state.scroll.feedScroll = action.payload;
    },
    toggleScrollNow(state, action) {
      state.scrollNow = action.payload;
    },
    setEnlargedPost(state, action) {
      state.enlargedPost = action.payload;
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
    builder.addCase(fetchProfilePosts.pending, (state, action) => {
      state.isLoading = true;
      console.log("Loading...");
    });
    builder.addCase(fetchProfilePosts.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Success");
    });
    builder.addCase(fetchProfilePosts.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Failed");
    });
    builder.addCase(fetchDeletePost.pending, (state, action) => {
      state.isLoading = true;
      console.log("Loading...");
    });
    builder.addCase(fetchDeletePost.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Success");
    });
    builder.addCase(fetchDeletePost.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Failed");
    });
    builder.addCase(fetchPost.pending, (state, action) => {
      state.isLoading = true;
      console.log("Loading...");
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Success");
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Failed");
    });
  },
});

export const roomPostsActions = roomPostsSlice.actions;

export default roomPostsSlice;
