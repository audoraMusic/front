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

    const handleMouseDown = () => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!barRef.current) return;
        const rect = barRef.current.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        const newTime = duration * Math.max(0, Math.min(1, percent));
        onSeek(newTime);
    };

    const handleMouseUp = () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
    };

    return (
        <div ref={barRef} className={styles.bar} onMouseDown={handleMouseDown}>
            <div
                className={styles.progressLine}
                style={{ width: `${progress}%` }}
            />
            <div className={styles.panelInProgress}>{children}</div>
        </div>
    );
}
