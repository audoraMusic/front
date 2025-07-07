import { Metadata } from "next";
import { AuthContent } from "./AuthContent";

export const metadata: Metadata = {
    title: 'Авторизация',
    description: 'Страница авторизации'
}

export default function AuthPage() {
    return <AuthContent />;
}
