"use client";

import styles from "./Auth.module.scss";
import { MyButton } from "@/components/Button/Button";
import { useActionState, useState, useEffect, useTransition } from "react";
import { getToken } from "@/actions/getToken";
import { addUser } from "@/app/auth/addUser"

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
                    <MyButton disabled={isPending || !csrfToken}>
                        {isPending ? "Отправка..." : "Отправить"}
                    </MyButton>
                </form>
            </div>
        </div>
    );
}

