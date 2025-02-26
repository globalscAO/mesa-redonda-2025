"use client"

import AboutUs from "../components/AboutUs"
import Banner from "../components/Banner"
import ContactUs from "../components/ContactUs"
import ExhibitionSponsorship from "../components/ExhibitionSponsorship"
import OfficialOpening from "../components/OfficialOpening"
import PartnerSponsor from "../components/PartnerSponsor"
import Statistics from "../components/Statistics"
import WhatExpect from "../components/WhatExpect"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef, useEffect } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function LandingPage() {
	const sectionsRef = useRef<(HTMLDivElement | null)[]>([])

	useEffect(() => {
		sectionsRef.current.forEach((section) => {
			if (section) {
				gsap.fromTo(
					section,
					{ opacity: 0, y: 50 },
					{
						opacity: 1,
						y: 0,
						duration: 1,
						ease: "power2.out",
						scrollTrigger: {
							trigger: section,
							start: "top 80%",
							end: "bottom 20%",
							toggleActions: "play none none reverse",
						},
					}
				)
			}
		})
	}, [])

	return (
		<>
			<Banner externalRef={(el) => (sectionsRef.current[0] = el)} />
			<AboutUs />
			<Statistics />
			<ExhibitionSponsorship
				externalRef={(el) => (sectionsRef.current[3] = el)}
			/>
			<OfficialOpening externalRef={(el) => (sectionsRef.current[4] = el)} />
			<WhatExpect externalRef={(el) => (sectionsRef.current[5] = el)} />
			<PartnerSponsor externalRef={(el) => (sectionsRef.current[6] = el)} />
			<ContactUs externalRef={(el) => (sectionsRef.current[7] = el)} />
		</>
	)
}
