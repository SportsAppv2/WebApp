import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: "home",
    initialState: {
        pageNumber: 0,
        currentFeedType: "Feed",
    },
    reducers: {
        pageChanged(state, action){
            state.pageNumber = action.payload;
        },
        feedTypeChanged(state, action) {
            state.currentFeedType = action.payload;
        }
    }
})

export const homeActions = homeSlice.actions;

export default homeSlice;