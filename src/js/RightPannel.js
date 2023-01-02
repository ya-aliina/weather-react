import "../css/RightPannel.css";
import Navigation from "./Navigation.js";
import WeatherPeriodItem from "./WeatherPeriodItem.js";
import TodayHighlights from "./TodayHighlights.js";

function RightPannel(props) {
	return (
		<div className="RightPannel">
			<Navigation />
			<div className="week-weather-information-wrapper">
				<WeatherPeriodItem
					day="Sun"
					img="./img/icons/day/03d.svg"
					alt="overcast clouds"
					maxTemp={12}
					minTemp={5}
				/>
				<WeatherPeriodItem
					day="Mon"
					img="./img/icons/day/03d.svg"
					alt="overcast clouds"
					maxTemp={12}
					minTemp={5}
				/>
				<WeatherPeriodItem
					day="Tue"
					img="./img/icons/day/03d.svg"
					alt="overcast clouds"
					maxTemp={12}
					minTemp={5}
				/>
				<WeatherPeriodItem
					day="Wed"
					img="./img/icons/day/03d.svg"
					alt="overcast clouds"
					maxTemp={12}
					minTemp={5}
				/>
				<WeatherPeriodItem
					day="Thu"
					img="./img/icons/day/03d.svg"
					alt="overcast clouds"
					maxTemp={12}
					minTemp={5}
				/>
				<WeatherPeriodItem
					day="Fri"
					img="./img/icons/day/03d.svg"
					alt="overcast clouds"
					maxTemp={12}
					minTemp={5}
				/>
				<WeatherPeriodItem
					day="Sat"
					img="./img/icons/day/03d.svg"
					alt="overcast clouds"
					maxTemp={12}
					minTemp={5}
				/>
			</div>
			<TodayHighlights weather={props.weather}/>
		</div>
	);
}

export default RightPannel;
