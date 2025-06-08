import { useRouter } from "next/navigation";

export function useHandleReg() {
    const router = useRouter();

    const handleReg = () => {
        alert("Регистрация прошла успешно\n Осталось авторизоваться");
        router.push("/auth");
    };

    return handleReg;
}
