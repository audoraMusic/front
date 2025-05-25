"use client";

import { PlayerContext as PlayerContextProvider } from ".";
import { useState } from "react";
import { onlyChild } from "@/commonInterfaces/commonInterfaces";

export function PlayerContext({ children }: onlyChild) {
    const [musicPlaying, setIsPlaying] = useState({ isPlaying: false });

    function toggleStatus(): void {
        setIsPlaying((prev) => ({ isPlaying: !prev.isPlaying }));
    }

    return (
        <PlayerContextProvider
            value={{ isPlaying: musicPlaying.isPlaying, toggleStatus }}
        >
            {children}
        </PlayerContextProvider>
    );
}
