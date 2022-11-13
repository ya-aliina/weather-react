import "../css/LeftPannel.css";
import SearchPannel from "./SearchPannel.js";
import AboutTodayWeatherText from "./AboutTodayWeatherText.js";
import CityImg from "./CityImg.js";

function LeftPannel() {
    return (
        <div className="LeftPannel">
            <SearchPannel />
            <img id='current-weather-icon' src='./img/icons/day/01d.svg' alt='sunny' />
            
            <div className='current-temperature-wrapper'>
                <span className="temperature" id="current-temperature">5</span>
                <span id="current-temperature-scale">°C</span>
            </div>

            <div className="current-date title">
                <span id="current-week-day">Sunday,</span>
                <span className="light-text-color" id="current-time">00:29</span>
            </div>

            <div class="about-today-weather-wrapper">
                <AboutTodayWeatherText img='./img/icons/day/cloudy.svg' description='Clear Sky' />
                <AboutTodayWeatherText img='./img/icons/day/feel_like.svg' description='Feels like 4°' />
            </div>

            <CityImg img='./img/city.png' city='Hamburg' country='Germany' />
        </div>
    );
}

export default LeftPannel;
