import type { Config } from "tailwindcss"

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#008E8E",
				secondary: "#00BCBC",
				tertiary: "#1E1E1E",
			},
			backgroundImage: {
				layout: "url('/images/bg-blue.jpg')",
			},
		},
	},
	plugins: [],
} satisfies Config
