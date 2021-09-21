export type SearchResult = {
	city: CityResult
	cnt: number | null
	cod: string
	list: Array<ListResults>
	message: number | null
}

export type CityResult = {
	coord: object
	country: string
	id: number | null
	name: string
	population: number | null
	sunrise: number | null
	sunset: number | null
	timezone: number | null
}

export type ListResults = {
	main: ListResultsMain
	weather: Array<ListResultsWeather>
}

export type ListResultsMain = {
	temp: number | null
}

export type ListResultsWeather = {
	description: string
}

export type CurrentWeather = {
	temperature: number | null
	description: string
}
