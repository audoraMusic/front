"use client";

import styles from "./Auth.module.scss";
import { Button } from "@/components/Button/Button";
import { useActionState, useState, useEffect, useTransition } from "react";
import { postAuthData } from "@/actions/postAuthData";
import { getToken } from "@/actions/getToken";

export interface FormState {
    login: string;
    mail: string;
    password: string;
    error?: string | null;
}

export default function Auth() {
    const [csrfToken, setCsrfToken] = useState<string | null>(null);
    const [, startTransition] = useTransition();

    // Получаем CSRF-токен при загрузке компонента
    useEffect(() => {
        startTransition(async () => {
            try {
                const data = await getToken(); 
                setCsrfToken(data.csrf_token);
            } catch (error) {
                console.error(
                    "Ошибка при получении CSRF-токена:",
                    error.message
                );
            }
        });
    }, []);

    const [state, action, isPending] = useActionState(
        (prevState: FormState, formData: FormData) =>
            addUser(prevState, formData, csrfToken),
        {
            login: "",
            mail: "",
            password: "",
            error: null,
        }
    );

    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <div className={styles.wrapper}>
                <form className={styles.formProps} action={action}>
                    <label>Логин</label>
                    <input
                        name="login"
                        placeholder="McPotato24"
                        className={styles.inputProps}
                        defaultValue={state.login}
                    />
                    <label>Почта</label>
                    <input
                        name="mail"
                        placeholder="user@gmail.com"
                        className={styles.inputProps}
                        defaultValue={state.mail}
                    />
                    <label>Пароль</label>
                    <input
                        name="password"
                        placeholder="не менее 8 символов"
                        type="password"
                        className={styles.inputProps}
                        defaultValue={state.password}
                    />
                    {state.error && (
                        <p className={styles.error}>{state.error}</p>
                    )}
                    <Button disabled={isPending || !csrfToken}>
                        {isPending ? "Отправка..." : "Отправить"}
                    </Button>
                </form>
            </div>
        </div>
    );
}

async function addUser(
    prevState: FormState,
    formData: FormData,
    csrfToken: string | null
): Promise<FormState> {
    const login = formData.get("login") as string;
    const mail = formData.get("mail") as string;
    const password = formData.get("password") as string;

    if (!csrfToken) {
        return {
            login,
            mail,
            password,
            error: "CSRF-токен не получен",
        };
    }

    console.log("Отправляемые данные:", {
        login,
        mail,
        password,
        csrf_token: csrfToken,
    });

    try {
        const response = await postAuthData({ login, mail, password, csrfToken });

        console.log("Ответ от сервера:", response);
        return { login, mail, password, error: null };
    } catch (error) {
        
        return {
            login,
            mail,
            password,
            error:
                "Ошибка при регистрации: " +
                (error instanceof Error ? error.message : "Неизвестная ошибка"),
        };
    }
}
