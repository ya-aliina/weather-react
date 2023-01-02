import "../css/AboutTodayWeatherText.css";

function AboutTodayWeatherText(props) {
	return (
		<div className="AboutTodayWeatherText">
			<img src={props.img} alt={props.alt}></img>
			<span className="main-text">
				{props.description}
			</span>
		</div>
	);
}

export default AboutTodayWeatherText;