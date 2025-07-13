import styles from "./Player.module.scss";

export function VolumeControl({
    audioRef,
}: {
    audioRef: React.RefObject<HTMLAudioElement | null>;
}) {
    return (
        <input
            className={styles.volumeControl}
            type="range"
            min="0"
            max="1"
            step="0.01"
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onChange={(e) => {
                if (audioRef.current) {
                    audioRef.current.volume = parseFloat(e.target.value);
                }
            }}
        />
    );
}
