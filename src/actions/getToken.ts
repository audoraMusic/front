// "use server";

import axios from "axios";
import { ENVIRONMENT, REMOTE_TOKEN_PATH, LOCAL_TOKEN_PATH } from "@/envVars";

export async function getToken() {
    try {
        let authPath: string;

        if (ENVIRONMENT === "local") {
            if (!LOCAL_TOKEN_PATH) {
                throw new Error("NEXT_PUBLIC_LOCALREGPATH is not defined");
            }
            authPath = LOCAL_TOKEN_PATH;
        } else {
            if (!REMOTE_TOKEN_PATH) {
                throw new Error("NEXT_PUBLIC_LOCALREGPATH is not defined");
            }
            authPath = REMOTE_TOKEN_PATH;
        }

        const response = await axios.get(authPath, {
            withCredentials: true,
        });

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
