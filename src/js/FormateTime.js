export default function FormatTime(props) {
    const timstempIndex = 1000;

    let date = new Date(props.time * timstempIndex);
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    
    return `${hours}:${minutes}`;
}