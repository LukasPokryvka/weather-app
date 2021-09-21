import React from 'react'
import styles from '../../styles/WeatherDetail.module.css'
import wtr_styles from '../../styles/Weathers.module.css'
import { Days, getToday } from '../../utils/days'
import { CityResult, CurrentWeather } from '../../types/searchResult'
import { IoLocationOutline } from 'react-icons/io5'

interface WeatherDetailProps {
	location: CityResult
	currentWeather: CurrentWeather
}

const WeatherDetail: React.FC<WeatherDetailProps> = ({
	location,
	currentWeather
}) => {
	const todayNumber = new Date().getDay()
	const todayText = getToday(Days, todayNumber)
	var options = {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	} as const
	const todayDate = new Date().toLocaleDateString('en-GB', options)

	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapper__tilted}>
				<div className={wtr_styles.sunny}>
					<div className={wtr_styles.sunny__gradient}>
						<div>
							<p>{todayText}</p>
							<p>{todayDate}</p>
							{location.name.length > 0 && (
								<div>
									<p>
										<IoLocationOutline />
										{location.name}, {location.country}
									</p>
									<p>{currentWeather.temperature}</p>
									<p>{currentWeather.description}</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WeatherDetail
