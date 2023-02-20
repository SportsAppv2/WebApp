import { createSlice } from "@reduxjs/toolkit";

const feedbackSlice = createSlice ({
    name: "feedback",
    initialState: {
        anonymity: false,
    },
    reducers: {
        toggleAnonymity(state){
            state.anonymity = !state.anonymity;
        }
    }
})

export const feedbackActions = feedbackSlice.actions;

export default feedbackSlice;