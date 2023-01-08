export default function FormattedDate(props) {
    const timstempIndex = 1000;
    const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let short = props.short;
    let date = props.date;

    date = new Date(date * timstempIndex);
    date = weekDay[date.getDay()];

    if (short) {
        date = date.substring(0, 3)
    }

    return <span id="current-week-day">{date}</span>;
}