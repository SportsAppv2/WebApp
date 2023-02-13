import { createSlice } from "@reduxjs/toolkit";

const createroomSlice = createSlice({
    name: "createroom",
    initialState: {
        info:{
            roomName: "",
            privacy: "",
            bio: "",
            tags: [],
        }        
    },
    reducers: {
        infoAdded(state , action){
            state.info = action.payload;
        },
        tagsRemoved(state, action) {
            const index = action.payload;
            state.info.tags = state.info.tags.filter(
              (item, i) => item.id != index
            );
        },
    }
})

export const createroomActions = createroomSlice.actions;

export default createroomSlice;