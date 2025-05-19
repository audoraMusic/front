"use server";

import axios from "axios";

interface AuthDataTypes {
  login: string;
  mail: string;
  password: string;
  csrf_token: string;
}

export async function postAuthData({ login, mail, password, csrf_token }: AuthDataTypes) {
  try {
    console.log("Отправляемый CSRF-токен:", csrf_token);
    const response = await axios.post(
      "https://test-music-app.ru/music_web-app_backend/API/reg.php",
      {
        login,
        mail,
        password
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrf_token
        },
      }
    );

    const data = response.data;
    console.log("Ответ сервера:", data);
    if (!data.success) {
      throw new Error(data.error || "Ошибка регистрации");
    }
    return data; 
  } catch (error) {
    console.error("Ошибка в postAuthData:", error);
    throw new Error(
      error instanceof Error ? error.message : "Ошибка подключения к серверу"
    );
  }
}