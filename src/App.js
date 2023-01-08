import React, { useState } from "react";

import axios from "axios";
import SearchPannel from "./js/SearchPannel";
import Navigation from "./js/Navigation.js";
import TodayHighlights from "./js/TodayHighlights.js";
import TodayMainInfo from "./js/TodayMainInfo.js";
import Forecast from "./js/Forecast.js";

import "./App.css";
import "./css/LeftPannel.css";
import "./css/RightPannel.css";
import "./css/SearchPannel.css";

export default function App() {
    const apiKey = "aa09763d916df0424c840d55bfc2d2c9";
    const [city, setCity] = useState(`Lviv`);
    const [todayWeather, setTodayWeather] = useState({ ready: false });
	const [forecast, setForecast] = useState({ ready: false });

    function getCityName(name) {
        setCity(name);
        setTodayWeather({ ready: false });
		console.log('name');
    }

    function searchByName(name) {
        let dataUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${apiKey}`;
        axios.get(dataUrl).then(getCoordinates);
		console.log('1', city);
    }

    function getCoordinates(response) {
        setCity(response.data.name);

		let oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&exclude=minutely&appid=${apiKey}&units=metric&exclude=minutely`;
		axios.get(oneCallUrl).then(getTodayWeather);
		console.log('2', city);
    }

    function getTodayWeather(response) {
        setTodayWeather({
            ready: true,
            temp: response.data.current.temp,
            date: response.data.current.dt,
            icon: response.data.current.weather[0].icon,
            description: response.data.current.weather[0].description,
            feelsLike: response.data.current.feels_like,
            uvi: response.data.current.uvi,
            windDeg: response.data.current.wind_deg,
            windSpeed: response.data.current.wind_speed,
            sunrise: response.data.current.sunrise,
            sunset: response.data.current.sunset,
            humidity: response.data.current.humidity,
            visibility: response.data.current.visibility,
        });
		setForecast ({
			ready: true,
			dailyForecast: response.data.daily,
			hourlyForecast: response.data.hourly
		});
    }

    if (todayWeather.ready) {
        return (
            <div className="App">
                <div className="weather-box">
                    <div className="leftPannel">
                        <SearchPannel onSubmit={getCityName} />
                        <TodayMainInfo city={city} weather={todayWeather} />
                    </div>

                    <div className="RightPannel">
                        <Navigation />
						<Forecast daily={forecast.dailyForecast} hourly={forecast.hourlyForecast} forecastType='daily'/>
                        <TodayHighlights weather={todayWeather} />
                    </div>

                </div>
                <div className="copyright">
                    <a href="https://github.com/freshgoldroses/weather-app">
                        GitHub
                    </a>
                    <span> | Alina Makovii</span>
                </div>
            </div>
        );
    } else {
			searchByName(city);
			console.log('+++')
        return <div className="App">Loading...</div>;
    }
}