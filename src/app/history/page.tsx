import { Metadata } from "next";
import { HistoryContent } from "./HistoryContent";

export const metadata: Metadata = {
    title: 'История',
    description: 'Страница с историй прослушиваний'
}

export default function HistoryPage() {
    return (
        <HistoryContent />
    );
}
