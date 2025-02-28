import PrimaryBtn from "@/app/ui/PrimaryBtn"
import TimerLeft from "./TimerLeft"

export default function Banner({
	externalRef,
}: {
	externalRef?: (el: HTMLDivElement) => void
}) {
	return (
		<section
			className="w-full h-[600px] max-lg:h-[500px] relative text-white"
			ref={externalRef}
		>
			<video
				src={
					"https://global-services-corporation.github.io/images/mr-2025/mr-banner-2.mp4"
				}
				muted
				loop
				autoPlay
				className="pointer-events-none object-cover object-top w-full h-full rounded-lg"
			/>
			<div className="absolute top-0 w-full h-full flex items-center justify-center bg-gradient-to-b from-tertiary/50 to-tertiary px-12 max-lg:px-8">
				<div className="max-w-2xl w-full flex flex-col items-center justify-center gap-8">
					<div className="text-center">
						<h3 className="text-lg max-lg:text-base">
							50 ANOS DE INDEPENDÊNCIA
						</h3>
						<h1 className="text-3xl max-lg:text-xl font-bold">
							DESCARBONIZAÇÃO E NEUTRALIDADE CARBÔNICA
						</h1>
					</div>

					<PrimaryBtn title={"BAIXAR FOLHETO DO EVENTO"} />

					<TimerLeft />
				</div>
			</div>
		</section>
	)
}
