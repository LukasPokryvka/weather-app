import React, { useState, useEffect } from 'react'
import styles from '../../styles/WeatherDetail.module.css'
import { Days, getToday } from '../../utils/days'
import { CityResult, CurrentWeather } from '../../types/searchResult'
import {
	IoLocationOutline,
	IoThunderstormOutline,
	IoRainyOutline,
	IoSunnyOutline,
	IoCloudOutline
} from 'react-icons/io5'
import { RiDrizzleLine } from 'react-icons/ri'
import { BiCloudSnow } from 'react-icons/bi'
import { MdDehaze } from 'react-icons/md'

interface WeatherDetailProps {
	location: CityResult
	currentWeather: CurrentWeather
}

const WeatherDetail: React.FC<WeatherDetailProps> = ({
	location,
	currentWeather
}) => {
	const [logo, setLogo] = useState(0)

	useEffect(() => {
		setWeatherAndLogo()
	})

	const todayNumber = new Date().getDay()
	const todayText = getToday(Days, todayNumber)
	var options = {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	} as const
	const todayDate = new Date().toLocaleDateString('en-GB', options)
	const temperature = currentWeather.temperature
		? Math.round(currentWeather.temperature)
		: null
	const weatherOptions = [
		'Thunderstorm',
		'Drizzle',
		'Rain',
		'Snow',
		'Clear',
		'Clouds',
		'Other'
	]
	const setWeatherAndLogo = () => {
		const index = weatherOptions.indexOf(currentWeather.main)
		index >= 0 ? setLogo(index) : setLogo(weatherOptions.indexOf('Other'))
	}

	const classList = (...classes: Array<string | boolean>) =>
		classes.filter((item) => !!item).join(' ')

	const getWeatherLogo = () => {
		switch (logo) {
			case 0:
				return <IoThunderstormOutline />
			case 1:
				return <RiDrizzleLine />
			case 2:
				return <IoRainyOutline />
			case 3:
				return <BiCloudSnow />
			case 4:
				return <IoSunnyOutline />
			case 5:
				return <IoCloudOutline />
			default:
				return <MdDehaze />
		}
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapper__tilted}>
				<div
					className={classList(
						styles.common,
						styles.background_common,
						logo === 0 && styles.thunderstorm,
						logo === 1 && styles.drizzle,
						logo === 2 && styles.rain,
						logo === 3 && styles.snow,
						logo === 4 && styles.clear,
						logo === 5 && styles.clouds,
						logo === 6 && styles.other
					)}
				>
					<div className={classList(styles.gradient, styles.common)}>
						<div className={classList(styles.basic_styles, styles.sections)}>
							<div>
								<h2>{todayText}</h2>
								<p>{todayDate}</p>
								<div className={styles.location}>
									<IoLocationOutline />
									<p>
										{location.name}, {location.country}
									</p>
								</div>
							</div>
							<div>
								{getWeatherLogo()}
								<h1>{temperature}°C</h1>
								<p>{currentWeather.description}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WeatherDetail
