import { onlyChild } from "../commonInterfaces/commonInterfaces";
import { SideBar } from "./SideBar/SideBar";
import { Player } from "@/pageElements/main/Player/Player";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export function AppContent({ children }: onlyChild) {
    const isPlaingNow = useSelector((state: RootState) => state.player.value);

    return (
        <>
            <SideBar>{children}</SideBar>
            {isPlaingNow && <Player />}
        </>
    );
}
