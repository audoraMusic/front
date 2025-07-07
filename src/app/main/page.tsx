import { Metadata } from "next";
import { MainContent } from "./MainContent";

export const metadata: Metadata = {
    title: 'Главная',
    description: 'Главная страница с новинками любимых исполнителей'
}

export default function MainPage() {
    return <MainContent />
}
