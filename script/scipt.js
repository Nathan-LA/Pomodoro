let intervalle;
let seconde = 10;
let secondeDepart = seconde;

document.getElementById("play").addEventListener("click", function () {
    if (intervalle) {
        clearInterval(intervalle);
    }
    intervalle = setInterval(updateTimer, 1000);
});

function updateTimer() {
    seconde--;
    let mins = Math.floor((seconde % 3600) / 60);
    let secs = seconde % 60;

    document.getElementById("chronoc").textContent =
        (mins < 10 ? "0" + mins : mins) + ":" +
        (secs < 10 ? "0" + secs : secs);
    
    document.getElementById("chronoc").style.strokeDashoffset = seconde/secondeDepart * document.getElementById("chronoc").style.strokeDasharray +"px";

    if(seconde == 0){
        timerRepos();
    }
}

function timerRepos(){
    seconde = 60;

    document.getElementById("chronoc").textContent = 

    mins = Math.floor((seconde % 3600) / 60);
    secs = seconde % 60;

    document.getElementById("chronoc").textContent =
        (mins < 10 ? "0" + mins : mins) + ":" +
        (secs < 10 ? "0" + secs : secs);
}