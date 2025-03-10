import axios from "axios"

export const api = axios.create({
	baseURL: "https://gsc-website-api.onrender.com",
	timeout: 40000,
})
