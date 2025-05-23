"use client";

import { Container } from "react-bootstrap";
import { Player } from "@/pageElements/main/Player/Player";

export default function PlaylistsPage() {
    return (
        <Container fluid className="py-5 text-white min-vh-100">
            <h1 className="mb-4 fs-3">Плейлисты</h1>
            <Player />
        </Container>
    );
}
