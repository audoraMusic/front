import classNames from "classnames";
import styles from "./Button.module.scss";
import { ReactNode, MouseEventHandler } from "react";

interface buttonTypes {
    children: ReactNode;
    externalClassnames?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    formAction?: string | ((formData: FormData) => void | Promise<void>) | undefined;
    disabled?: boolean;
}

export function Button({
    children,
    externalClassnames,
    onClick,
    formAction,
    disabled
}: buttonTypes) {
    return (
        <button
            className={classNames(externalClassnames, styles.button)}
            onClick={onClick}
            formAction={formAction}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
