import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "react-bootstrap";
import { ButtonVariant } from "react-bootstrap/esm/types";

interface TabLinkProps {
    to: string;
    children: ReactNode;
    externalClassnames?: string;
    size?: "sm" | "lg";
    variant?: ButtonVariant;
}

export function TabLink({
    to,
    children,
    externalClassnames,
    size,
    variant,
}: TabLinkProps) {
    return (
        <Link href={to} prefetch>
            <Button
                size={size}
                variant={variant}
                className={externalClassnames}
            >
                {children}
            </Button>
        </Link>
    );
}
