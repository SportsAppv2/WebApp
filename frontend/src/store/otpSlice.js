import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchResendOtp = createAsyncThunk(
  "resendOtp",
  async (arg, { dispatch, getState }) => {
    const state = getState();
    const data = {
      email: state.otp.email,
      userId: state.otp.userId,
    };
    console.log("Resending OTP data", data);
    const response = await axios
      .post("http://localhost:5000/api/user/resendotp/", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return response.data;
  }
);
export const fetchVerifyOtp = createAsyncThunk(
  "verifyOtp",
  async (arg, { dispatch, getState }) => {
    const state = getState();
    const data = {
      userId: state.otp.userId,
      otp: state.otp.otp,
    };
    console.log("Verifying OTP data", data);
    const response = await axios
      .post("http://localhost:5000/api/user/verifyotp/", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.status == "VERIFIED") {
          localStorage.setItem("token", res.data.token);
          console.log(
            "Token saved after signup ",
            localStorage.getItem("token")
          );
          dispatch(otpActions.authChanged(true));
        }
        return res.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return response.data;
  }
);

const otpSlice = createSlice({
  name: "otp",
  initialState: {
    email: "",
    userId: "",
    otp: "",
    timeLeft: "5",
    authorized: false,
  },
  reducers: {
    otpAdded(state, action) {
      state.otp = action.payload;
    },
    timeDecay(state) {
      state.timeLeft = state.timeLeft - 1;
    },
    timeReset(state) {
      state.timeLeft = "5";
    },
    userDataAdded(state, action) {
      state.email = action.payload.email;
      state.userId = action.payload.userId;
    },
    authChanged(state, action) {
      state.authorized = action.payload;
      console.log("OTP auth status: ", state.authorized);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchResendOtp.pending, (state, action) => {
      console.log("Loading..");
    });
    builder.addCase(fetchResendOtp.fulfilled, (state, action) => {
      console.log("Loading Stopped");
      console.log("Success");
      otpSlice.caseReducers.timeReset(state);
    });
    builder.addCase(fetchResendOtp.rejected, (state, action) => {
      console.log("Loading Stopped");
      console.log("Error");
      otpSlice.caseReducers.timeReset(state);
    });
    builder.addCase(fetchVerifyOtp.pending, (state, action) => {
      console.log("Loading..");
    });
    builder.addCase(fetchVerifyOtp.fulfilled, (state, action) => {
      console.log("Loading Stopped");
      console.log("Success, authorizing ", state.authorized);
    });
    builder.addCase(fetchVerifyOtp.rejected, (state, action) => {
      console.log("Loading Stopped");
      console.log("Error");
    });
  },
});

export const otpActions = otpSlice.actions;

export default otpSlice;
