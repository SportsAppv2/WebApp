import { createSlice } from "@reduxjs/toolkit";

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
  },
  reducers: {
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
      state.firstName = action.payload;
    },
  },
});

export const signupActions = signupSlice.actions;

export default signupSlice;
