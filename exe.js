var mins = 00;
var sec = 00;
var millsec = 00;

var getMin = document.querySelector('#minutes');
var getSec = document.querySelector('#seconds');
var getMillSec = document.querySelector('#millisecs');
var btnStart = document.querySelector('#start');
var btnStop = document.querySelector('#stop');
var btnReset = document.querySelector('#reset');
var Setint;

function timeid() {
    millsec++;
    if (millsec < 10) {
        getMillSec.innerHTML = "0" + millsec;
    }
    if (millsec >= 10) {
        getMillSec.innerHTML = millsec;

    }
    if (millsec > 100) {
        sec++;
        millsec = 0;
        getMillSec.innerHTML = "0" + millsec;
        if (sec < 10) {
            getSec.innerHTML = "0" + sec;

        }
        if (sec >= 10) {
            getSec.innerHTML = sec;
        }
        if (sec > 60) {
            mins++;
            sec = 0;
            getSec.innerHTML = "0" + sec;
            if (mins < 10) {
                getMin.innerHTML = "0" + mins;

            }
            if (mins >= 10) {
                getMin.innerHTML = mins;
            }


        }
    }
}

function timeStart() {
    Setint = setInterval(timeid, 100);

}

function timeStop() {
    clearInterval(Setint);

}

function timeReset() {
    clearInterval(Setint);
    mins = "00";
    sec = "00";
    millsec = "00";
    getMillSec.innerHTML = millsec;
    getMin.innerHTML = mins;
    getSec.innerHTML = sec;
}
if (btnReset) {
    btnReset.addEventListener("click", timeReset);
}
if (btnStop) {
    btnStop.addEventListener("click", timeStop);
}
if (btnStart) {
    btnStart.addEventListener("click", timeStart);
}