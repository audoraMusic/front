import { settings } from "./settings";
import Slider from "react-slick";
import styles from "../../../app/main/Main.module.scss";
import classNames from "classnames";
import { SliderItem } from "./SliderItem";
import { mockCards } from "./mockCard";
import { useHandlePlay } from "./useHandlePlay";


export function MainSlider() {
    const handlePlay = useHandlePlay();

    return (
        <Slider {...settings} className={classNames("mb-4", styles.slider)}>
            {mockCards.map((songCard, index) => (
                <SliderItem
                    key={index}
                    newSongCard={songCard}
                    externalStyles={styles}
                    toggleStatus={handlePlay}
                />
            ))}
        </Slider>
    );
}
