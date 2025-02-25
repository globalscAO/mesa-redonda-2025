import Section from "./Section"

export default function WhatExpect() {
	return (
		<Section className="flex flex-wrap max-lg:flex-wrap-reverse justify-center items-center gap-20 max-lg:gap-8">
			<div className="w-full max-w-[484px] flex flex-col text-white gap-3 max-lg:text-center">
				<h2 className="font-bold text-xl max-lg:text-base">
					O QUE ESPERAR DESTE EVENTO?
				</h2>

				<p className="max-lg:text-justify max-lg:text-sm">
					A 5ª Edição da Mesa Redonda Com CEOS reunirá líderes influentes da
					economia angolana e internacional, para discutir o impacto da inovação
					na cadeia de produção, e como esse vetor, pode transformar a maneira e
					a orientação dos lideres de modo que posicionem diante dos desafios
					imposto pelos seus mercado. A inovação é um mecanismo de sobrevivência
					das organizações, as lideranças são obrigadas a inovar para não perder
					a competitividade, enfrentar os desafios e aproveitar as oportunidades
					do mercado local e global.
				</p>
			</div>

			<video
				src={
					"https://global-services-corporation.github.io/images/mr-2025/mr-banner.mp4"
				}
				muted
				loop
				autoPlay
				className="pointer-events-none object-cover max-w-md w-full h-96 max-lg:h-72 rounded-lg"
			/>
		</Section>
	)
}
