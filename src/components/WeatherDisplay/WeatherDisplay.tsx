import React from 'react'
import styles from '../../styles/WeatherDisplay.module.css'
import WeatherDetail from './WeatherDetail'
import WeatherNextDays from './WeatherNextDays'
import { SearchResult, CurrentWeather } from '../../types/searchResult'

interface WeatherDisplayProps {
	data: SearchResult
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ data }) => {
	const location = data.city
	const currentWeather: CurrentWeather = {
		temperature: data.list[0].main.temp,
		description: data.list[0].weather[0].description,
		main: data.list[0].weather[0].main
	}

	return (
		<div className={styles.wrapper}>
			<WeatherDetail location={location} currentWeather={currentWeather} />
			<WeatherNextDays />
		</div>
	)
}

export default WeatherDisplay
