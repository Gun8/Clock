window.addEventListener('DOMContentLoaded', () => {
    let date = new Date();

    let clock = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    };

    let hours = document.querySelector('.hours'),
        minutes = document.querySelector('.minutes'),
        seconds = document.querySelector('.seconds'),
        type = document.querySelector('.pm-am');

    if (clock.hours >= 12) {
        type.textContent = 'PM';
        clock.hours -= 12;
    }

    function setTime() {

        if (clock.seconds == 60) {
            clock.seconds = 0;
            clock.minutes += 1;
        }

        if (clock.minutes == 60) {
            clock.minutes = 0;
            clock.hours += 1;
        }

        if (clock.hours == 12) {
            clock.hours = 0;
            type.textContent = 'AM' ? 'PM' : 'AM';
        }

        let h = clock.hours,
            m = clock.minutes,
            s = clock.seconds;

        if (h < 10)
            h = '0' + h;
        if (m < 10)
            m = '0' + m;
        if (s < 10)
            s = '0' + s;
        hours.textContent = h;
        minutes.textContent = m;
        seconds.textContent = s;
        clock.seconds += 1;
    }

    setTime();
    setInterval(setTime, 1000);
});