let intervalle;
let seconde = 1500;
let secondeDepart;
let progressElement;
let circleLength;
let progress;
let mins;
let secs;
let phaseTravail = true;

document.getElementById("play").addEventListener("click", function () {
    travailTimer();
    if ( document.getElementById("play").textContent == "play_arrow" ){ // On regarde si le bouton est celui qui lance le timer et on le change
        document.getElementById("play").textContent = "pause";
    } else if (document.getElementById("play").textContent == "pause") { // On regarde si le bouton est celui qui arrete le timer et on le change en arretant le chrono
        clearInterval(intervalle);
        document.getElementById("play").textContent = "play_arrow";
    }
});

/**
 * Cette fonction lance le timer dpomodoro en declenchant un intervalle
 */
function travailTimer(){
    secondeDepart = seconde;
    if (intervalle) {
        clearInterval(intervalle);
    }
    intervalle = setInterval(updateTimer, 1000);
}

/**
 * Cette fonction modifie la valeur de la progress bar en fonction du temps de chaque phase (en seconde)
 */
function updateTimer() {
    seconde--;
    mins = Math.floor((seconde % 3600) / 60);
    secs = seconde % 60;

    document.getElementById("chronoc").textContent =
        (mins < 10 ? "0" + mins : mins) + ":" +
        (secs < 10 ? "0" + secs : secs);

    progressElement = document.getElementById("progress-bar");
    circleLength = progressElement.getTotalLength();
    progress = (seconde / secondeDepart); // Permet d'avoir l'avancement de la progress bar
    progressElement.style.strokeDashoffset = circleLength * (1 - progress); // On met a jour la progress bar


    if (seconde == 0 && phaseTravail == true) { // On verifie que le timer est arrivé à terme et que l'on est dans la phase de travail alors on passe en phase de pause -> phaseTravail = false
        seconde = 300;
        secondeDepart = seconde;
        document.querySelector("html").style.backgroundColor = "green";
        phaseTravail = false;
    } else if (seconde == 0 && phaseTravail == false) { // On verifie que le timer est arrivé à terme et que l'on est dans la phase de pause alors on passe en phase de travail -> phaseTravail = true
        seconde = 1500;
        secondeDepart = seconde;
        document.querySelector("html").style.backgroundColor = "red";
        phaseTravail = true;
    }
}