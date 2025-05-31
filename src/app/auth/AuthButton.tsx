import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { signIn, signOut } from "@/redux/slices/authSlice";
import type { RootState } from "../../redux/store";

export function AuthButton() { // Имя компонента с заглавной буквы (React-конвенция)
  const isAuthenticated = useSelector((state: RootState) => state.auth.value);
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(isAuthenticated ? signOut() : signIn())}
      variant={isAuthenticated ? "danger" : "primary"}
    >
      {isAuthenticated ? "Fake auth:Sign Out" : "Fake auth: Sign In"}
    </Button>
  );
}