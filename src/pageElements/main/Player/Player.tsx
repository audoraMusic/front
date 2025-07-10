import { Navbar } from "react-bootstrap";
import { ControlPanel } from "./ControlPanel"
import styles from "../../../app/main/Main.module.scss";

export function Player() {
    return (
        <Navbar
            fixed="bottom"
            bg="secondary"
            className="d-flex justify-content-between align-items-center px-3 py-2 rounded-top"
        >
            
            <ControlPanel />
        </Navbar>
    );
}
