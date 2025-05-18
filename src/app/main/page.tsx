"use client";

import { Button } from "@/components/Button/Button";
import styles from "./Main.module.scss";
import { useTransition } from "react";
import { addAuthData } from "@/actions/addAuthData";

export default function Main() {
    const [isPending, startTransition] = useTransition();

    const handleLikeClick = () => {
        startTransition(async () => {
            try {
                const data = await addAuthData(); // Вызываем серверное действие
                console.log("Данные из addAuthData:", data); // Выводим данные в консоль
            } catch (error) {
                console.error("Ошибка при получении данных:", error.message);
            }
        });
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Главная страница</h1>
            <div className={styles.wrapper}>
                <Button
                    externalClassnames={styles.button}
                    onClick={handleLikeClick}
                    disabled={isPending}
                >
                    {isPending ? "Загрузка..." : "Мне нравится"}
                </Button>
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
