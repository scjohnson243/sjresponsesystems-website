import type { Metadata } from "next";
import "./globals.css";
import "@/styles/rebrand.css";
export const metadata: Metadata = { title: "SJ Response Systems | Sentinel Vision", description: "SJ Response Systems is developing Sentinel Vision, a modular computer vision platform for operational intelligence, people and place analytics, and environmental observation." };
export default function RootLayout({children}: Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}