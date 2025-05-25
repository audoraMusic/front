import { SideBar } from "./SideBar/SideBar";
import { Player } from "@/pageElements/main/Player/Player";
import { onlyChild } from "../commonInterfaces/commonInterfaces";
import { PlayerContext } from "./PlayerContext/PlayerContext";

export function App({ children }: onlyChild) {
    return (
        <PlayerContext>
            <SideBar>{children}</SideBar>
            <Player />
        </PlayerContext>
    );
}
