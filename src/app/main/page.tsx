"use client";

import { Container, Row, Col, Button, Card, Navbar } from "react-bootstrap";
import styles from "./Main.module.scss";

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

            {/* Треки */}
            <Row className="g-5">
                {[...Array(4)].map((_, index) => (
                    <Col key={index} xs={12} sm={6} md={3}>
                        <Card className="bg-secondary text-white border-0 rounded">
                            <Card.Body className="d-flex flex-column gap-3 justify-content-between align-items-center p-3">
                                <span>Artist name</span>
                                <span>Song name album/single</span>
                                <span>data</span>
                                <Button className={styles.playButton}>►</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Плеер */}
            <Navbar
                fixed="bottom"
                bg="secondary"
                className="d-flex justify-content-between align-items-center px-3 py-2 rounded-top"
            >
                <span className={styles.playerText}>
                    прогрыватеть (появляться во время прогрывания)
                </span>
                <div>
                    <Button
                        variant="secondary"
                        className="mx-1 py-1 px-2 rounded"
                    >
                        ◄
                    </Button>
                    <Button
                        variant="secondary"
                        className="mx-1 py-1 px-2 rounded"
                    >
                        ||
                    </Button>
                    <Button
                        variant="secondary"
                        className="mx-1 py-1 px-2 rounded"
                    >
                        ►
                    </Button>
                </div>
                <div>
                    <span className={styles.userName}>user name</span>
                    <span className={styles.logout}>Выйти</span>
                </div>
            </Navbar>
        </Container>
    );
}
