"use client";

import { PlayerContext } from "./PlayerContext/PlayerContext";
import { AppContent } from "./AppContent";
import { store, persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ReactNode } from "react";

export function App({ children }: { children: ReactNode }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <PlayerContext>
                    <AppContent>{children}</AppContent>
                </PlayerContext>
            </PersistGate>
        </Provider>
    );
}
