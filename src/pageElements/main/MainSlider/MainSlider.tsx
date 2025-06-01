import { settings } from "./settings";
import Slider from "react-slick";
import styles from "../../../app/main/Main.module.scss";
import classNames from "classnames";
import { useContext } from "react";
import { PlayerContext } from "@/components/PlayerContext";
import { SliderItem } from "./SliderItem";
import { mockCards } from "./mockCard";

export function MainSlider() {
    const { toggleStatus } = useContext(PlayerContext);

    return (
        <Slider {...settings} className={classNames("mb-4", styles.slider)}>
            {mockCards.map((songCard, index) => (
                <SliderItem
                    key={index}
                    newSongCard={songCard}
                    externalStyles={styles}
                    toggleStatus={toggleStatus}
                />
            ))}
        </Slider>
    );
}
