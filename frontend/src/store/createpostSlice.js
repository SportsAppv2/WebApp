import { createSlice } from "@reduxjs/toolkit";

const createpostSlice = createSlice({
    name: "createpost",
    initialState: {
        text : "",
    },
    reducers: {
        addHashtag(state,action){
            state.text = state.text + ' #';
        },
        contentChanged(state, action) {
            state.text = action.payload;
        }
    }
}
);

export const createpostActions = createpostSlice.actions;

export default createpostSlice;