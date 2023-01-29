import { createSlice } from "@reduxjs/toolkit";

const otpSlice = createSlice({
    name: "otp",
    initialState:{
        email: "",
        userId: "",
        otp: "",
        timeLeft: "5",
        authorized: false
    },
    reducers:{
        otpAdded(state,action){
            state.otp=action.payload;
        },
        timeDecay(state){
            state.timeLeft = state.timeLeft-1;
        },
        timeReset(state){
            state.timeLeft = "5";
        }
    }
}
)

export const otpActions = otpSlice.actions;

export default otpSlice;
