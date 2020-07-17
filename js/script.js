window.addEventListener('DOMContentLoaded', () => {
    let date = new Date();

    let watch = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    };

    let hours = document.querySelector('.hours'),
        minutes = document.querySelector('.minutes'),
        seconds = document.querySelector('.seconds'),
        type = document.querySelector('.pm-am');

    if (watch.hours >= 12) {
        type.textContent = 'PM';
        watch.hours -= 12;
    }

    function setTime() {

        if (watch.seconds == 60) {
            watch.seconds = 0;
            watch.minutes += 1;
        }

        if (watch.minutes == 60) {
            watch.minutes = 0;
            watch.hours += 1;
        }

        if (watch.hours == 12) {
            watch.hours = 0;
            type.textContent = 'AM' ? 'PM' : 'AM';
        }

        let h = watch.hours,
            m = watch.minutes,
            s = watch.seconds;

        if (h < 10)
            h = '0' + h;
        if (m < 10)
            m = '0' + m;
        if (s < 10)
            s = '0' + s;
        hours.textContent = h;
        minutes.textContent = m;
        seconds.textContent = s;
        watch.seconds += 1;
    }

    setTime();
    setInterval(setTime, 1000);
});