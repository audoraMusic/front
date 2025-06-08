import { useSelector, useDispatch } from "react-redux";
import { signIn, signOut } from "@/redux/slices/authSlice";
import type { RootState } from "../../redux/store";

export function useHandleReg() {
    const isAuthenticated = useSelector((state: RootState) => state.auth.value);
    const dispatch = useDispatch();

    const handleReg = () => {
        dispatch(isAuthenticated ? signOut() : signIn());
        alert('Регистрация прошла успешно\n Остлось авторизоваться');
    }

    return handleReg;
}