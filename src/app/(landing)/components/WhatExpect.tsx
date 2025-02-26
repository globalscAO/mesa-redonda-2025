import Section from "./Section"

export default function WhatExpect() {
	return (
		<Section className="flex flex-wrap max-lg:flex-wrap-reverse justify-center items-center gap-20 max-lg:gap-8">
			<div className="w-full max-w-[484px] flex flex-col text-white gap-3 max-lg:text-center">
				<h2 className="font-bold text-xl max-lg:text-base">
					O QUE ESPERAR DESTE EVENTO?
				</h2>

				<p className="max-lg:text-justify max-lg:text-sm">
					A 5ª Edição da Mesa Redonda com CEOs reunirá líderes influentes da
					economia angolana e internacional para discutir o impacto da
					descarbonização e da neutralidade carbônica na cadeia de produção. O
					evento abordará como a transição para uma economia de baixo carbono
					pode transformar a estratégia e a orientação dos líderes, permitindo
					que se posicionem de forma competitiva diante dos desafios impostos
					pelo mercado. A sustentabilidade tornou-se um fator-chave para a
					sobrevivência das organizações, exigindo que as lideranças adotem
					soluções inovadoras para reduzir emissões, aumentar a eficiência
					energética e aproveitar as oportunidades de um mercado global em
					transformação.
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
