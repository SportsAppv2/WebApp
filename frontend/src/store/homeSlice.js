import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: "home",
    initialState: {
        showJoinRoom: false
    },
    reducers: {
        toggleJoinRoom(state){
            state.showJoinRoom = !state.showJoinRoom;
        }
    }
})

export const homeActions = homeSlice.actions;

export default homeSlice;