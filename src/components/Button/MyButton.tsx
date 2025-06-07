import styles from "./MyButton.module.scss";
import { ReactNode, MouseEventHandler } from "react";
import { Button } from "react-bootstrap";

export interface buttonTypes {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    variant?: string;
    size?: "sm" | "lg";
    type?: "button" | "submit" | "reset";
    externalClassname?: keyof typeof styles;
}

export function MyButton({
    children,
    onClick,
    disabled,
    variant = "outline-light",
    size = "sm",
    type = "button",
    externalClassname = "normal",
}: buttonTypes) {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            variant={variant}
            size={size}
            type={type}
            className={styles[externalClassname]}
        >
            {children}
        </Button>
    );
}
