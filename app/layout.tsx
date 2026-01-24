import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google"; // Import Syne
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider"; // Import Provider

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const syne = Syne({
	variable: "--font-syne",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Ozan Özdemir | Cameraman",
	description: "Portfolio of Cameraman Ozan Özdemir",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} antialiased`}
			>
				<SmoothScrollProvider>{children}</SmoothScrollProvider>
			</body>
		</html>
	);
}
