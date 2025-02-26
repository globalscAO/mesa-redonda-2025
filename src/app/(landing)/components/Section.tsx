export default function Section({
	children,
	className,
	ref
}: {
	children: React.ReactNode
	className: string
	ref?:  (el: HTMLDivElement) => void
}) {
	return (
		<section ref={ref} className="p-12 max-lg:px-8 max-lg:py-12 flex items-center justify-center bg-gradient-to-b from-tertiary to-tertiary/80 min-h-96">
			<div className={`max-w-5xl w-full ${className}`}>{children}</div>
		</section>
	)
}
