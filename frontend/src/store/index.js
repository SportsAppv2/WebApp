import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import loginSlice from "./loginSlice";
import roomSlice from "./roomSlice";
import setupSlice from "./setupSlice";

const store = configureStore(
  {
    reducer: {
      setup: setupSlice.reducer,
      login: loginSlice.reducer,
      room: roomSlice.reducer,
    },
  },
  applyMiddleware(thunk)
);

export default store;
