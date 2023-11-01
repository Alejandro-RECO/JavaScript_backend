let hr = mn = sg = ms = "0" + 0,iniciarTiempo;

// Selectores de boton
const botonIniciar = document.querySelector(".iniciar");
const botonDetener = document.querySelector(".detener");
const botonReiniciar = document.querySelector(".reiniciar");

// Eventos
botonIniciar.addEventListener("click",iniciar);
botonDetener.addEventListener("click",detener);
botonReiniciar.addEventListener("click",reiniciar);

// Iniciar cronometro
function iniciar () {
    // Insercion de css class
    botonIniciar.classList.add('on');

    // Logica de ejecucion del cronometro
    iniciarTiempo = setInterval(() => {
        ms++;
        ms = ms < 10 ? "0" + ms : ms; 

        if (ms == 100) {
            sg++;
            sg = sg < 10 ? "0" + sg : sg;
            ms = "0" + 0;
        }

        if (mn == 60) {
            mn++;
            mn = mn < 10 ? "0" + mn : mn;
            sg = "0" + 0;
        }

        if (mn == 60) {
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            mn = "0" + 0;
        }

        // Insercion de html
        ingresarValor();

    },10);
}

// Detener cronometro
function detener () {
    botonIniciar.classList.remove('on');
    clearInterval(iniciarTiempo);
}

// Reiniciar cronometro
function reiniciar(){
    botonIniciar.classList.remove('on');
    clearInterval(iniciarTiempo);
    hr = mn = sg = ms ="0" + 0;
    ingresarValor();
}


// Insercion de html
function ingresarValor(){
    document.querySelector(".milisegundo").innerHTML=ms;
    document.querySelector(".segundo").innerHTML=sg;
    document.querySelector(".minuto").innerHTML=mn;
    document.querySelector(".hora").innerHTML=hr;

}







