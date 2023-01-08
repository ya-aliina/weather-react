import "../css/RightPannel.css";
import Icon from "./Icon.js";
import FormatedDate from "./FormatedDate.js";
import AboutTodayWeatherText from "./AboutTodayWeatherText.js";
import CityImg from "./CityImg.js";
import FormatedTime from "./FormatedTime";

export default function TodayMainInfo(props) {
    return (
        <div className="TodayMainInfo">
            <Icon icon={props.weather.icon} text={props.weather.description} />
            <div className="current-temperature-wrapper">
                <span className="temperature" id="current-temperature">
                    {Math.round(props.weather.temp)}
                </span>
                <span id="current-temperature-scale">°C</span>
            </div>
            <div className="current-date title">
                <FormatedDate date={props.weather.date} short={false}/>
                <FormatedTime
                    time={props.weather.date}
                    className="light-text-color"
                />
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
                    description={`Feels like ${Math.round(
                        props.weather.feelsLike
                    )}°`}
                />
            </div>
            <CityImg img="./img/city.png" city={props.city} />
        </div>
    );
}
