import styles from "./Player.module.scss";
import { ReactNode } from "react";
import { useRef } from "react";

interface ProgressBarProps {
    children: ReactNode;
    duration: number;
    currentTime: number;
    onSeek: (time: number) => void;
}

export function ProgressBar({
    children,
    duration,
    currentTime,
    onSeek,
}: ProgressBarProps) {
    const barRef = useRef<HTMLDivElement>(null);

    const progress = duration ? (currentTime / duration) * 100 : 0;

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!barRef.current) return;

        const rect = barRef.current.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;

        const percent = clickX / width;
        const newTime = duration * percent;

        onSeek(newTime);
    };

    return (
        <div ref={barRef} className={styles.bar} onClick={handleClick}>
            <div
                className={styles.progressLine}
                style={{ width: `${progress}%` }}
            />
            <div className={styles.panelInProgress}>{children}</div>
        </div>
    );
}
