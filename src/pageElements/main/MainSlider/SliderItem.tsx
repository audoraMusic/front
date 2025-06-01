import { Button, Card } from "react-bootstrap";

interface Song {
  artist: string;
  songName: string;
  date: string;
}

interface SliderTypes {
    newSongCard: Song,
    externalStyles: { playButton?: string },
    toggleStatus: () => void
}

export function SliderItem({ newSongCard, externalStyles, toggleStatus }: SliderTypes) {
    return (
        <div className="px-2">
            <Card className="bg-secondary text-white border-0 rounded">
                <Card.Body className="d-flex flex-column gap-3 justify-content-between align-items-center p-3">
                    <span>{newSongCard.artist}</span>
                    <span>{newSongCard.songName}</span>
                    <span>{newSongCard.date}</span>
                    <Button
                        className={externalStyles.playButton}
                        onClick={toggleStatus}
                    >
                        ►
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}
