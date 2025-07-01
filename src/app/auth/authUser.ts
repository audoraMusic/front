import { postAuthData } from "../../actions/postAuthData";
import { FormState } from "@/commonInterfaces/formInterfaces";

export async function authUser(
    prevState: FormState,
    formData: FormData,
    csrfToken: string | null
): Promise<FormState> {
    const login = formData.get("login") as string;
    const password = formData.get("password") as string;

    if (!csrfToken) {
        return {
            login,
            password,
            error: "CSRF-токен не получен",
        };
    }

    console.log("Отправляемые данные при авторизации:", {
        login,
        password,
        csrf_token: csrfToken,
    });

    try {
        const response = await postAuthData({
            login,
            password,
            csrfToken,
        });

        console.log("Ответ от сервера:", response);
        return { login, password, error: null, response };
    } catch (error) {
        return {
            login,
            password,
            error:
                "Ошибка при авторизации: " +
                (error instanceof Error ? error.message : "Неизвестная ошибка"),
            response: { success: false },
        };
    }
}
