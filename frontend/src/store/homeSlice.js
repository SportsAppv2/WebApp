import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: "home",
    initialState: {
        pageNumber: 0,
    },
    reducers: {
        pageChanged(state, action){
            state.pageNumber = action.payload;
        }
    }
})

export const homeActions = homeSlice.actions;

export default homeSlice;