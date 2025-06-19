// "use server";

import axios from "axios";
import {
    ENVIRONMENT,
    LOCAL_REG_PATH,
    REMOTE_REG_PATH
} from "@/envVars";

interface RegDataTypes {
    login: string;
    mail: string;
    password: string;
    csrfToken: string;
}

export async function postRegData({
    login,
    mail,
    password,
    csrfToken,
}: RegDataTypes) {
    try {
        let registrationPath: string;

        if (ENVIRONMENT === "local") {
            if (!LOCAL_REG_PATH) {
                throw new Error("NEXT_PUBLIC_LOCAL_REG_PATH is not defined");
            }
            registrationPath = LOCAL_REG_PATH;
        } else {
            if (!REMOTE_REG_PATH) {
                throw new Error("NEXT_PUBLIC_REMOTE_REG_PATH is not defined");
            }
            registrationPath = REMOTE_REG_PATH;
        }
        console.log("Отправляемый CSRF-токен:", csrfToken);
        const response = await axios.post(
            registrationPath,
            {
                login,
                mail,
                password,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-Token": csrfToken,
                },
                withCredentials: true,
            }
        );

        const data = response.data;
        console.log("Ответ сервера:", data);
        if (!data.success) {
            throw new Error(data.error || "Ошибка регистрации");
        }
        return data;
    } catch (error) {
        // Логируем ошибку без условий, чтобы точно увидеть, что происходит
        console.log("Произошла ошибка в postAuthData:");
        console.error("Полная информация об ошибке:", error);

        // Проверяем, является ли ошибка Axios-ошибкой
        if (axios.isAxiosError(error)) {
            console.error("Это Axios-ошибка:");
            console.error("Статус ошибки:", error.response?.status);
            console.error("Тело ошибки от сервера:", error.response?.data);
            console.error("Заголовки ответа:", error.response?.headers);
        } else {
            console.error("Это не Axios-ошибка, тип ошибки:", typeof error);
        }
        throw new Error(
            error instanceof Error
                ? error.message
                : "Ошибка подключения к серверу"
        );
    }
}
