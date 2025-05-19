"use server";

import axios from "axios";

export async function getToken() {
    try {
        const response = await axios.get(
            "https://test-music-app.ru/music_web-app_backend/API/csrf.php"
        );

        const data = response.data;
        if (!data.success) {
            throw new Error(data.error || "Ошибка регистрации");
        }
        return data;
    } catch (error) {
        throw new Error(
            error instanceof Error
                ? error.message
                : "Ошибка подключения к серверу"
        );
    }
}