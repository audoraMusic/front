"use client";

import { onlyChild } from "../commonInterfaces/commonInterfaces";
import { PlayerContext } from "./PlayerContext/PlayerContext";
import { PlayerContext as PlayerVars } from "./PlayerContext";
import { useContext } from "react";
import { AppContent } from "./AppContent";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export function App({ children }: onlyChild) {
    const { isPlaying } = useContext(PlayerVars);
    console.log("isPlaying", isPlaying);

    return (
        <Provider store={store}>
            <PlayerContext>
                <AppContent>{children}</AppContent>
            </PlayerContext>
        </Provider>
    );
}
