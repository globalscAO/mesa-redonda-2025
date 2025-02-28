import React, { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import axios from "axios"
import gsap from "gsap"
import { useEffect, useRef } from "react"
import ReactDOM from "react-dom"

interface ExpositionFormModalProps {
	setIsModalOpen: (open: boolean) => void
}

interface FormValues {
	nome: string
	enterprise: string
	email: string
	contact: string
	subject: string
	expositionType: string
}

const ExhibitionFormModal: React.FC<ExpositionFormModalProps> = ({
	setIsModalOpen,
}) => {
	const [isLoading, setIsLoading] = useState(false)
	const modalRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		document.body.style.overflow = "hidden"
		return () => {
			document.body.style.overflow = "auto"
		}
	}, [])

	useEffect(() => {
		if (modalRef.current) {
			gsap.fromTo(
				modalRef.current,
				{ opacity: 0, y: -50 },
				{ opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
			)
		}
	}, [])

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>()

	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		setIsLoading(true)
		try {
			const response = await axios.post(
				"https://gsc-website-api.onrender.com/exposition-email",
				{
					name: data.nome,
					enterprise: data.enterprise,
					email: data.email,
					contact: data.contact,
					expositionType: data.expositionType,
					subject: data.subject,
				}
			)

			if (response.status === 200) {
				alert("Email enviado com sucesso!")
			}
		} catch (error) {
			console.error("Erro ao enviar formulário:", error)
		} finally {
			setIsLoading(false)
		}
	}

	return ReactDOM.createPortal(
		<div
			className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50`}
			onClick={() => setIsModalOpen(false)}
		>
			<div
				className={`flex flex-col gap-4 lg:max-h-[616px] bg-layout bg-cover bg-opacity-50 p-10 lg:rounded-md text-white max-lg:w-screen max-lg:h-screen overflow-y-auto max-w-6xl `}
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex flex-col items-center gap-2">
					<h2 className="font-semibold text-3xl max-lg:text-xl text-center">
						Formulário de Exposição
					</h2>
					<p className="lg:w-2/3 text-center text-sm max-lg:text-xs">
						Para expor a sua marca durante o evento, deixe os seus dados aqui
						abaixo:
					</p>
				</div>

				<form
					className="flex flex-wrap gap-4 justify-between max-w-4xl"
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className="flex flex-col gap-2 max-w-[440px] w-full ">
						<label className="font-semibold text-sm">Nome completo</label>
						<input
							{...register("nome", {
								required: "Este campo é obrigatório",
							})}
							type="text"
							className="w-full max-lg:w-auto max-sm:w-auto flex px-4 py-2 bg-white/80 rounded-[4px] placeholder:text-black/60 text-black"
							placeholder="Insira o seu nome aqui"
						/>
						{errors.nome && (
							<span className="text-red-500 text-xs">
								{errors.nome.message}
							</span>
						)}
					</div>

					<div className="flex flex-col gap-2 max-w-[440px] w-full ">
						<label className="font-semibold text-sm">Nome da empresa</label>
						<input
							{...register("enterprise", {
								required: "Este campo é obrigatório",
							})}
							type="text"
							className="w-full max-lg:w-auto max-sm:w-auto flex px-4 py-2 bg-white/80 rounded-[4px] placeholder:text-black/60 text-black"
							placeholder="Insira o nome da sua empresa aqui"
						/>
						{errors.enterprise && (
							<span className="text-red-500 text-xs">
								{errors.enterprise.message}
							</span>
						)}
					</div>

					<div className="flex flex-col gap-2 max-w-[440px] w-full ">
						<label className="font-semibold text-sm">Email</label>
						<input
							{...register("email", {
								required: "Este campo é obrigatório",
								pattern: {
									value: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/,
									message: "Insira um email válido",
								},
							})}
							type="email"
							className="w-full max-lg:w-auto max-sm:w-auto flex px-4 py-2 bg-white/80 rounded-[4px] placeholder:text-black/60 text-black"
							placeholder="Insira o seu email aqui"
						/>
						{errors.email && (
							<span className="text-red-500 text-xs">
								{errors.email.message}
							</span>
						)}
					</div>

					<div className="flex flex-col gap-2 max-w-[440px] w-full ">
						<label className="font-semibold text-sm">Contacto</label>
						<input
							{...register("contact", {
								required: "Este campo é obrigatório",
								pattern: {
									value: /^[0-9]+$/,
									message: "Insira um número de telefone válido",
								},
							})}
							type="tel"
							className="w-full max-lg:w-auto max-sm:w-auto flex px-4 py-2 bg-white/80 rounded-[4px] placeholder:text-black/60 text-black"
							placeholder="Insira aqui o seu contacto"
						/>
						{errors.contact && (
							<span className="text-red-500 text-xs">
								{errors.contact.message}
							</span>
						)}
					</div>

					<div className="flex flex-col gap-2 w-full">
						<label className="font-semibold text-sm">
							O que pretende expôr?
						</label>

						<div className="resize-none w-full max-lg:w-auto max-sm:w-auto flex px-4 py-2 bg-white/80 rounded-[4px] placeholder:text-black/60 text-black">
							<select
								{...register("expositionType", {
									required: "Este campo é obrigatório",
									validate: (value) =>
										value !== "Selecione" || "Selecione uma opção válida",
								})}
								className="w-full bg-transparent text-black/60 outline-none"
							>
								<option value="Selecione">Selecione o tipo de exposição</option>
								<option value="produto">Produto</option>
								<option value="serviço">Serviço</option>
							</select>
						</div>
						{errors.expositionType && (
							<span className="text-red-500 text-xs">
								{errors.expositionType.message}
							</span>
						)}
					</div>

					<div className="flex flex-col gap-2 w-full">
						<label className="font-semibold text-sm">Mensagem</label>
						<textarea
							{...register("subject", {
								required: "Este campo é obrigatório",
							})}
							rows={4}
							className="resize-none w-full max-lg:w-auto max-sm:w-auto flex px-4 py-2 bg-white/80 rounded-[4px] placeholder:text-black/60 text-black"
							placeholder="Escreva a sua mensagem aqui..."
						/>
						{errors.subject && (
							<span className="text-red-500 text-xs">
								{errors.subject.message}
							</span>
						)}
					</div>

					<div className="flex justify-center w-full flex-col items-center gap-2">
						<button
							disabled={isLoading}
							type="submit"
							className="w-full hover:bg-transparent bg-primary border-primary border hover:border-white  transition-colors duration-300 rounded-md text-white flex items-center justify-center py-2.5 lg:px-6 max-lg:px-4 h-12 max-lg:text-sm"
						>
							{isLoading ? (
								<span className="border-t-2 w-4 h-4 rounded-full animate-spin border-black"></span>
							) : (
								<span>Enviar</span>
							)}
						</button>

						<button
							type="button"
							disabled={isLoading}
							onClick={() => setIsModalOpen(false)}
							className="lg:hidden w-56 max-lg:w-full hover:bg-transparent hover:text-gray-400 bg-gray-400 border-gray-400 hover:border transition-colors duration-300 rounded-md text-white font-bold flex items-center justify-center py-2.5 lg:px-6 max-lg:px-4 h-12 max-lg:text-sm"
						>
							Cancelar
						</button>
					</div>
				</form>
			</div>
		</div>,
		document.body
	)
}

export default ExhibitionFormModal
