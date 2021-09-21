import axios, { AxiosInstance } from 'axios'

export const api: { key: string } = {
	key: 'e22a8a81151260709e64f31e8c2d7276'
}

export const weather: AxiosInstance = axios.create({
	baseURL: 'https://api.openweathermap.org/data/2.5/',
	method: 'GET'
})
