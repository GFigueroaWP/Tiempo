function getSecondsSinceStartOfDay() {
    return (
        new Date().getSeconds() +
        new Date().getMinutes() * 60 +
        new Date().getHours() * 3600
    );
}

setInterval(function () {
    var time = getSecondsSinceStartOfDay();
    let second = document.getElementById("seconds").style.transform = "rotate(" + ((time * 6)+180) + "deg)";
    let minute = document.getElementById("minutes").style.transform = "rotate(" + (((time/60) * 6)+180) + "deg)";
    let hour = document.getElementById("hour").style.transform = "rotate(" + (((time/3600) * 30)+180) + "deg)";
}, 1000);
