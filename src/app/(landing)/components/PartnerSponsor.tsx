import HighlightSection from "./HighlightSection"

export default function PartnerSponsor({
	externalRef,
}: {
	externalRef: (el: HTMLDivElement) => void
}) {
	return (
		<HighlightSection
			className={"max-w-5xl text-white text-center flex flex-col gap-8"} ref={externalRef}
		>
			<h1 className="font-bold text-xl max-lg:text-base">
				PARCEIROS E PATROCINADORES
			</h1>

			<p className="text-lg text-white/80">Disponível em breve.</p>
		</HighlightSection>
	)
}
