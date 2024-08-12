const three_letter_month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

function getTimeStamp(time) {
    const clock_time = time.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    });
    const date = `${time.getDate()} ${
        three_letter_month[time.getMonth()]
    } ${time.getFullYear()}`;
    return { clock_time, date };
}

export default getTimeStamp;
