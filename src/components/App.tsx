"use client";

import { onlyChild } from "../commonInterfaces/commonInterfaces";
import { PlayerContext } from "./PlayerContext/PlayerContext";
import { PlayerContext as PlayerVars } from "./PlayerContext";
import { useContext } from "react";
import { AppContent } from "./AppContent";

export function App({ children }: onlyChild) {
    const { isPlaying } = useContext(PlayerVars);
    console.log('isPlaying', isPlaying);

    return (
        <PlayerContext>
            <AppContent>{children}</AppContent>
        </PlayerContext>
    );
}
