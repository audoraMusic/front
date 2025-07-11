import { Navbar } from "react-bootstrap";
import { ControlPanel } from "./ControlPanel"
import styles from "./Player.module.scss";
import { ProgressBar } from "./ProgressBar";

export function Player() {
    return (
        <Navbar
            fixed="bottom"
            bg="secondary"
            className={`${styles.player} d-flex justify-content-between align-items-center rounded`}
        >
            <ProgressBar />
            <ControlPanel />
        </Navbar>
    );
}
