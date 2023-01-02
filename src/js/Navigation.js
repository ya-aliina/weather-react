import "../css/Navigation.css";

function Navigation() {
	return (
		<div className="Navigation">
			<div id="weather-period-wrapper">
				<span
					className="weather-period title light-text-color"
					id="hourly-forecast"
				>
					Today
				</span>
				<span
					className="weather-period title light-text-color active"
					id="week-forecast"
				>
					Week
				</span>
			</div>

			<div className="temperature-btns-wrapper">
				<button
					className="change-temperature-btn sub-title active"
					id="celsius-btn"
				>
					°C
				</button>
				<button
					className="change-temperature-btn sub-title"
					id="fahrenheit-btn"
				>
					°F
				</button>
			</div>
		</div>
	);
}

export default Navigation;
