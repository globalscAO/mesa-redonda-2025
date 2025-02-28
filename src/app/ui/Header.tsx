"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { IoMdClose } from "react-icons/io"
import { TfiMenu } from "react-icons/tfi"
import PrimaryBtn from "./PrimaryBtn"

export default function Header() {
	const [isMenuOpen, setMenuOpen] = useState(false)

	function scrollToSection(sectionId: string) {
		const section = document.getElementById(sectionId)
		if (section) {
			section.scrollIntoView({
				behavior: "smooth",
				block: "center",
			})
		} else {
			console.error(`Seção com ID ${sectionId} não encontrada.`)
		}
	}

	const handleMenuToggle = (id: string) => {
		scrollToSection(id)
		setMenuOpen(!isMenuOpen)
	}

	const navItem = [
		{
			id: "about",
			name: "Sobre",
			onclick: () => handleMenuToggle("about"),
		},
		{
			id: "investment",
			name: "Investimento",
			onclick: () => handleMenuToggle("investment"),
		},
		{
			id: "what-expect",
			name: "Expectativa",
			onclick: () => handleMenuToggle("what-expect"),
		},
		{
			id: "contact",
			name: "Contactos",
			onclick: () => handleMenuToggle("contact"),
		},
	]

	return (
		<header
			className={`${
				isMenuOpen ? "bg-tertiary" : "bg-tertiary/85"
			} flex w-full h-20 justify-center items-center lg:px-12 px-6 fixed top-0 z-50`}
		>
			<div className="w-full justify-between max-w-5xl flex items-center">
				<Link href={"/"}>
					<Image
						src="/images/logotipo-white.png"
						alt="Mesa Redonda com CEOs - 2025"
						width={100}
						height={100}
						className="object-contain w-14 h-14   max-lg:w-12 max-lg:h-12"
					/>
				</Link>

				<div>
					<button
						onClick={() => setMenuOpen(true)}
						className={`lg:hidden text-2xl text-white ${
							isMenuOpen && "hidden"
						}`}
					>
						<TfiMenu />
					</button>

					<button
						onClick={() => setMenuOpen(false)}
						className={`lg:hidden text-3xl text-white ${
							!isMenuOpen && "hidden"
						}`}
					>
						<IoMdClose />
					</button>
				</div>

				<nav
					className={`flex items-center  lg:max-w-lg w-full  max-lg:absolute max-lg:flex-col max-lg:rounded-b-lg left-0 max-lg:-bottom-[220px] max-lg:pb-5 max-lg:bg-tertiary transition-all duration-500 ease-in-out transform ${
						isMenuOpen
							? "max-lg:translate-y-0 max-lg:opacity-100 max-lg:visible"
							: "max-lg:-translate-y-5 max-lg:opacity-0 max-lg:invisible"
					}`}
				>
					<ul className="flex items-center w-full max-lg:flex-col justify-between font-medium gap-12 max-lg:gap-4 text-white">
						{navItem.map((item, index) => (
							<li
								className="hover:scale-105 transition-transform duration-300 cursor-pointer"
								key={index}
								onClick={item.onclick}
							>
								{item.name}
							</li>
						))}

						{isMenuOpen && <div className="lg:hidden"><PrimaryBtn title={"	ENTRAR EM CONTACTO"} /></div>}
					</ul>
				</nav>

				<button className="primary-gradient px-4 py-2 font-semibold text-white rounded-lg text-sm h-10 max-lg:hidden">
					ENTRAR EM CONTACTO
				</button>
			</div>
		</header>
	)
}
