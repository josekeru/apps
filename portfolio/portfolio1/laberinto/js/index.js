// Tiempo maximo, aumentar para hacer pruebas
const MAXTIME = 8;

// arreglo con los muros del laberinto
var muros = document.getElementsByClassName("muro");
// variable donde se guarda el span del temporizador
var timer;
// status es palabra reservada, tuve que cambiarla a statusParr
var statusParr;
// variable booleana, true significa que se esta jugando.
var playing = false;
// variable donde se guarda el id del temporizador una vez que este empieza
// a ejecutarse
var interval;

function mOver(obj) {
    if (playing) {
        playing = false;
        statusParr.innerHTML = "Perdiste! Tocaste una pared!";
        // se detiene el temporizador
        if (interval) {
            clearInterval(interval);
        }
        // pintar los muros para mostrar que se perdió
        for (var i = 0; i < muros.length; i++) {
            muros[i].style.backgroundColor = "#ff8888";
        }
    }
}

function mOverMuro(obj) {
    if (playing) {
        playing = false;
        statusParr.innerHTML = "Perdiste! Te saliste del laberinto";
        // se detiene el temporizador
        if (interval) {
            clearInterval(interval);
        }
        // pintar los muros para mostrar que se perdió
        for (var i = 0; i < muros.length; i++) {
            muros[i].style.backgroundColor = "#ff8888";
        }

    }
}

function iniciarJuego() {
    if (!playing) {
        statusParr = document.getElementById("statusParr");
        statusParr.innerHTML = "Jugando...";
        timer = document.getElementById("timer");
        playing = true;
        for (var i = 0; i < muros.length; i++) {
            muros[i].style.background = "green";
        }

        // detener el temporizador si es que existe
        if (interval) {
            clearInterval(interval);
        }
        var time = MAXTIME;
        timer.innerHTML = "0" + time + ":00";
        // crear temporizador
        interval = setInterval(function () {
            time -= 1;
            timer.innerHTML = "0" + time + ":00";
            // Detener el temporizador si se acabo el tiempo
            if (time == 0) {
                statusParr.innerHTML = "Tu tiempo se agoto!";
                clearInterval(interval);
            }
        }, 1000);
    }
}

function terminarJuego() {

    if (playing) {
        if (interval) {
            clearInterval(interval);
        }
        playing = false;
        for (var i = 0; i < muros.length; i++) {
            muros[i].style.background = "#4ECE47";
        }
        statusParr.innerHTML = "Felicidades! Has conseguido la información de mi contacto! </br> Mi correo es: <a style=color:blue><strong>jj_mq_3@hotmail.com</strong></a></br>Mi número de teléfono es: <a style=color:blue><strong>647275377</strong></a>";
    }
}