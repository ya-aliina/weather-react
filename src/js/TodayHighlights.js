import "../css/TodayHighlights.css";
import VertikalGauge from "./VertikalGauge.js";

function TodayHighlights(props) {
    return (
        <div className="TodayHighlights">
            <div className="title">Today's Highlights</div>
            <div className="today-highlights-list-row">
                <div className="today-highlights-item">
                    <div className="sub-title light-text-color">UV Index</div>
                    <div className="gauge">
                        <span className="three-uv main-text">3</span>
                        <span className="six-uv main-text">6</span>
                        <span className="nine-uv main-text">9</span>
                        <span className="twelve-uv main-text">12</span>
                        <div className="gauge-body">
                            <div className="gauge-contour"></div>
                            <div className="gauge-fill"></div>
                            <div className="gauge-cover">
                                <div
                                    className="today-highlights-item-number gauge-text"
                                    id="uv-index"
                                >
                                    0
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="today-highlights-item">
                    <div className="sub-title light-text-color">
                        Wind status
                    </div>
                    <div className="today-highlight-item-number__wrapper-down">
                        <span
                            className="today-highlights-item-number"
                            id="wind-speed"
                        >
                            5.14
                        </span>
                        <span className="large-text">km/h</span>
                    </div>
                    <div className="today-highlights-item-info">
                        <div className="compass-wrapper">
                            <div className="compass"></div>
                        </div>
                        <div className="large-text" id="wind-dirrection">
                            ESE
                        </div>
                    </div>
                </div>
                <div class="today-highlights-item">
                    <div class="sub-title light-text-color">
                        Sunrise &amp; Sunset
                    </div>
                    <div class="today-highlights-item-info">
                        <i class="bx bx-up-arrow-alt sunrise-icon"></i>
                        <div class="time">
                            <div class="time-today main-text" id="sunrise-time">
                                07:41 AM
                            </div>
                        </div>
                    </div>
                    <div class="today-highlights-item-info">
                        <i class="bx bx-down-arrow-alt sunset-icon"></i>
                        <div class="sub-title time">
                            <div class="time-today main-text" id="sunset-time">
                                04:26 PM
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="today-highlights-list-row">
                <div class="today-highlights-item">
                    <div class="sub-title light-text-color">Humidity</div>
                    <div class="today-highlights-item-info item-info-with-vertical-gauge">
                        <div class="today-highlight-item-number__wrapper-up">
                            <div
                                class="today-highlights-item-number"
                                id="humidity"
                            >
                                95
                            </div>
                            <div class="large-text" id="humidity-scale">
                                %
                            </div>
                        </div>
                        <VertikalGauge />
                    </div>
                    <div class="today-highlights-item-info">
                        <span class="large-text" id="humidity-quality-name">
                            Too Humid
                        </span>
                        <span class="emoji">
                            <img
                                src="img/icons/emoji/thums-down.svg"
                                id="humidity-emoji"
                                alt="thums up"
                            />
                        </span>
                    </div>
                </div>

                <div class="today-highlights-item">
                    <div class="sub-title light-text-color">Visibility</div>
                    <div class="today-highlight-item-number__wrapper-down">
                        <div
                            class="today-highlights-item-number"
                            id="visibility"
                        >
                            10
                        </div>
                        <div class="large-text">km</div>
                    </div>
                    <div class="today-highlights-item-info">
                        <span class="large-text" id="visibility-quality-name">
                            Good
                        </span>
                        <span class="emoji">
                            <img
                                src="img/icons/emoji/smiling-face.svg"
                                id="visibility-emoji"
                                alt="emoji"
                            />
                        </span>
                    </div>
                </div>

                <div class="today-highlights-item">
                    <div class="sub-title light-text-color">Air Quality</div>
                    <div class="today-highlights-item-info item-info-with-vertical-gauge">
                        <div class="today-highlight-item-number__wrapper-up">
                            <div
                                class="today-highlights-item-number"
                                id="air-quality-index"
                            >
                                1
                            </div>
                        </div>
                        <VertikalGauge />
                    </div>
                    <div class="today-highlights-item-info">
                        <span class="large-text" id="air-quality-name">
                            Good
                        </span>
                        <span class="emoji">
                            <img
                                src="img/icons/emoji/thums-up.svg"
                                id="air-quality-emoji"
                                alt="thums up"
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodayHighlights;
