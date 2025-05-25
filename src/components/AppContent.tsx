import { onlyChild } from "../commonInterfaces/commonInterfaces";
import { useContext } from "react";
import { PlayerContext } from "./PlayerContext";
import { SideBar } from "./SideBar/SideBar";
import { Player } from "@/pageElements/main/Player/Player";

export function AppContent({ children }: onlyChild) {
    const { isPlaying } = useContext(PlayerContext); // ✅ Теперь контекст доступен
    console.log('isPlaying', isPlaying);
    
    return (
        <>
            <SideBar>{children}</SideBar>
            {isPlaying && <Player />}
        </>
    );
}