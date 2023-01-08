export default function FormatedTime(props) {
    const timestempIndex = 1000;
    let date = new Date(props.time * timestempIndex);

    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }

    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return (
        <span className={props.className}>{hours}:{minutes}</span>
    );
}