import { Button, Navbar } from "react-bootstrap";
import styles from "../../../app/main/Main.module.scss";

export function Player() {
    return (
        <Navbar
            fixed="bottom"
            bg="secondary"
            className="d-flex justify-content-between align-items-center px-3 py-2 rounded-top"
        >
            <span className={styles.playerText}>
                прогрыватеть (появляться во время прогрывания)
            </span>
            <div>
                <Button variant="secondary" className="mx-1 py-1 px-2 rounded">
                    ◄
                </Button>
                <Button variant="secondary" className="mx-1 py-1 px-2 rounded">
                    ||
                </Button>
                <Button variant="secondary" className="mx-1 py-1 px-2 rounded">
                    ►
                </Button>
            </div>
            <div>
                <span className={styles.userName}>user name</span>
                <span className={styles.logout}>Выйти</span>
            </div>
        </Navbar>
    );
}
