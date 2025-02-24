import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Mesa Redonda com CEO's",
	description:
		"A Mesa Redonda com CEO's, é um evento promovido pela GLOBAL ACADEMY, marca da Global Services Corporation",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-PT">
			<body className={`${inter.variable} antialiased`}>{children}</body>
		</html>
	)
}
