import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Mesa Redonda com CEOs | Global Academy",
	description:
		"A Mesa Redonda com CEOs é um evento promovido pela GLOBAL ACADEMY, uma marca da Global Services Corporation.",
	openGraph: {
		title: "Mesa Redonda com CEOs | Global Academy",
		description:
			"Descubra insights exclusivos de CEOs e líderes empresariais na Mesa Redonda da Global Academy.",
		url: "https://mesaredonda.globalsc.ao",
		siteName: "Mesa Redonda com CEOs",
		type: "website",
		images: [
			{
				url: "https://mesaredonda.globalsc.ao/images/capa.jpg",
				width: 1200,
				height: 630,
				alt: "Banner do evento Mesa Redonda com CEOs",
			},
		],
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-PT">
			<body className={`${inter.variable} antialiased`}>{children}</body>
		</html>
	)
}
