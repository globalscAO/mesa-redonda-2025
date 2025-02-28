import Image from "next/image"

export default function Footer() {
	const footerItems = [
		{
			title: "Contactos",
			link: [
				{ title: "(+244) 222 731 031", href: "tel:+244222731031" },
				{ title: "(+244) 941 064 919", href: "tel:+244941064919" },
			],
		},
		{
			title: "Outras Soluções",
			link: [
				{ title: "Global Academy", href: "tel:+244222731031" },
				{ title: "Global Service Corporation", href: "https://globalsc.ao" },
			],
		},
	]

	return (
		<footer className="flex w-full justify-center items-center lg:p-12 p-6 bg-tertiary/60">
			<div className="w-full max-w-5xl flex flex-col gap-6">
				<ul className="flex flex-wrap justify-between text-white text-sm gap-12">
					<li className="max-w-64 w-full gap-3 flex flex-col">
						<Image
							src={"/images/logotipo-white.png"}
							alt={""}
							width={44}
							height={36}
						/>

						<p>
							Global Services Corporation, empresa angolana de multisserviços.
						</p>
					</li>

					<div className="flex flex-wrap gap-12">
						{footerItems.map((item, index) => (
							<li key={index} className="flex flex-col gap-3">
								<h1 className="font-semibold">{item.title.toUpperCase()}</h1>

								{item.link.map((link, index) => (
									<a
										key={index}
										href={`${link.href}`}
										className="hover:scale-110 transition-transform duration-500"
									>
										{link.title}
									</a>
								))}
							</li>
						))}
					</div>
				</ul>

				<hr className="w-full border-white/50" />

				<p className="text-white text-sm max-lg:text-xs text-center">
					© {new Date().getFullYear()} Global Services Corporation. Todos os
					direitos reservados.
				</p>
			</div>
		</footer>
	)
}
