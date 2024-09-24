let intervalle;
let seconde;
let secondeDepart;
let progressElement;
let circleLength;
let progress;
let mins;
let secs;
let myBool = true;

document.getElementById("play").addEventListener("click", function () {
    travailTimer();
});

function travailTimer(){
    seconde = 10;
    secondeDepart = seconde;
    if (intervalle) {
        clearInterval(intervalle);
    }
    intervalle = setInterval(updateTimer, 1000);
}

function updateTimer() {
    seconde--;
    mins = Math.floor((seconde % 3600) / 60);
    secs = seconde % 60;

    document.getElementById("chronoc").textContent =
        (mins < 10 ? "0" + mins : mins) + ":" +
        (secs < 10 ? "0" + secs : secs);

    progressElement = document.getElementById("progress-bar");
    circleLength = progressElement.getTotalLength(); // 471 from the CSS stroke-dasharray
    progress = (seconde / secondeDepart);  // Fraction of time remaining
    progressElement.style.strokeDashoffset = circleLength * (1 - progress);  // Update offset

    if (seconde == 0 && myBool == true) {
        seconde = 20;
        secondeDepart = seconde;
        document.querySelector("html").style.backgroundColor = "green";
        myBool = false;
    } else if (seconde == 0 && myBool == false) {
        seconde = 10;
        secondeDepart = seconde;
        document.querySelector("html").style.backgroundColor = "red";
        myBool = true;
    }
}