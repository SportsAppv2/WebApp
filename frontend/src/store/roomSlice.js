import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
  name: "room",
  initialState: {
    currentFeedType: "top",
    showModal: false,
  },
  reducers: {
    feedTypeChanged(state, action) {
      state.currentFeedType = action.payload.feedType;
    },
    toggleModal(state) {
      state.showModal = !state.showModal;
      console.log(state.showModal);
    },
  },
});

export const roomActions = roomSlice.actions;

export default roomSlice;
