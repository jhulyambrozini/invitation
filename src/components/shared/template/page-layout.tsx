import { ReactNode } from "react";
import Logo from "./logo";

export interface PageLyaoutProps {
    children: ReactNode
    className?: string
}

export default function PageLayout({children, className}: PageLyaoutProps){
    return (
        <div className="flex flex-col min-h-screen items-center py-10 bg-[url('/background.png')] bg-cover">
            <Logo />
            <main className={`flex-1 flex flex-col justify-center py-10 container  ${className}`}>{children}</main>
        </div>
    )
}