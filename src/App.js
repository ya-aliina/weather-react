import React, { useState } from "react";
import "./App.css";
import LeftPannel from "./js/LeftPannel";
import RightPannel from "./js/RightPannel";
import axios from "axios";

export default function App() {
	const apiKey = "25fad9f7e87157d33dde0f82ab269ee8";
	const [city, setCity] = useState(`Lviv`);
	const [ready, setReady] = useState(false);
	const [coordinates, setCoordinates] = useState({ ready: false });
	const [todayWeather, setTodayWeather] = useState({ ready: false });

	function getCoordinates(response) {
		setCoordinates({
			ready: true,
			lat: response.data.coord.lat,
			lon: response.data.coord.lon,
		});
		if (coordinates.ready) {
			requestData();
		}
	}

	function requestData() {
		let oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely&appid=${apiKey}&units=metric&exclude=minutely`;
		axios.get(oneCallUrl).then(getWeather);
	}

	function getWeather(response) {
		getTodayWeather(response);
		setReady(true);
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
				visibility: response.data.current.visibility
			})
		
	};

	function searchByName() {
		let dataUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
		axios.get(dataUrl).then(getCoordinates);
	}

	if (ready) {
		return (
			<div className="App">
				<div className="weather-box">
					<LeftPannel weather={todayWeather} />
					<RightPannel weather={todayWeather} />
				</div>
				<div className="copyright">
					<div>{coordinates.lat}</div>
					<div>{coordinates.lon}</div>
					<a href="https://github.com/freshgoldroses/weather-app">
						GitHub
					</a>
					<span> | Alina Makovii</span>
				</div>
			</div>
		);
	} else {
		searchByName();
		return <div className="App">Loading...</div>;
	}
}