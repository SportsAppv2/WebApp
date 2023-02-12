import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
  name: "room",
  initialState: {
    currentFeedType: "top",
    showModal: false,
    showComments: false,
  },
  reducers: {
    feedTypeChanged(state, action) {
      state.currentFeedType = action.payload.feedType;
    },
    toggleModal(state) {
      state.showModal = !state.showModal;
      console.log(state.showModal);
    },
    toggleComments(state) {
      state.showComments = !state.showComments;
    }
  },
});

export const roomActions = roomSlice.actions;

export default roomSlice;
