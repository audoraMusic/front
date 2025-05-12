import Link from "next/link"
import { ReactNode } from 'react';

interface TabLinkProps {
  to: string;
  children: ReactNode;
  externalClassnames?: string;
}

export function TabLink({ to, children, externalClassnames }: TabLinkProps) {
    return <Link href={to} className={externalClassnames}>{children}</Link>
}