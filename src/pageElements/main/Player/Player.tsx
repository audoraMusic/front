import { Navbar } from "react-bootstrap";
import { ControlPanel } from "./ControlPanel";
import styles from "./Player.module.scss";
import { ProgressBar } from "./ProgressBar";
import { useState, useEffect, useRef } from "react";
import { VolumeControl } from "./VolumeControl";

export function Player({ trackUrl }: { trackUrl: string }) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleLoadedMetadata = () => setDuration(audio.duration);
        const handleTimeUpdate = () => setCurrentTime(audio.currentTime);

        audio.addEventListener("loadedmetadata", handleLoadedMetadata);
        audio.addEventListener("timeupdate", handleTimeUpdate);

        audio.load();

        return () => {
            audio.pause();
            audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
            audio.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, [trackUrl]);

    const handleSeek = (time: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime = time;
        }
    };

    return (
        <Navbar
            fixed="bottom"
            bg="secondary"
            className={`${styles.player} d-flex justify-content-between align-items-center rounded`}
        >
            <audio ref={audioRef} src={trackUrl} />
            <ProgressBar
                duration={duration}
                currentTime={currentTime}
                onSeek={handleSeek}
            >
                <ControlPanel audioRef={audioRef} />
                <VolumeControl audioRef={audioRef} />
            </ProgressBar>
        </Navbar>
    );
}
