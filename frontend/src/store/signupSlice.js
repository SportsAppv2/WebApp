import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSignup = createAsyncThunk(
  "signup",
  async (arg, { dispatch, getState }) => {
    const state = getState();
    const data = {
      email: state.signup.email,
      password: state.signup.password,
      firstName: state.signup.firstName,
      lastName: state.signup.lastName,
      dateOfBirth:
        state.signup.dateOfBirth.date +
        "-" +
        state.signup.dateOfBirth.month +
        "-" +
        state.signup.dateOfBirth.year +
        "-",
    };
    console.log("Ready for signup", data);
    const response = await axios
      .post("http://localhost:5000/api/user/signup", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        console.log("Signing in");
        return data.data;
      })
      .catch((error) => {
        console.log(error);
      });
    if (response.status == "PENDING") {
      dispatch(signupActions.authChanged(true));
    }
    return response.data;
  }
);

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: {
      date: "",
      month: "",
      year: "",
    },
    password: "",
    signupAuthorized: false,
  },
  reducers: {
    authChanged(state, action) {
      state.signupAuthorized = action.payload;
    },
    firstNameChanged(state, action) {
      state.firstName = action.payload;
    },
    lastNameChanged(state, action) {
      state.lastName = action.payload;
    },
    emailChanged(state, action) {
      state.email = action.payload;
    },
    dateOfBirthChanged(state, action) {
      if (action.payload.date) {
        state.dateOfBirth.date = action.payload.date;
      } else if (action.payload.month) {
        state.dateOfBirth.month = action.payload.month;
      } else if (action.payload.year) {
        state.dateOfBirth.year = action.payload.year;
      }
    },
    passwordChanged(state, action) {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSignup.pending, (state, action) => {
      console.log("Loading..");
    });
    builder.addCase(fetchSignup.fulfilled, (state, action) => {
      console.log("Loading Stopped");
      console.log("Success");
    });
    builder.addCase(fetchSignup.rejected, (state, action) => {
      console.log("Loading Stopped");
      console.log("Error");
    });
  },
});

export const signupActions = signupSlice.actions;

export default signupSlice;
