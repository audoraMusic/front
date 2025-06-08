import { getToken } from "@/actions/getToken";
import { useState, useEffect, useTransition } from "react";

export function useHandleGetToken() {
    const [csrfToken, setCsrfToken] = useState<string | null>(null);
    const [, startTransition] = useTransition();

    // Получаем CSRF-токен при загрузке компонента
    useEffect(() => {
        startTransition(async () => {
            try {
                const data = await getToken();
                setCsrfToken(data.csrf_token);
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (error: any) {
                console.error(
                    "Ошибка при получении CSRF-токена:",
                    error.message
                );
            }
        });
    }, []);

    return csrfToken
}
