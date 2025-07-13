import Image from "next/image";
import StopIcon from "../../../public/stop.svg";
import LeftArrow from "../../../public/lArrow.svg";
import RightArrow from "../../../public/rArrow.svg";
import { Button } from "react-bootstrap";
import styles from "./Player.module.scss"

export function ControlPanel() {
    return (
        <div className={styles.panel}>
            <Button variant="secondary" className="mx-1 py-1 px-2 rounded">
                <Image src={LeftArrow} alt="stop" width={60} height={60} priority />
            </Button>
            <Button variant="secondary" className="mx-1 py-1 px-2 rounded">
                <Image src={StopIcon} alt="stop" width={60} height={60} priority />
            </Button>
            <Button variant="secondary" className="mx-1 py-1 px-2 rounded">
                <Image src={RightArrow} alt="stop" width={60} height={60} priority />
            </Button>
        </div>
    );
}
