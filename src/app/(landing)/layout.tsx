import Footer from "../ui/Footer"
import Header from "../ui/Header"

export default function LandingLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="flex flex-col items-center">
			<Header />
			<section className="max-w-5xl w-full">{children}</section>
			<Footer />
		</div>
	)
}
