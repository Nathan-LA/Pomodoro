let intervalle;
let seconde = 0;

document.getElementsByClassName("material-symbols-outlined").addEventListener("click", function () {
    if (intervalle) {
        clearInterval(intervalle);
    }
    seconde = 0;
    document.getElementById("chrono").textContent = "00:00:00";
    intervalle = setInterval(updateTimer, 1000);
});

function updateTimer() {
    seconde++;
    let hrs = Math.floor(seconde / 3600);
    let mins = Math.floor((seconde % 3600) / 60);
    let secs = seconde % 60;

    document.getElementById("chrono").textContent =
        (hrs < 10 ? "0" + hrs : hrs) + ":" +
        (mins < 10 ? "0" + mins : mins) + ":" +
        (secs < 10 ? "0" + secs : secs);
}