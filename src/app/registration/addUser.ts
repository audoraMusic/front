import { postRegData } from "@/actions/postRegData";
import { FormState } from "@/commonInterfaces/formInterfaces";

export async function addUser(
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

    console.log("Отправляемые данные при регистрации:", {
        login,
        mail,
        password,
        csrf_token: csrfToken,
    });

    try {
        const response = await postRegData({
            login,
            mail,
            password,
            csrfToken,
        });

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
