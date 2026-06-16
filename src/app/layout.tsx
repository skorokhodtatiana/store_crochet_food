import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Header from "../components/UI/layouts/header";
import { ThemeProvider } from "../components/ThemeProvider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Tatsiana | Frontend Developer",
	description: "Pet-проект портфолио Татьяны Скороход, Frontend Developer c 3+ годами коммерческого опыта.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
			suppressHydrationWarning
			>
			<body className="min-h-full flex flex-col max-w-5xl mx-auto">
				<ThemeProvider
					attribute="class" 
					defaultTheme="system" 
					enableSystem
				>
					<Header/>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
