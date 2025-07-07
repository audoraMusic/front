import { Metadata } from "next";
import { RegContent } from "./RegContent";

export const metadata: Metadata = {
    title: "Регистрация",
    description: "Страница регистрации",
};

export default function RegPage() {
    return <RegContent />;
}
