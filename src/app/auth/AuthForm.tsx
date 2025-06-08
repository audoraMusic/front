import { AuthButton } from "./AuthButton";
import { AuthFormProps } from "@/commonInterfaces/formInterfaces";

export function AuthForm({ styles, state, action, isPending, csrfToken }: AuthFormProps) {
    return (
        <form className={styles.formProps} action={action}>
            <label>Логин</label>
            <input
                name="login"
                placeholder="McPotato24"
                className={styles.inputProps}
                defaultValue={state.login}
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
            <AuthButton
                disabled={isPending || !csrfToken}
                externalClassname="tiny"
                type="submit"
            >
                {isPending ? "Отправка..." : "Зарегистрироваться"}
            </AuthButton>
        </form>
    );
}
