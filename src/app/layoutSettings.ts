import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";

export const oswald = Oswald({
    variable: "--font-oswald",
    subsets: ["latin"],
});

export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Audora",
    description: "Music app",
};