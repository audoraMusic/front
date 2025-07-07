import { Metadata } from "next";
import { TrendesContent } from "./TrendesContent";

export const metadata: Metadata = {
    title: 'Тренды', 
    description: 'Страница трендов'
}

export default function TrendesPage() {
    return (
        <TrendesContent />
    );
}
