import HighlightSection from "./HighlightSection"

export default function OfficialOpening({
	externalRef,
}: {
	externalRef: (el: HTMLDivElement) => void
}) {
	return (
		<HighlightSection ref={externalRef} className={"text-white flex max-lg:flex-col gap-20 text-center max-lg:gap-4 max-w-5xl justify-between items-center"}>
			<h1 className="font-bold text-xl max-lg:text-base">
				ABERTURA OFICIAL EM MARÇO DE 2025
			</h1>

			<button className="primary-gradient px-4 py-2 font-semibold text-white rounded-lg text-sm h-10">
				BAIXAR FOLHETO DO EVENTO
			</button>
		</HighlightSection>
	)
}
