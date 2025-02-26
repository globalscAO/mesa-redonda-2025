import Image from "next/image"
import Section from "./Section"

export default function ExhibitionSponsorship({
	externalRef,
}: {
	externalRef: (el: HTMLDivElement) => void
}) {
	const exhibitionSponsorship = [
		{
			id: 1,
			imgSrc: "/images/exhibition.jpeg",
			title: "Benefícios da Exposição: ",
			benefits: [
				"Visibilidade para potenciais clientes e parceiros",
				"Conexão com um público engajado",
				"Oportunidade de demonstração e fechamento de vendas",
			],
			description: "Garanta seu espaço e faça sua marca brilhar!",
			btnTitle: "SOLICITAR EXPOSIÇÃO",
		},
		{
			id: 1,
			imgSrc: "/images/sponsorship.jpeg",
			title: "Vantagens do Patrocínio:",
			benefits: [
				"Maior alcance e reconhecimento de marca",
				"Associação com um evento de impacto",
				"Exclusividade e destaque para sua empresa",
			],
			description: "Invista na visibilidade certa e conquiste novos clientes!",
			btnTitle: "Patrocinar",
		},
	]

	return (
		<Section ref={externalRef} className={""}>
			<div className="flex flex-col gap-2.5 text-white w-full text-center">
				<h1 className="text-lg max-lg:text-base">
					GANHE DESTAQUE NO EVENTO COM:
				</h1>
				<h2 className="font-bold text-xl max-lg:text-base">
					EXPOSIÇÃO OU PATROCINÍO
				</h2>
			</div>

			<div className="flex w-full gap-20 items-center justify-center flex-wrap max-lg:gap-8">
				{exhibitionSponsorship.map((item, index) => (
					<div className="max-w-md w-full flex flex-col gap-8 max-lg:gap-4 py-8 max-lg:py-4" key={index}>
						<Image
							src={item.imgSrc}
							alt={""}
							width={300}
							height={300}
							className="w-full h-72 max-lg:h-48 object-cover rounded-md"
						/>

						<div className="flex flex-col gap-4 max-lg:gap-2 text-white max-lg:text-sm">
							<h3 className="font-bold text-lg">{item.title}</h3>
							<ul className="list-disc ml-8">
								{item.benefits.map((item, index) => (
									<li key={index}> {item}</li>
								))}
							</ul>
							<p>{item.description}</p>
						</div>

						<button className="primary-gold hover:scale-110 px-4 py-2 font-semibold text-white rounded-lg text-sm h-10">
							{item.btnTitle.toUpperCase()}
						</button>
					</div>
				))}
			</div>
		</Section>
	)
}
