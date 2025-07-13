import { SideBar } from "./SideBar/SideBar";
import { Player } from "@/pageElements/main/Player/Player";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ReactNode } from "react";

export function AppContent({ children }: { children: ReactNode}) {
    const isPlaingNow = useSelector((state: RootState) => state.player.value);

    return (
        <>
            <SideBar>{children}</SideBar>
            {isPlaingNow && <Player trackUrl="/chikoi.mp3" />}
        </>
    );
}
