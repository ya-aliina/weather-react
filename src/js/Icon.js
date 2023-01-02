function Icon(props) {
    let icon = props.weather.icon;

    function checkMissingIcon() {
        if (icon === "04d") {
            return (icon = "03d");
        }

        if (icon === "04n") {
            return (icon = "03n");
        }

        if (icon === "10d") {
            return (icon = "11d");
        }

        if (icon === "10n") {
            return (icon = "11n");
        }
    }
    checkMissingIcon(icon);

    return (
        <img 
            className="Icon"
            id="current-weather-icon"
            src={`./img/icons/day/${icon}.svg`}
            alt={props.weather.description}
        />
    );
}

export default Icon;