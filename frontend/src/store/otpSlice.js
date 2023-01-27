import { createSlice } from "@reduxjs/toolkit";

const otpSlice = createSlice({
    name: "otp",
    initialState:{
        email: "",
        userId: "",
        otp: "",
        timeLeft: "60"
    },
    reducers:{
        otpAdded(state,action){
            state.otp=action.payload;
        },
        timeDecay(state){
            state.timeLeft = state.timeLeft-1;
        }
    }
}
)

export const otpActions = otpSlice.actions;

export default otpSlice;
