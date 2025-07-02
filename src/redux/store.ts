import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import playerReducer from "./slices/playerSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        player: playerReducer,
    },
    devTools: {
        trace: true, 
        traceLimit: 25,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
