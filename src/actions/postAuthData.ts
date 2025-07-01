// "use server";

import axios from "axios";
import { ENVIRONMENT, LOCAL_AUTH_PATH, REMOTE_AUTH_PATH } from "@/envVars";

interface AuthDataTypes {
    login: string;
    password: string;
    csrfToken: string;
}

export async function postAuthData({
    login,
    password,
    csrfToken,
}: AuthDataTypes) {
    try {
        let authPath: string;

        if (ENVIRONMENT === "local") {
            if (!LOCAL_AUTH_PATH) {
                throw new Error("NEXT_PUBLIC_LOCAL_AUTH_PATH is not defined");
            }
            authPath = LOCAL_AUTH_PATH;
        } else {
            if (!REMOTE_AUTH_PATH) {
                throw new Error("NEXT_PUBLIC_REMOTE_AUTH_PATH is not defined");
            }
            authPath = REMOTE_AUTH_PATH;
        }
        console.log("Отправляемый CSRF-токен:", csrfToken);
        const response = await axios.post(
            authPath,
            {
                login,
                password,
                csrf_token: csrfToken,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    // "X-CSRF-Token": csrfToken,
                },
                withCredentials: true,
            }
        );

        const data = response.data;
        console.log("Ответ сервера:", data);
        if (!data.success) {
            return {
                success: false,
                error: data.error || "Ошибка регистрации",
            };
        }
        return { success: true, data };
    } catch (error) {
        // Логируем ошибку без условий, чтобы точно увидеть, что происходит
        console.log("Произошла ошибка в postAuthData:");
        // console.error("Полная информация об ошибке:", error);

        // // Проверяем, является ли ошибка Axios-ошибкой
        // if (axios.isAxiosError(error)) {
        //     console.error("Это Axios-ошибка:");
        //     console.error("Статус ошибки:", error.response?.status);
        //     console.error("Тело ошибки от сервера:", error.response?.data);
        //     console.error("Заголовки ответа:", error.response?.headers);
        // } else {
        //     console.error("Это не Axios-ошибка, тип ошибки:", typeof error);
        // }
        // throw new Error(
        //     error instanceof Error
        //         ? error.message
        //         : "Ошибка подключения к серверу"
        // );
        return {
            success: false,
            error:
                error instanceof Error
                    ? error.message
                    : "Ошибка подключения к серверу",
        };
    }
}
