import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";

export const fetchNewsArticles = createAsyncThunk(
    "newsArticles",
    async (arg, { dispatch, getState }) => {
      const response = await axios
        .get("https://newsapi.org/v2/top-headlines?category=sports&apiKey=3982d22a5c784cc39b7cd2c4a5fb3468&language=en", JSON.stringify(), {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log("response is ", res.data.articles);
          dispatch(homeActions.getNews(res.data.articles));
          return res.data;
        })
        .catch((error) => {
          console.log(error);
        });
      return response;
    }
  );


const homeSlice = createSlice({
    name: "home",
    initialState: {
        pageNumber: 0,
        currentFeedType: "Feed",
        news: [],
    },
    reducers: {
        pageChanged(state, action){
            state.pageNumber = action.payload;
        },
        feedTypeChanged(state, action) {
            state.currentFeedType = action.payload;
        },
        getNews(state,action){
          state.news = action.payload;
        }
    }
})

export const homeActions = homeSlice.actions;

export default homeSlice;