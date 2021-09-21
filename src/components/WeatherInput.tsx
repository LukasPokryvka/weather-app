import React, { Dispatch, KeyboardEvent, SetStateAction, useState } from 'react'
import styles from '../styles/WeatherInput.module.css'

interface WeatherInputProps {
	searchText?: string
	search: (city: string) => void
}

const WeatherInput: React.FC<WeatherInputProps> = ({ searchText, search }) => {
	const text = searchText || 'Search for a city...'
	const [searchedCity, setSearchedCity] = useState('')

	const handleEnterPress = (e: KeyboardEvent): void => {
		if (e.key === 'Enter') search(searchedCity)
	}

	return (
		<div className={styles.wrapper}>
			<input
				type="text"
				placeholder={text}
				value={searchedCity}
				onChange={(e) => setSearchedCity(e.target.value)}
				onKeyDown={handleEnterPress}
				className={styles.input}
			/>
		</div>
	)
}

export default WeatherInput
