import "../css/WeatherPeriodItem.css";
import Icon from "./Icon.js";
import FormatedDate from "./FormatedDate.js";
import FormatedTime from "./FormatedTime.js";

export default function WeatherPeriodItem(props) {
    function displayPeriod(period) {
        if (period === "day") {
            return (
				<div className="day sub-title">
					<FormatedDate date={props.date} short={true} />
				</div>
			);
        } else {
            return (
				<div className="day sub-title">
					<FormatedTime time={props.date} />
				</div>
			);
        }
    }

    function displayTemperature(period) {
        if (period === "day") {
            return (
                <div className="temperature">
                    <span className="temperature temp max main-text">
                        {props.maxTemp}°
                    </span>
                    <span className="temperature temp min main-text">
                        {props.minTemp}°
                    </span>
                </div>
            );
        } else {
            return (
				<div className="temperature">
                    <span className="temperature temp main-text">
                        {props.temp}°
                    </span>
                </div>
			);
        }
    }

    return (
        <div className="WeatherPeriodItem">
            {displayPeriod(props.period)}
            <div className="icon">
                <Icon icon={props.icon} text={props.alt} />
            </div>
            {displayTemperature(props.period)}
        </div>
    );
}

/* <FormatedDate date={props.date} short={true}/> */
