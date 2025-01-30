import type {Metadata} from "next";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "./globals.css";

import {Inter} from 'next/font/google';
import React from "react";


const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
    title: "Mike's Portfolio",
    description: "Built with Next.js, Tailwind CSS, and TypeScript",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${inter.className} overflow-x-hidden antialiased `}
        >
        <div className="  w-screen mt-10 ">
            {children}
        </div>
        </body>
        </html>
    );
}
