import { Metadata } from "next";
import { FavoritesContent } from "./FavoritesContent";

export const metadata: Metadata = {
    title: 'Любимые',
    description: 'Страница любимых песен'
}

export default function FavoritesPage() {
    return (
        <FavoritesContent />
    );
}
