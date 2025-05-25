"use client";

import { PlayerContext as PlayerContextProvider } from ".";
import { useState } from "react";
import { onlyChild } from "@/commonInterfaces/commonInterfaces";



export function PlayerContext({ children }: onlyChild) {
    const [musicPlaying, setIsPlaying] = useState({ isPlaying: false });

    function toggleStatus(): void {
        if (!musicPlaying.isPlaying) {
            setIsPlaying({ isPlaying: true });
        } else {
            setIsPlaying({ isPlaying: false });
        }
    }
    return (
        <PlayerContextProvider
            value={{ isPlaying: musicPlaying.isPlaying, toggleStatus }}
        >
            {children}
        </PlayerContextProvider>
    );
}
