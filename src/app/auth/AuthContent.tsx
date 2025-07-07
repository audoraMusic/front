"use client";

import styles from "./Auth.module.scss";
import { useActionState } from "react";
import { authUser } from "./authUser";
import { useHandleGetToken } from "../registration/useHandleGetToken";
import { AuthForm } from "./AuthForm";
import { FormState } from "@/commonInterfaces/formInterfaces";
import { useHandleAuth } from "./useHandleAuth";

export function AuthContent() {
    const csrfToken = useHandleGetToken();
    const handleAuth = useHandleAuth();

    const [state, action, isPending] = useActionState<FormState, FormData>(
        async (prevState: FormState, formData: FormData) => {
            const result = await authUser(prevState, formData, csrfToken);
            console.log("result;", result);
            if (result.response?.success) {
                handleAuth(result.login);
            } else {
                alert("Неверный логин или пароль");
            }

            return result;
        },
        {
            login: "",
            password: "",
            error: null,
        }
    );

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <AuthForm
                    styles={{
                        formProps: styles.formProps,
                        inputProps: styles.inputProps,
                        error: styles.error,
                    }}
                    state={state}
                    action={action}
                    isPending={isPending}
                    csrfToken={csrfToken}
                />
            </div>
        </div>
    );
}
