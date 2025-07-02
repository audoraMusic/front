"use client";

import { PlayerContext as PlayerContextProvider } from ".";
import { ReactNode, useState } from "react";

export function PlayerContext({ children }: { children: ReactNode}) {
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
