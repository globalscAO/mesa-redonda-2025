export default function Section({
	children,
	className,
}: {
	children: React.ReactNode
	className: string
}) {
	return (
		<section className="p-12 max-lg:px-8 max-lg:py-12 flex items-center justify-center bg-tertiary/85 min-h-96">
			<div className={`max-w-5xl w-full ${className}`}>{children}</div>
		</section>
	)
}
