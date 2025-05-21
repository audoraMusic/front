"use client";

import { Container, Button } from "react-bootstrap";
import { MainSlider } from "@/pageElements/main/MainSlider/MainSlider";
import { Player } from "@/pageElements/main/Player/Player";

export default function Main() {
    return (
        <Container fluid className="py-5 text-white min-vh-100">
            <h1 className="mb-4 fs-3">Главная страница</h1>
            <div className="d-flex justify-content-center gap-3 mb-4">
                <Button
                    className="px-4 py-2 bg-secondary text-white border-0 rounded"
                    variant="secondary"
                >
                    Мне нравится
                </Button>
                <Button
                    className="px-4 py-2 bg-secondary text-white border-0 rounded"
                    variant="secondary"
                >
                    История
                </Button>
            </div>
            <MainSlider />
            <Player />
        </Container>
    );
}
