// src/actions/getToken.ts
import axios from "axios";

export async function getCsrfToken() {
  try {
    const response = await axios.get(
      "https://test-music-app.ru/music_web-app_backend/API/csrf.php", 
      {
        withCredentials: true // ⚠️ Это важно для PHPSESSID\
      }
    );

    if (!response.data.csrf_token) {
      throw new Error("Не удалось получить CSRF-токен");
    }

    return response.data.csrf_token;
  } catch (error) {
    console.error("Ошибка получения токена:", error);
    throw new Error("Не удалось получить CSRF-токен");
  }
}