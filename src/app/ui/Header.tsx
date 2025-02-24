import Image from "next/image"
import Link from "next/link"

export default function Header() {
	return (
		<header className="bg-tertiary/50 flex w-full h-20 justify-center items-center px-12">
			<div className="w-full justify-between max-w-5xl flex items-center">
				<Link href={"/"}>
					<Image
						src="/images/logotipo-white.png"
						alt="Mesa Redonda com CEOs - 2025"
						width={100}
						height={100}
						className="object-contain w-14 h-14"
					/>
				</Link>

				<button className="primary-gradient px-4 py-2 font-semibold text-white rounded-lg text-sm h-10">
					ENTRAR EM CONTACTO
				</button>
			</div>
		</header>
	)
}
