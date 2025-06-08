import { MyButton } from "@/components/Button/MyButton";
import { buttonTypes } from "@/components/Button/MyButton";

export function RegButton({ children, disabled, type }: buttonTypes) {
    return (
        <MyButton
            disabled={disabled}
            type={type}
        >
            {children}
        </MyButton>
    );
}
