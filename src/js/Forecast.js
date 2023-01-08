import "../css/RightPannel.css";
import "../css/Forecast.css";

import WeatherPeriodItem from "./WeatherPeriodItem.js";

export default function Forecast(props) {
    // let weatherType = props.weatherType;
    let dailyForecast = props.daily;
    let hourlyForecast = props.hourly;

    return (
        <div className="Forecast">
            <div className="dailyForecast">
                {dailyForecast.map(function (info, index) {
                    if (index < 7) {
                        return (
                            <div key={index}>
                                <WeatherPeriodItem
                                period="day"
                                date={info.dt}
                                icon={info.weather[0].icon}
                                alt={info.weather[0].description}
                                maxTemp={Math.round(info.temp.max)}
                                minTemp={Math.round(info.temp.min)}
                            />
                            </div>
                            
                        );
                    } else {
                        return null;
                    }
                })}
            </div>

            <div className="hourlyForecast none">
                {hourlyForecast.map(function (info, index) {
                    if (index < 7) {
                        return (
                            <WeatherPeriodItem
                                key={index}
                                period="hour"
                                date={info.dt}
                                icon={info.weather[0].icon}
                                alt={info.weather[0].description}
                                temp={Math.round(info.temp)}
                            />
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
}
