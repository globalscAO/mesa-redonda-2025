import { FiArrowRightCircle } from "react-icons/fi"
import Section from "./Section"

export default function ContactUs() {
	return (
		<Section className="flex justify-center gap-20 max-lg:gap-8 flex-wrap items-center">
			<div className="max-w-md w-full flex flex-col text-center items-center text-white gap-3">
				<h1 className="font-bold text-xl max-lg:text-base">
					QUESTÕES, PROPOSTAS OU SUGESTÕES?
				</h1>
				<h2 className="font-bold">
					PREENCHA O FORMULÁRIO E ENTRE EM CONTACTO.
				</h2>
				<p className="max-lg:text-sm">
					Preencha o formulário e entre em contacto connosco para tirar dúvidas,
					solicitar informações ou iniciar uma conversa.
				</p>
				<FiArrowRightCircle className="text-3xl text-secondary max-lg:rotate-90 hover:scale-125 transition-transform duration-300" />
			</div>

			<form className="max-w-md w-full bg-primary/20 py-12 px-8 max-lg:p-6 rounded-3xl flex flex-col gap-7 items-center">
				<h1 className="font-bold text-xl max-lg:text-base text-white">
					FORMULÁRIO DE CONTACTO
				</h1>

				<input
					type="text"
					className="bg-white/25 outline-none rounded-md text-white text-sm px-4 py-2 placeholder:text-white/70 w-full"
					placeholder="Nome completo"
				/>

				<input
					type="email"
					className="bg-white/25 outline-none rounded-md text-white text-sm px-4 py-2 placeholder:text-white/70 w-full"
					placeholder="Email"
				/>

				<input
					type="tel"
					className="bg-white/25 outline-none rounded-md text-white text-sm px-4 py-2 placeholder:text-white/70 w-full"
					placeholder="Contacto"
				/>

				<textarea
					name=""
					id=""
					rows={4}
					className="bg-white/25 outline-none rounded-md text-white text-sm px-4 py-2 placeholder:text-white/70 w-full"
					placeholder="Assunto"
				/>

				<button className="primary-gradient px-4 py-2 font-semibold text-white rounded-lg text-sm h-10 w-full">
					ENVIAR FORMULÁRIO
				</button>
			</form>
		</Section>
	)
}
