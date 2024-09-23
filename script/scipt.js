let intervalle;
let seconde = 25*60;

document.getElementById("timer").addEventListener("click", function () {
    if (intervalle) {
        clearInterval(intervalle);
    }
    seconde = 25*60;
    document.getElementById("chrono").textContent = "25:00";
    intervalle = setInterval(updateTimer, 1000);
});

function updateTimer() {
    seconde--;
    let hrs = Math.floor(seconde / 3600);
    let mins = Math.floor((seconde % 3600) / 60);
    let secs = seconde % 60;

    document.getElementById("chrono").textContent =
        (mins < 10 ? "0" + mins : mins) + ":" +
        (secs < 10 ? "0" + secs : secs);

    if(seconde == 0){
        timerRepos();
    }
}

function timerRepos(){
    seconde = 5*60;
}