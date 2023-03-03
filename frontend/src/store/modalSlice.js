import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    warningModal: {
      showModal: false,
      text: "",
    },
    button: {
      mainBtn: false,
      button2: false,
    },
  },
  reducers: {
    toggleShowWarningModal(state, action) {
      state.warningModal.showModal = action.payload;
    },
    resetButtons(state) {
      state.button.mainBtn = false;
      state.button.button2 = false;
    },
    mainBtnClicked(state, action) {
      state.button.mainBtn = action.payload;
    },
    button2Clicked(state, action) {
      state.button.button2 = action.payload;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice;
