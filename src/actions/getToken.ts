// "use server";

import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export async function getToken() {
    try {
        if (!process.env.NEXT_PUBLIC_LOCALTOKENPATH) {
            throw new Error(
                "LOCALREGPATH is not defined in the environment variables"
            );
        }

        const response = await axios.get(
            process.env.NEXT_PUBLIC_LOCALTOKENPATH,
            { withCredentials: true }
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
