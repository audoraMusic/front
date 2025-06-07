import { useSelector, useDispatch } from "react-redux";
import { signIn, signOut } from "@/redux/slices/authSlice";
import type { RootState } from "../../redux/store";
import { MyButton } from "@/components/Button/MyButton";
import { buttonTypes } from "@/components/Button/MyButton";

export function AuthButton({ children, disabled, type }: buttonTypes) {
    const isAuthenticated = useSelector((state: RootState) => state.auth.value);
    const dispatch = useDispatch();
    return (
        <MyButton
            onClick={() => dispatch(isAuthenticated ? signOut() : signIn())}
            disabled={disabled}
            type={type}
        >
            {children}
        </MyButton>
    );
}
