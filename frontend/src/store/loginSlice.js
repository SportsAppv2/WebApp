import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
  "login/check",
  async (arg, { getState }) => {
    const state = getState();
    const data = {
      email: state.login.email,
      password: state.login.password,
    };
    console.log(state);
    const response = await axios
      .post("http://localhost:5000/api/users/login", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        console.log("Logging in");
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    return response.data;
  }
);
const loginSlice = createSlice({
  name: "login",
  initialState: {
    email: "",
    password: "",
    isLoading: false,
    authorized: false,
  },
  reducers: {
    emailAdded(state, action) {
      state.email = action.payload;
    },
    passwordAdded(state, action) {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoading = true;
      console.log("Loading...");
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Stopped loading. Success");
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.authorized = true;
      console.log("Stopped loading. Failed");
    });
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
