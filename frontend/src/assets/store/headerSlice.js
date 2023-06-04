import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name: "header",
    initialState: {
        showNotifications: false,
        showFollowRequests: false,
        showRoomRequests: false,
        showMenu: false,
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
        },
        toggleMenu(state) {
            state.showMenu = !state.showMenu;
        }
    }
})

export const headerActions = headerSlice.actions;

export default headerSlice;