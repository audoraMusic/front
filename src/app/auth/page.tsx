"use client";

import styles from "./Auth.module.scss";
import { Button } from "@/components/Button/Button";
import { useState, useEffect } from "react";
import { getCsrfToken } from "@/actions/getToken";
import { postAuthData } from "@/actions/postAuthData";

export default function Auth() {
    const [login, setLogin] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [csrfToken, setCsrfToken] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isPending, setIsPending] = useState(false);

    // Получаем CSRF-токен при монтировании
    useEffect(() => {
        async function fetchToken() {
            try {
                const token = await getCsrfToken(); // получаем напрямую
                setCsrfToken(token);
            } catch (err) {
                console.error("Не удалось получить CSRF-токен:", err);
            }
        }

        fetchToken();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!csrfToken) {
            setError("CSRF-токен не получен");
            return;
        }

        setIsPending(true);
        setError(null);

        try {
            const result = await postAuthData({
                login,
                mail,
                password,
                csrf_token: csrfToken
            });

            if (result.success) {
                alert("✅ Регистрация успешна!");
                window.location.href = "/login";
            } else {
                setError(result.error || "Ошибка регистрации");
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Ошибка регистрации");
        } finally {
            setIsPending(false);
        }
    };

    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <div className={styles.wrapper}>
                <form className={styles.formProps} onSubmit={handleSubmit}>
                    <label>Логин</label>
                    <input
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        placeholder="McPotato24"
                        className={styles.inputProps}
                    />

                    <label>Почта</label>
                    <input
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        placeholder="user@gmail.com"
                        className={styles.inputProps}
                    />

                    <label>Пароль</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="не менее 8 символов"
                        type="password"
                        className={styles.inputProps}
                    />

                    {error && <p className={styles.error}>{error}</p>}
                    
                    <Button disabled={!csrfToken}>
                        {isPending ? "Отправка..." : "Зарегистрироваться"}
                    </Button>
                </form>
            </div>
        </div>
    );
}