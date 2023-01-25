import { createSlice } from "@reduxjs/toolkit";

const setupSlice = createSlice({
  name: "setup",
  initialState: {
    profileInfo: {
      userName: "",
      country: "",
      region: "",
      tags: [],
    },
    currentPage: 1,
  },
  reducers: {
    pageChanged(state, action) {
      state.currentPage = action.payload.goTo;
      console.log("State changed to", state.currentPage);
    },
    profileInfoAdded(state, action) {
      state.profileInfo = action.payload;
    },
    tagsRemoved(state, action) {
      const index = action.payload;
      state.profileInfo.tags = state.profileInfo.tags.filter(
        (item, i) => item.id != index
      );
    },
  },
});

export const setupActions = setupSlice.actions;

export default setupSlice;
