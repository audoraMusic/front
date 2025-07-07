"use client";

import styles from "./Reg.module.scss";
import { useActionState } from "react";
import { addUser } from "@/app/registration/addUser";
import { RegButton } from "./RegButton";
import { useHandleGetToken } from "./useHandleGetToken";
import { useHandleReg } from "./useHandleReg";
import { FormState } from "@/commonInterfaces/formInterfaces";

export function RegContent() {
    const csrfToken = useHandleGetToken();
    const handleReg = useHandleReg();

    const [state, action, isPending] = useActionState(
        async (prevState: FormState, formData: FormData) => {
            const result = await addUser(prevState, formData, csrfToken);

            if (!result.error) {
                handleReg();
            }

            return result;
        },
        {
            login: "",
            mail: "",
            password: "",
            error: null,
        }
    );

    return (
        <div className={styles.container}>
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
                    <RegButton
                        disabled={isPending || !csrfToken}
                        externalClassname="tiny"
                        type="submit"
                    >
                        {isPending ? "Отправка..." : "Зарегистрироваться"}
                    </RegButton>
                </form>
            </div>
        </div>
    );
}
