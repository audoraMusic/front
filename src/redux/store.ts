import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./slices/authSlice";
import playerReducer from "./slices/playerSlice";

const persistConfig = {
    key: "root",
    storage,
};

const rootReducers = combineReducers({
    auth: authReducer,
    player: playerReducer,
});

const persistedReducers = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
    reducer: persistedReducers,
    devTools: {
        trace: true,
        traceLimit: 25,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
