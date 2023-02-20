import { createSlice } from "@reduxjs/toolkit";

const tournamentSlice = createSlice({
    name: "tournament",
    initialState: {
        createInfo: {
            title: "",
            from: "",
            to: "",
            venue: "",
        },
        
    },
    reducers: {
        titleAdded(state, action) {
            state.createInfo.title  = action.payload;
        },
        fromAdded(state, action) {
            state.createInfo.from  = action.payload;
        },
        toAdded(state, action) {
            state.createInfo.to  = action.payload;
        },
        venueAdded(state, action) {
            state.createInfo.venue  = action.payload;
        },
        clearInfo(state){
            state.createInfo.title = "";
            state.createInfo.from = "";
            state.createInfo.to = "";
            state.createInfo.venue = "";
        }
    }
})

export const tournamentActions = tournamentSlice.actions;

export default tournamentSlice;