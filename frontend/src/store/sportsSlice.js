import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAvailableSports = createAsyncThunk(
  "sportsList/get",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const response = await axios
      .get("http://localhost:5000/api/general/getSports", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data.status == "SUCCESS") {
          dispatch(sportsActions.availableSportsAdded(res.data.data));
        }
      })
      .catch((err) => console.log(err.message));
  }
);

const sportsSlice = createSlice({
  name: "sports",
  initialState: {
    availableSports: [],
  },
  reducers: {
    availableSportsAdded(state, action) {
      state.availableSports = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAvailableSports.pending, (state, action) => {
      state.isLoading = true;
      console.log("Loading...");
    });
    builder.addCase(fetchAvailableSports.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Success");
    });
    builder.addCase(fetchAvailableSports.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Failed");
    });
  },
});

export const sportsActions = sportsSlice.actions;

export default sportsSlice;
