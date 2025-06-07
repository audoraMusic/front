import { settings } from "./settings";
import Slider from "react-slick";
import styles from "../../../app/main/Main.module.scss";
import classNames from "classnames";
import { SliderItem } from "./SliderItem";
import { mockCards } from "./mockCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { playOff, playOn } from "@/redux/slices/playerSlice";
import { RootState } from "@/redux/store";

export function MainSlider() {
    const isPlaying = useSelector((state: RootState) => state.player.value)
    const dispatch = useDispatch();

    return (
        <Slider {...settings} className={classNames("mb-4", styles.slider)}>
            {mockCards.map((songCard, index) => (
                <SliderItem
                    key={index}
                    newSongCard={songCard}
                    externalStyles={styles}
                    toggleStatus={() => dispatch(isPlaying ? playOff() : playOn())}
                />
            ))}
        </Slider>
    );
}
