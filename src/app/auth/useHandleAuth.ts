import { useDispatch } from "react-redux";
import { signIn } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";

export function useHandleAuth() {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleAuth = (login: string) => {
        dispatch(signIn(login));
        alert("Авторизация прошла успешно\n Вы вошли в профиль");
        // router.push("/main");
    };

    return handleAuth;
}
