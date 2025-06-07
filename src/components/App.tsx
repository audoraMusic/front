"use client";

import { onlyChild } from "../commonInterfaces/commonInterfaces";
import { PlayerContext } from "./PlayerContext/PlayerContext";
import { AppContent } from "./AppContent";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export function App({ children }: onlyChild) {
    return (
        <Provider store={store}>
            <PlayerContext>
                <AppContent>{children}</AppContent>
            </PlayerContext>
        </Provider>
    );
}
