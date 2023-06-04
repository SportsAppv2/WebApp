import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL_backend } from "../helpers/links";

export const fetchData = createAsyncThunk(
  "login/check",
  async (arg, { getState, dispatch }) => {
    const state = getState();
    const data = {
      email: state.login.email,
      password: state.login.password,
    };
    // const navigate = useNavigate();
    console.log("useNavigate() initialised");
    console.log(state);
    const response = await axios
      .post(`${BASE_URL_backend}/api/user/login`, JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("Logging in", res.status);
        if (res.data.status == "SUCCESS") {
          localStorage.setItem("token", res.data.token);
          console.log("Checking out token ", localStorage.getItem("token"));
          dispatch(loginActions.authChanged(true));
          dispatch(loginActions.invalidEntry(false));
        } else if (res.data.status == "SETUP NOT COMPLETE") {
          dispatch(loginActions.profileSetupIncomplete());
        } else {
          dispatch(loginActions.invalidEntry(true));
          dispatch(loginActions.setErrorMessage(res.data.message));
          // alert(res.data.message);
        }
        console.log(res);
        return res;
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
    setupProfile: false,
    invalid: false,
    errorMessage: "",
  },
  reducers: {
    authChanged(state, action) {
      state.authorized = action.payload;
    },
    profileSetupIncomplete(state) {
      state.setupProfile = true;
    },
    emailAdded(state, action) {
      state.email = action.payload;
    },
    passwordAdded(state, action) {
      state.password = action.payload;
    },
    invalidEntry(state, action) {
      state.invalid = action.payload;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
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
      console.log("Stopped loading. Failed");
    });
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
