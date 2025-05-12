"use server";

import axios from "axios";

interface AuthDataTypes {
  login: string;
  mail: string;
  password: string;
}

export async function postAuthData({ login, mail, password }: AuthDataTypes) {
  try {
    const response = await axios.post(
      "https://test-music-app.ru/music_web-app_backend/reg.php",
      {
        login,
        mail,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = response.data;
    if (!data.success) {
      throw new Error(data.error || "Ошибка регистрации");
    }
    return data; // Возвращаем результат для обработки в addUser
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Ошибка подключения к серверу"
    );
  }
}