import React, { useState } from "react";
import "../css/LeftPannel.css";
import "../css/SearchPannel.css";
import AboutTodayWeatherText from "./AboutTodayWeatherText.js";
import CityImg from "./CityImg.js";
import Icon from "./Icon.js";
import FormateDate from "./FormateDate.js";
import FormateTime from "./FormateTime.js";

export default function LeftPannel(props) {
	const [inputValue, setInputValue] = useState('');
	const [cityName, setCityName] = useState(props.cityName)

	// if (props.coordinates.ready) {
	// 	setCity(props.coordinates.city);
	// }

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit(inputValue);
    }

    return (
        <div className="LeftPannel">
            {/* <SearchPannel /> */}

            <div className="SearchPannel">
                <form
                    className="search-city-wrapper active"
                    id="search-city-form"
					onSubmit={handleSubmit}
                >
                    <div className="input-search-icon">
                        <i className="bx bx-search search-icon"></i>
                    </div>
                    <input
                        type="text"
                        name="search-city-value"
                        id="search-city-input"
                        placeholder="Search for places..."
						value = {inputValue}
                    	onChange={handleChange}
                    />
                </form>
                <button id="current-location-button">
                    <i className="bx bx-current-location sub-title current-location-icon"></i>
                </button>
            </div>

            <Icon weather={props.weather} />
            <div className="current-temperature-wrapper">
                <span className="temperature" id="current-temperature">
                    {Math.round(props.weather.temp)}
                </span>
                <span id="current-temperature-scale">°C</span>
            </div>

            <div className="current-date title">
                <FormateDate date={props.weather.date} />
                <span className="light-text-color" id="current-time">
                    <FormateTime time={props.weather.date} />
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
                    description={`Feels like ${Math.round(
                        props.weather.feelsLike
                    )}°`}
                />
            </div>

            <CityImg img="./img/city.png" city={props.cityName} />
        </div>
    );
}
