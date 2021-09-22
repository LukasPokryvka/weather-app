import React, { useState } from 'react'
import './styles/App.css'
import { weather, api } from './services/weather'
import initialState from './utils/initialState'

import WeatherInput from './components/WeatherInput'
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay'

const App = () => {
	const [searchResult, setSearchResult] = useState(initialState)

	const handleWeatherSearch = async (city: string): Promise<void> => {
		try {
			const result = await weather(
				`forecast?q=${city}&appid=${api.key}&units=metric`
			)
			setSearchResult(result.data)
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<div className="App">
			<WeatherInput search={handleWeatherSearch} />
			<WeatherDisplay data={searchResult} />
		</div>
	)
}

export default App
