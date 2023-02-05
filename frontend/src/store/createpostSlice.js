import { createSlice } from "@reduxjs/toolkit";

const createpostSlice = createSlice({
    name: "createpost",
    initialState: {
        text : "",
        files : "",
        pollShow: false
    },
    reducers: {
        addHashtag(state){
            state.text = state.text + ' #';
        },
        contentChanged(state, action) {
            state.text = action.payload;
        },
        filesAdded(state,action){
            state.files = action.payload;
        },
        filesDeleted(state){
            state.files = "";
        },
        emojiAdded(state,action){
            state.text = state.text + action.payload;
        },
        pollModal(state){
            state.pollShow = !state.pollShow
        }
    }
}
);

export const createpostActions = createpostSlice.actions;

export default createpostSlice;