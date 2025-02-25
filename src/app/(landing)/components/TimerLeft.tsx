"use client"

import { useState, useEffect, useCallback } from "react"

const TimerLeft: React.FC = () => {
	const eventDate = new Date("2025-10-01T00:00:00").getTime()

	const calculateTimeLeft = useCallback(() => {
		const difference = eventDate - Date.now()
		return difference > 0
			? {
					days: Math.floor(difference / (1000 * 60 * 60 * 24)),
					hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
					minutes: Math.floor((difference / 1000 / 60) % 60),
					seconds: Math.floor((difference / 1000) % 60),
			  }
			: { days: 0, hours: 0, minutes: 0, seconds: 0 }
	}, [eventDate]) 

	const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

	useEffect(() => {
		const initialTime = calculateTimeLeft()
		setTimeLeft(initialTime)

		const timer = setInterval(() => setTimeLeft(calculateTimeLeft), 1000)
		return () => clearInterval(timer)
	}, [calculateTimeLeft]) 

	return (
		<div className="flex gap-5 max-lg:gap-3 w-full justify-between max-lg:w-full max-lg:justify-around max-lg:px-3">
			{["Dias", "Horas", "Minutos", "Segundos"].map((label, i) => (
				<div key={label} className="flex flex-col items-center font-semibold">
					<span className="text-lg">{Object.values(timeLeft)[i]}</span>
					<span className="text-sm">{label.toUpperCase()}</span>
				</div>
			))}
		</div>
	)
}

export default TimerLeft
