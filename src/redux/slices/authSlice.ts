import { createSlice } from "@reduxjs/toolkit";
import { BoolState } from "./sliceInterfaces";

const initialState: BoolState = {
    value: false,
    login: undefined,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.value = true;
            state.login = action.payload;
        },
        signOut: (state) => {
            state.value = false;
            state.login = undefined;
        },
    },
});

// Action creators are generated for each case reducer function
export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
