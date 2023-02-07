import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { AiOutlinePlusCircle, AiOutlineSplitCells } from "react-icons/ai";
import thunk from "redux-thunk";
import createpostSlice from "./createpostSlice";
import loginSlice from "./loginSlice";
import otpSlice from "./otpSlice";
import roomSlice from "./roomSlice";
import setupSlice from "./setupSlice";
import signupSlice from "./signupSlice";
import homeSlice from "./homeSlice";

const store = configureStore(
  {
    reducer: {
      setup: setupSlice.reducer,
      login: loginSlice.reducer,
      room: roomSlice.reducer,
      otp: otpSlice.reducer,
      signup: signupSlice.reducer,
      createpost: createpostSlice.reducer,
      home: homeSlice.reducer
    },
  },
  applyMiddleware(thunk)
);

export default store;
