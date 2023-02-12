import { createSlice } from "@reduxjs/toolkit";

const replySlice = createSlice({
    name: "reply",
    initialState: {
        text: "",
        files: "",
        showComments: "",
    },
    reducers: {
        addHashtag(state) {
            state.text = state.text + " #";                 
          },
          contentChanged(state, action) {
            state.text = action.payload;    
          },
          filesAdded(state, action) {
            state.files = action.payload;
          },
          filesDeleted(state) {
            state.files = "";
          },
          emojiAdded(state, action) {
            state.text = state.text + action.payload;
          },
          toggleComments(state) {
            state.showComments = !state.showComments;
          },
    }
})

export const replyActions = replySlice.actions;

export default replySlice;