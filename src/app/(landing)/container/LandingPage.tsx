import AboutUs from "../components/AboutUs"
import Banner from "../components/Banner"
import ExhibitionSponsorship from "../components/ExhibitionSponsorship"
import OfficialOpening from "../components/OfficialOpening"
import Statistics from "../components/Statistics"
import WhatExpect from "../components/WhatExpect"

export default function LandingPage() {
	return (
		<>
			<Banner />
			<AboutUs />
			<Statistics />
			<ExhibitionSponsorship />
			<OfficialOpening />
			<WhatExpect />
		</>
	)
}
