import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { AiOutlinePlusCircle, AiOutlineSplitCells } from "react-icons/ai";
import thunk from "redux-thunk";
import loginSlice from "./loginSlice";
import otpSlice from "./otpSlice";
import roomSlice from "./roomSlice";
import setupSlice from "./setupSlice";

const store = configureStore(
  {
    reducer: {
      setup: setupSlice.reducer,
      login: loginSlice.reducer,
      room: roomSlice.reducer,
      otp: otpSlice.reducer
    },
  },
  applyMiddleware(thunk)
);

export default store;
