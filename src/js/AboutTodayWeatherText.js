import '../css/AboutTodayWeatherText.css';

function AboutTodayWeatherText(props) {
  return (
    <div className="AboutTodayWeatherText">
        <img src={props.img} alt="cloudiness"></img>
        <span class="main-text" id="cloudiness">{props.description}</span>
    </div>
  );
}

export default AboutTodayWeatherText;