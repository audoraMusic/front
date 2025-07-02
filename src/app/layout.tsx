import { geistMono, geistSans } from "./layoutSettings";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { App } from "@/components/App";
import { ReactNode } from "react";


export default function RootLayout({ children }: { children: ReactNode}) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <App>{children}</App>
            </body>
        </html>
    );
}
