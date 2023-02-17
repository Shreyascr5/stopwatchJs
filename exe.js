var butStarting = document.querySelector("#start");
var butStop = document.querySelector("#stop");
var butReset = document.querySelector("#reset");
var Minutes = document.getElementById("minutes");
var Seconds = document.getElementById("seconds");
var milliSeconds = document.getElementById("millisecs");


var min = 00;
var sec = 00;
var millisec = 00;





butStarting.addEventListener("onclick", startfun);

function resetfun() {
    min = 00;
    sec = 00;
    millisec = 00;
    Minutes.innerHTML = min;
    Seconds.innerHTML = sec;
    milliSeconds.innerHTML = milliSec;
}


butReset.addEventListener("onclick", resetfun);