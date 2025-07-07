import { PlaylistsContent } from "./PlaylistsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Плейлисты",
    description: "Страница плейлистов",
};

export default function PlaylistsPage() {
    return <PlaylistsContent />;
}
