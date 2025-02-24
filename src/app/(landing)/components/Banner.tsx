import TimerLeft from "./TimerLeft"

export default function Banner() {
	return (
		<section className="w-full h-[600px] relative text-white">
			<video></video>
			<div className="absolute top-0 w-full h-full flex items-center justify-center bg-gradient-to-b from-tertiary/10 to-tertiary/80">
				<div className="max-w-2xl w-full flex flex-col items-center justify-center gap-8">
					<div className="text-center">
						<h3 className="text-lg">50 ANOS DE INDEPENDÊNCIA</h3>
						<h1 className="text-3xl font-bold">
							DESCARBONIZAÇÃO E NEUTRALIDADE CARBÔNICA
						</h1>
					</div>

					<button className="primary-gradient px-4 py-2 font-semibold text-white rounded-lg text-sm h-10">
						BAIXAR FOLHETO DO EVENTO
					</button>

					<TimerLeft />
				</div>
			</div>
		</section>
	)
}
