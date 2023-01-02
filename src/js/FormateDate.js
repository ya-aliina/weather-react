export default function FormatDate(props) {
    const timstempIndex = 1000;
    const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let date = new Date(props.date * timstempIndex);
    date = weekDay[date.getDay()];
    return <span id="current-week-day">{date},</span>;
}