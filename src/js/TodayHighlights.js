import "../css/TodayHighlights.css";
import FormatedTime from "./FormatedTime";
import Gauge from "./Gauge";
import VertikalGauge from "./VertikalGauge.js";

function TodayHighlights(props) {
	console.log();
	return (
		<div className="TodayHighlights">
			<div className="title">Today's Highlights</div>
			<div className="today-highlights-list-row">
				<div className="today-highlights-item">
					<div className="sub-title light-text-color">UV Index</div>
					<Gauge weather={props.weather}/>
				</div>
				<div className="today-highlights-item">
					<div className="sub-title light-text-color">
						Wind status
					</div>
					<div className="today-highlight-item-number__wrapper-down">
						<span
							className="today-highlights-item-number"
							id="wind-speed"
						>
							{props.weather.windSpeed}
						</span>
						<span className="large-text">km/h</span>
					</div>
					<div className="today-highlights-item-info">
						<div className="compass-wrapper">
							<div className="compass"></div>
						</div>
						<div className="large-text" id="wind-dirrection">
							{props.weather.windDeg}
						</div>
					</div>
				</div>
				<div className="today-highlights-item">
					<div className="sub-title light-text-color">
						Sunrise &amp; Sunset
					</div>
					<div className="today-highlights-item-info">
						<i className="bx bx-up-arrow-alt sunrise-icon"></i>
						<div className="time">
							<div className="time-today main-text" id="sunrise-time">
								<FormatedTime time={props.weather.sunrise} />
							</div>
						</div>
					</div>
					<div className="today-highlights-item-info">
						<i className="bx bx-down-arrow-alt sunset-icon"></i>
						<div className="sub-title time">
							<div className="time-today main-text" id="sunset-time">
							<FormatedTime time={props.weather.sunset} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="today-highlights-list-row">
				<div className="today-highlights-item">
					<div className="sub-title light-text-color">Humidity</div>
					<div className="today-highlights-item-info item-info-with-vertical-gauge">
						<div className="today-highlight-item-number__wrapper-up">
							<div
								className="today-highlights-item-number"
								id="humidity"
							>
								95
							</div>
							<div className="large-text" id="humidity-scale">
								%
							</div>
						</div>
						<VertikalGauge />
					</div>
					<div className="today-highlights-item-info">
						<span className="large-text" id="humidity-quality-name">
							Too Humid
						</span>
						<span className="emoji">
							<img
								src="img/icons/emoji/thums-down.svg"
								id="humidity-emoji"
								alt="thums up"
							/>
						</span>
					</div>
				</div>

				<div className="today-highlights-item">
					<div className="sub-title light-text-color">Visibility</div>
					<div className="today-highlight-item-number__wrapper-down">
						<div
							className="today-highlights-item-number"
							id="visibility"
						>
							10
						</div>
						<div className="large-text">km</div>
					</div>
					<div className="today-highlights-item-info">
						<span className="large-text" id="visibility-quality-name">
							Good
						</span>
						<span className="emoji">
							<img
								src="img/icons/emoji/smiling-face.svg"
								id="visibility-emoji"
								alt="emoji"
							/>
						</span>
					</div>
				</div>

				<div className="today-highlights-item">
					<div className="sub-title light-text-color">Air Quality</div>
					<div className="today-highlights-item-info item-info-with-vertical-gauge">
						<div className="today-highlight-item-number__wrapper-up">
							<div
								className="today-highlights-item-number"
								id="air-quality-index"
							>
								1
							</div>
						</div>
						<VertikalGauge />
					</div>
					<div className="today-highlights-item-info">
						<span className="large-text" id="air-quality-name">
							Good
						</span>
						<span className="emoji">
							<img
								src="img/icons/emoji/thums-up.svg"
								id="air-quality-emoji"
								alt="thums up"
							/>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TodayHighlights;
