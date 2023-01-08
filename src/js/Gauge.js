import React, { useState } from "react";
import "../css/Gauge.css";

export default function Gauge(props) {
    let uvi = Math.round(props.weather.uvi);

    const[three, setThree] = useState(false);
    const[six, setSix] = useState(false);
    const[nine, setNine] = useState(false);
    const[twelve, setTwelve] = useState(false);
    let gaugeFillStyle = { transform: `rotate(${caculateTurn(uvi)}turn)` };

    function caculateTurn(value) {
        if (value < 0 || value > 15) {
            return;
        }

        const maxUvIndex = 15;
        const maxTurn = 0.5;
        const maxPercent = 100;

        let turnsInOnePercent = maxTurn / maxPercent;
        let percentsInOneUv = maxPercent / maxUvIndex;
        let turnsInOneUv = percentsInOneUv * turnsInOnePercent;

        return value * turnsInOneUv;
    }

    function hideNumbers(value) {
        if (value > 3) {
            setThree(true);
        }
        if (value > 6) {
            setSix(true);
        }
        if (value > 9) {
            setNine(true);
        }
        if (value > 12) {
            setTwelve(true);
        }
    }
    hideNumbers(uvi);

    function setNewStyle(element) {
        if (element) {
            return 'hide-text'
        } else {
            return 'show-text'
        }
    }

    return (
        <div className="Gauge">
            <span className={`three-uv main-text ${setNewStyle (three)}`}>3</span>
            <span className={`six-uv main-text ${setNewStyle (six)}`}>6</span>
            <span className={`nine-uv main-text ${setNewStyle (nine)}`}>9</span>
            <span className={`twelve-uv main-text ${setNewStyle (twelve)}`}>12</span>
            <div className="gauge-body">
                <div className="gauge-contour"></div>
                <div className="gauge-fill" style={gaugeFillStyle}></div>
                <div className="gauge-cover">
                    <div
                        className="today-highlights-item-number gauge-text"
                        id="uv-index"
                    >
                        {uvi}
                    </div>
                </div>
            </div>
        </div>
    );
}
