"use client";

import { Button } from "@/components/Button/Button";
import styles from "./Main.module.scss";

export default function Main() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Главная страница</h1>
            <div className={styles.wrapper}>
                <Button externalClassnames={styles.button}>Мне нравится</Button>
                <Button externalClassnames={styles.button}>История</Button>
            </div>
            <div className={styles.tracks}>
                <div className={styles.trackCard}>
                    <span className={styles.trackArtist}>Artist name</span>
                    <span className={styles.trackName}>
                        Song name album/single
                    </span>
                    <span className={styles.trackData}>data</span>
                    <button className={styles.playButton}></button>
                </div>
                <div className={styles.trackCard}>
                    <span className={styles.trackArtist}>Artist name</span>
                    <span className={styles.trackName}>
                        Song name album/single
                    </span>
                    <span className={styles.trackData}>data</span>
                    <button className={styles.playButton}></button>
                </div>
                <div className={styles.trackCard}>
                    <span className={styles.trackArtist}>Artist name</span>
                    <span className={styles.trackName}>
                        Song name album/single
                    </span>
                    <span className={styles.trackData}>data</span>
                    <button className={styles.playButton}></button>
                </div>
                <div className={styles.trackCard}>
                    <span className={styles.trackArtist}>Artist name</span>
                    <span className={styles.trackName}>
                        Song name album/single
                    </span>
                    <span className={styles.trackData}>data</span>
                    <button className={styles.playButton}></button>
                </div>
            </div>
            <div className={styles.player}>
                <span className={styles.playerText}>
                    прогрыватеть (появляться во время прогрывания)
                </span>
                <button className={styles.controlButton}></button>
                <button className={styles.controlButton}>||</button>
                <button className={styles.controlButton}></button>
                <span className={styles.userName}>user name</span>
                <span className={styles.logout}>Выйти</span>
            </div>
        </div>
    );
}
