import Footer from "../ui/Footer"
import Header from "../ui/Header"

export default function LandingLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}
