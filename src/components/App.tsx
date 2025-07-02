"use client";

import { PlayerContext } from "./PlayerContext/PlayerContext";
import { AppContent } from "./AppContent";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { ReactNode } from "react";

export function App({ children }: { children: ReactNode}) {
    return (
        <Provider store={store}>
            <PlayerContext>
                <AppContent>{children}</AppContent>
            </PlayerContext>
        </Provider>
    );
}
