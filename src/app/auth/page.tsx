"use client";

import styles from "./Auth.module.scss";
import { Button } from "@/components/Button/Button";
import { useActionState } from "react";
import { postAuthData } from "@/actions/postAuthData";

export interface FormState {
  login: string;
  mail: string;
  password: string;
  error?: string | null;
}

export default function Auth() {
  const [state, action, isPending] = useActionState(addUser, {
    login: "",
    mail: "",
    password: "",
    error: null,
  });

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
          {state.error && <p className={styles.error}>{state.error}</p>}
          <Button disabled={isPending}>
            {isPending ? "Отправка..." : "Отправить"}
          </Button>
        </form>
      </div>
    </div>
  );
}

async function addUser(prevState: FormState, formData: FormData): Promise<FormState> {
  const login = formData.get("login") as string;
  const mail = formData.get("mail") as string;
  const password = formData.get("password") as string;

  try {
    await postAuthData({ login, mail, password });
    return { login, mail, password, error: null };
  } catch (error) {
    return { login, mail, password, error: "Ошибка при регистрации: " + (error instanceof Error ? error.message : "Неизвестная ошибка") };
  }
}