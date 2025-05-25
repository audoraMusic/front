import { settings } from "./settings";
import Slider from "react-slick";
import { Button, Card } from "react-bootstrap";
import styles from "../../../app/main/Main.module.scss";
import classNames from "classnames";
import { useContext } from "react";
import { PlayerContext } from "@/components/PlayerContext";

export function MainSlider() {
    const { toggleStatus } = useContext(PlayerContext);

    return (
        <Slider {...settings} className={classNames("mb-4", styles.slider)}>
            {[...Array(10)].map((_, index) => (
                <div key={index} className="px-2">
                    <Card className="bg-secondary text-white border-0 rounded">
                        <Card.Body className="d-flex flex-column gap-3 justify-content-between align-items-center p-3">
                            <span>Artist name {index}</span>
                            <span>Song name album/single</span>
                            <span>data</span>
                            <Button className={styles.playButton} onClick={toggleStatus}>►</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </Slider>
    );
}
