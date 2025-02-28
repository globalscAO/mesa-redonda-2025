import Image from "next/image"
import Section from "./Section"
import PrimaryBtn from "@/app/ui/PrimaryBtn"

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

			<div className="w-full max-w-[484px] flex flex-col text-white gap-3 max-lg:text-center" id="about">
				<h1 className="text-lg max-lg:text-base">SOBRE</h1>

				<h2 className="font-bold text-xl max-lg:text-base">
					MESA REDONDA COM CEOs - OUTUBRO DE 2025
				</h2>

				<p className="max-lg:text-justify max-lg:text-sm">
					A &quot;Mesa Redonda com CEOs&quot; é um evento promovido pela GLOBAL
					ACADEMY, marca da Global Services Corporation, líder do mercado
					angolano no segmento de eventos corporativos. Nesta edição, o evento
					destaca a Descarbonização e a Neutralidade Carbônica, alinhando-se ao
					compromisso global com a sustentabilidade. Integrado ao programa
					&quot;Líder do Futuro&quot;, o evento visa capacitar os principais
					atores dos setores Público e Privado, incentivando-os a desenvolver
					estratégias e competências essenciais para a transição energética e a
					redução das emissões de carbono, contribuindo para um futuro mais
					sustentável e inovador.
				</p>

				<PrimaryBtn title={"BAIXAR FOLHETO DO EVENTO"} />
			</div>
		</Section>
	)
}
