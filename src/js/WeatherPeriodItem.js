import "../css/WeatherPeriodItem.css";

function WeatherPeriodItem(props) {
	return (
		<div className="WeatherPeriodItem">
			<div className="day sub-title">{props.day}</div>
			<div className="icon">
				<img src={props.img} alt={props.alt} />
			</div>
			<div className="temperature">
				<span className="temperature temp max main-text">{props.maxTemp}°</span>
				<span className="temperature temp min main-text">{props.minTemp}°</span>
			</div>
		</div>
	);
}

export default WeatherPeriodItem;