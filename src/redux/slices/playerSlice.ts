import { createSlice } from "@reduxjs/toolkit";
import { BoolState } from "./sliceInterfaces";

const initialState: BoolState = {
    value: false,
};

export const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        playOn: (state) => {
            state.value = true;
        },
        playOff: (state) => {
            state.value = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { playOn, playOff } = playerSlice.actions;

export default playerSlice.reducer;
