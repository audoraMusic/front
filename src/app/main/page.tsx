"use client";

import { Container } from "react-bootstrap";
import { MainSlider } from "@/pageElements/main/MainSlider/MainSlider";
import { TabLink } from "@/components/TabLink";
import { useContext } from "react";
import { PlayerContext } from "@/components/PlayerContext";

export default function MainPage() {
    const { isPlaying, toggleStatus } = useContext(PlayerContext);
    console.log(isPlaying)

    return (
        <Container fluid className="py-5 text-white min-vh-100">
            <h1 className="mb-4 fs-3">Главная страница</h1>
            <div className="d-flex justify-content-center gap-3 mb-4">
                <TabLink to="/favorities" size="lg" variant="outline-light"
                >
                    Мне нравится
                </TabLink>
                <TabLink to="/history" size="lg" variant="outline-light"
                >
                    История
                </TabLink>
            </div>
            <MainSlider />
        </Container>
    );
}
