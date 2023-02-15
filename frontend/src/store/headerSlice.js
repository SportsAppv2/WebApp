import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name: "header",
    initialState: {
        showNotifications: false,
        showFollowRequests: false,
        showRoomRequests: false,
    },
    reducers: {
        toggleNotifications(state) {
            state.showNotifications = !state.showNotifications;
        },
        toggleFollowRequests(state) {
            state.showFollowRequests = !state.showFollowRequests
        },
        toggleRoomRequests(state) {
            state.showRoomRequests = !state.showRoomRequests
        }
    }
})

export const headerActions = headerSlice.actions;

export default headerSlice;