function secondsConverter(yourSeconds) {
    let timeCounter = {
        days: Math.floor(yourSeconds / (60 * 60 * 24)),
        hour: Math.floor((yourSeconds % (60 * 60 * 24)) / (60 * 60)),
        min: Math.floor(((yourSeconds % (60 * 60 * 24)) % (60 * 60)) % 60),
        sec: Math.floor(((yourSeconds % (60 * 60 * 24)) % (60 * 60)) % 60),
    }

    let ddhhmmss = "";
    if (timeCounter.days > 0) {
        ddhhmmss += timeCounter.days + ' Day ';
    }

    if (timeCounter.hour > 0) {
        ddhhmmss += timeCounter.hour + ' Hour ';
    }

    if (timeCounter.min > 0) {
        ddhhmmss += timeCounter.min + ' Minutes ';
    }

    if (timeCounter.sec > 0) {
        ddhhmmss += timeCounter.sec + ' Seconds ';
    }

    return ddhhmmss;
}

console.log(secondsConverter(3600));