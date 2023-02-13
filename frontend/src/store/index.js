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
import userProfileSlice from "./userProfileSlice";
import editProfileSlice from "./editProfileSlice";
import replySlice from "./replySlice";
import createroomSlice from "./createroomSlice"

const store = configureStore(
  {
    reducer: {
      setup: setupSlice.reducer,
      login: loginSlice.reducer,
      room: roomSlice.reducer,
      otp: otpSlice.reducer,
      signup: signupSlice.reducer,
      createpost: createpostSlice.reducer,
      home: homeSlice.reducer,
      userProfile: userProfileSlice.reducer,
      editProfile: editProfileSlice.reducer,
      reply: replySlice.reducer,
      createroom: createroomSlice.reducer,
    },
  },
  applyMiddleware(thunk)
);

export default store;
