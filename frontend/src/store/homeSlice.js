import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNewsArticles = createAsyncThunk(
    "newsArticles",
    async (arg, { dispatch, getState }) => {
      const state = getState();
      const response = await axios
        .get("https://newsapi.org/v2/top-headlines?category=sports&apiKey=3982d22a5c784cc39b7cd2c4a5fb3468", JSON.stringify(), {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log("response is ", res.data);
          return res.data;
        })
        .catch((error) => {
          console.log(error);
        });
      return response.data;
    }
  );

const homeSlice = createSlice({
    name: "home",
    initialState: {
        pageNumber: 0,
        currentFeedType: "Feed",
    },
    reducers: {
        pageChanged(state, action){
            state.pageNumber = action.payload;
        },
        feedTypeChanged(state, action) {
            state.currentFeedType = action.payload;
        }
    }
})

export const homeActions = homeSlice.actions;

export default homeSlice;