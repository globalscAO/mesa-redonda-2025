"use client"

import { useState, useRef, useEffect } from "react"
import HighlightSection from "./HighlightSection"
import CountUp from "react-countup"

export default function Statistics() {
	const statisticDatas = [
		{ number: 600, title: "Participantes" },
		{ number: 60, title: "Expositores" },
		{ number: 70, title: "Speakers" },
		{ number: 25, title: "Apresentações" },
	]
	const [isVisible, setIsVisible] = useState(false)
	const sectionRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setIsVisible(true)
					observer.disconnect()
				}
			},
			{ threshold: 0.5 }
		)
		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}
		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current)
			}
		}
	}, [])

	return (
		<HighlightSection
			className={"text-white flex flex-col text-center gap-4 max-w-2xl"}
			ref={sectionRef}
		>
			<h1 className="font-bold text-xl max-lg:text-base">
				ESTATÍSTICAS DO EVENTO
			</h1>
			<div className="flex flex-wrap gap-5 max-lg:gap-3 w-full justify-between max-lg:w-full max-lg:justify-around max-lg:px-3">
				{statisticDatas.map((statistic, index) => (
					<div key={index} className="flex flex-col items-center font-semibold">
						<p className="text-lg">
							+{isVisible ? <CountUp end={statistic.number} duration={2} /> : 0}
						</p>
						<p className="text-sm">{statistic.title.toUpperCase()}</p>
					</div>
				))}
			</div>
		</HighlightSection>
	)
}
