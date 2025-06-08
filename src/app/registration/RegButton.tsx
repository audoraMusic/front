import { MyButton } from "@/components/Button/MyButton";
import { buttonTypes } from "@/components/Button/MyButton";
import { useHandleReg } from "./useHandleReg";

export function RegButton({ children, disabled, type }: buttonTypes) {
    const handleReg = useHandleReg();

    return (
        <MyButton
            onClick={handleReg}
            disabled={disabled}
            type={type}
        >
            {children}
        </MyButton>
    );
}
