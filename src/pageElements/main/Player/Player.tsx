import { Navbar } from "react-bootstrap";
import { ControlPanel } from "./ControlPanel";
import styles from "./Player.module.scss";
import { ProgressBar } from "./ProgressBar";
import { useState } from "react";

export function Player() {
    const duration = 240;
    const [currentTime, setCurrentTime] = useState(0);

    const handleSeek = (time: number) => {
        console.log("Перематываем на:", time);
        setCurrentTime(time);
    };

    return (
        <Navbar
            fixed="bottom"
            bg="secondary"
            className={`${styles.player} d-flex justify-content-between align-items-center rounded`}
        >
            <ProgressBar
                duration={duration}
                currentTime={currentTime}
                onSeek={handleSeek}
            >
                <ControlPanel />
            </ProgressBar>
        </Navbar>
    );
}
