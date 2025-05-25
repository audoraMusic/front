"use client";

import { createContext } from "react";

export const PlayerContext = createContext({
    isPlaying: false,
    toggleStatus: () => {},
});
