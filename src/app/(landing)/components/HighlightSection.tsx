import { Ref } from "react"

export default function HighlightSection({
	children,
	className,
    ref
}: {
	children: React.ReactNode
	className: string
    ref?: Ref<HTMLElement> | undefined
}) {
	return (
		<section className="p-12 max-lg:px-8 max-lg:py-6 flex items-center bg-layout bg-cover bg-center w-full justify-center" ref={ref}>
			<div className={`w-full ${className}`}>{children}</div>
		</section>
	)
}
