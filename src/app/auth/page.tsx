"use client";

import styles from "./Auth.module.scss";
import { useActionState } from "react";
import { addUser } from "@/app/auth/addUser";
import { AuthButton } from "./AuthButton";
import { useHandleGetToken } from "./useHandleGetToken";

export interface FormState {
    login: string;
    mail: string;
    password: string;
    error?: string | null;
}

export default function AuthPage() {
    const csrfToken = useHandleGetToken();

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
                    <AuthButton
                        disabled={isPending || !csrfToken}
                        externalClassname="tiny"
                        type="submit"
                    >
                        {isPending ? "Отправка..." : "Зарегистрироваться"}
                    </AuthButton>
                </form>
            </div>
        </div>
    );
}
