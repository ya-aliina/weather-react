import "../css/LeftPannel.css";
import SearchPannel from "./SearchPannel.js";
import AboutTodayWeatherText from "./AboutTodayWeatherText.js";
import CityImg from "./CityImg.js";
import Icon from "./Icon.js";
import FormateDate from "./FormateDate.js";
import FormateTime from "./FormateTime.js";


export default function LeftPannel(props) {
	return (
		<div className="LeftPannel">
			<SearchPannel />
			<Icon weather={props.weather} />
			<div className="current-temperature-wrapper">
				<span className="temperature" id="current-temperature">
					{Math.round(props.weather.temp)}
				</span>
				<span id="current-temperature-scale">°C</span>
			</div>

			<div className="current-date title">
				<FormateDate date={props.weather.date}/>
				<span className="light-text-color" id="current-time">
					<FormateTime time={props.weather.date}/>
				</span>
			</div>

			<div className="about-today-weather-wrapper">
				<AboutTodayWeatherText
					img="./img/icons/day/cloudy.svg"
					alt="cloudiness"
					description={props.weather.description}
				/>
				<AboutTodayWeatherText
					img="./img/icons/day/feel_like.svg"
					alt="feels like"
					description={`Feels like ${Math.round(props.weather.feelsLike)}°`}
				/>
			</div>

			<CityImg img="./img/city.png" city="Hamburg" country="Germany" />
		</div>
	);
}
