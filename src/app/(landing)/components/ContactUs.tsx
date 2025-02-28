import { FiArrowRightCircle } from "react-icons/fi"
import Section from "./Section"
import { SubmitHandler, useForm } from "react-hook-form"
import { api } from "@/app/api/api"
import toast from "react-hot-toast"

type InputValues = {
	name: string
	email: string
	phoneNumber: string
	subject: string
}

export default function ContactUs({
	externalRef,
}: {
	externalRef: (el: HTMLDivElement) => void
}) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<InputValues>()

	const onSubmit: SubmitHandler<InputValues> = async (data: InputValues) => {
		try {
			const response = await api.post("/contact-email", data)
			toast.success(
				"Muito obrigado por entrar em contacto, responderemos o mais breve possível!"
			)
			reset()
			console.log(response.data)
		} catch (error) {
			console.error("Erro ao enviar a mensagem", error)
			toast.error("Erro ao enviar a mensagem. Tente novamente.")
		}
	}

	return (
		<Section
			className="flex justify-center gap-20 max-lg:gap-8 flex-wrap items-center max-lg:p-0"
			ref={externalRef}
		>
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

			<form
				className="lg:max-w-md w-full lg:bg-primary/20 lg:py-12 lg:px-8 rounded-3xl flex flex-col gap-7 items-center"
				id="contact"
				onSubmit={handleSubmit(onSubmit)}
			>
				<h1 className="font-bold text-xl max-lg:text-base text-white">
					FORMULÁRIO DE CONTACTO
				</h1>

				<div className="w-full">
					<input
						type="text"
						className="bg-white/25 outline-none rounded-md text-white text-sm px-4 py-2 placeholder:text-white/70 w-full"
						placeholder="Nome completo"
						{...register("name", {
							required: "Nome é obrigatório",
							minLength: {
								value: 3,
								message: "Nome deve ter pelo menos 3 caracteres",
							},
						})}
					/>
					{errors.name && (
						<span className="text-red-500 text-xs">{errors.name.message}</span>
					)}
				</div>

				<div className="w-full">
					<input
						type="email"
						className="bg-white/25 outline-none rounded-md text-white text-sm px-4 py-2 placeholder:text-white/70 w-full"
						placeholder="Email"
						{...register("email", {
							required: "Email é obrigatório",
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
								message: "Email inválido",
							},
						})}
					/>
					{errors.email && (
						<span className="text-red-500 text-xs">{errors.email.message}</span>
					)}
				</div>

				<div className="w-full">
					<input
						type="tel"
						className="bg-white/25 outline-none rounded-md text-white text-sm px-4 py-2 placeholder:text-white/70 w-full"
						placeholder="Contacto"
						{...register("phoneNumber", {
							required: "Número de telefone é obrigatório",
							pattern: {
								value: /^[0-9]{9}$/,
								message: "Número de telefone inválido. Deve ter 9 dígitos.",
							},
						})}
					/>
					{errors.phoneNumber && (
						<span className="text-red-500 text-xs">
							{errors.phoneNumber.message}
						</span>
					)}
				</div>

				<div className="w-full">
					<textarea
						id="subject"
						rows={4}
						className="bg-white/25 outline-none rounded-md text-white text-sm px-4 py-2 placeholder:text-white/70 w-full"
						placeholder="Assunto"
						{...register("subject", {
							required: "Assunto é obrigatório",
							minLength: {
								value: 5,
								message: "Assunto deve ter pelo menos 5 caracteres",
							},
						})}
					/>
					{errors.subject && (
						<span className="text-red-500 text-xs">
							{errors.subject.message}
						</span>
					)}
				</div>

				<button className="primary-gradient px-4 py-2 font-semibold text-white rounded-lg text-sm h-10 w-full">
					ENVIAR FORMULÁRIO
				</button>
			</form>
		</Section>
	)
}
