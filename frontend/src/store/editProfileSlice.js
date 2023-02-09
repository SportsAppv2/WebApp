import { createSlice } from "@reduxjs/toolkit";

const editProfileSlice = createSlice({
    name: "editProfile",
    initialState: {
        userOriginal: {
            firstName: "",
            lastName: "",
            bio: "",
            country: "",
            region: "",
            insta: "",
            youtube: "",
            tiktok: "",
            facebook: "",
        },
        editedData: {
            firstName: "",
            lastName: "",
            bio: "",
            country: "",
            region: "",
            insta: "",
            youtube: "",
            tiktok: "",
            facebook: "",
        },
        showDiscardChanges: false
    },
    reducers: {
        fnameAdded(state, action){
            state.editedData.firstName = action.payload;
        },
        lnameAdded(state, action){
            state.editedData.lastName = action.payload;
        },
        bioAdded(state, action){
            state.editedData.bio = action.payload;
        },
        countryAdded(state, action){
            state.editedData.country = action.payload;
        },
        regionAdded(state, action){
            state.editedData.region = action.payload;
        },
        instaAdded(state, action){
            state.editedData.insta = action.payload;
        },
        youtubeAdded(state, action){
            state.editedData.firstName = action.payload;
        },
        tiktokAdded(state, action){
            state.editedData.tiktok = action.payload;
        },
        facebookAdded(state, action){
            state.editedData.facebook = action.payload;
        },
        revertToInitial(state){
            state.editedData = state.userOriginal
        },
        toggleDiscardChanges(state) {
            state.showDiscardChanges = !state.showDiscardChanges
        }
    }
})

export const editProfileActions = editProfileSlice.actions;

export default editProfileSlice;