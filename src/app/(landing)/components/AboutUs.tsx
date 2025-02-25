import Image from "next/image"
import Section from "./Section"

export default function AboutUs() {
	return (
		<Section className="flex flex-wrap justify-center items-center gap-20 max-lg:gap-8">
			<Image
				className="max-w-md w-full rounded-lg"
				src={"/images/capa.jpg"}
				alt={"Capa"}
				width={400}
				height={400}
			/>

			<div className="w-full max-w-[484px] flex flex-col text-white gap-3 max-lg:text-center">
				<h1 className="text-lg max-lg:text-base">SOBRE</h1>
                
				<h2 className="font-bold text-xl max-lg:text-base">
					MESA REDONDA COM CEOs - OUTUBRO DE 2025
				</h2>

				<p className="max-lg:text-justify max-lg:text-sm">
					A &quot;Mesa Redonda com CEOs&quot; é um evento promovido pela
					GLOBAL ACADEMY, marca da Global Services Corporation, líder do mercado
					Angolano no segmento de eventos corporativos em temática de Liderança,
					enquadrada no programa &quot;Líder do Futuro&quot; focado na
					construção do perfil de Liderança Transformadora, destinado aos
					principais atores do setor Público e Privado, incentivando-os a
					desenvolver um conjunto de competências que possibilitam constituir
					uma base para a transformação das suas instituições.
				</p>

				<button className="primary-gradient px-4 py-2 font-semibold text-white rounded-lg text-sm h-10">
					BAIXAR FOLHETO DO EVENTO
				</button>
			</div>
		</Section>
	)
}
