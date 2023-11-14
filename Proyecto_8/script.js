function oobtenerTiempoFaltante(fechaLimite){
    let ahora = new Date();
    let tiempoFaltante= (new Date(fechaLimite)-ahora+1000)/1000;
    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltantes = ('0' + Math.floor(tiempoFaltante /60 % 60)).slice(-2);
    let horasFaltantes = ('0' + Math.floor(tiempoFaltante /3600 % 24)).slice(-2);
    let diasFaltantes = ('0' + Math.floor(tiempoFaltante /(3600 * 24))).slice(-2);

    return{
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante
    }

};

console.log(oobtenerTiempoFaltante('Dec 25 2023 00:00:0000 GMT-0500'));

function cuentaRegresiva(tiempoFaltante,reloj,mensaje){
    const e = document.getElementById(reloj);
    const dias = document.querySelector('.dias');
    const horas = document.querySelector('.horas');
    const minutos = document.querySelector('.minutos');
    const segundos = document.querySelector('.segundos');
    const botones = document.getElementById('boton')
    const botones1 = document.getElementById('boton1')
    const papaNoel = document.querySelector('.papaNoelOff')

    

    const tiempoActual = setInterval( () => {

        let t = oobtenerTiempoFaltante(tiempoFaltante); 
        dias.innerHTML = t.diasFaltantes
        horas.innerHTML = t.horasFaltantes
        minutos.innerHTML = t.minutosFaltantes
        segundos.innerHTML = t.segundosFaltantes


        if(t.tiempoFaltante <= 1){

            clearInterval(tiempoActual);
            e.innerHTML = mensaje;
            dias.innerHTML = '00';
            horas.innerHTML = '00';
            minutos.innerHTML = '00';
            segundos.innerHTML = '00';
            botones.classList.remove('of');
            botones.classList.add('on');
            botones1.classList.remove('of');
            botones1.classList.add('on');
            papaNoel.classList.add('on')


        } 
        else{
            e.innerHTML = 'Faltan para navidad'
        }

    },1000);
}


let botonSonido = new Audio ("./sound/musica.mp3")


function play1(){
    botonSonido.play();
    
}

function pause1(){
    botonSonido.pause();
}


cuentaRegresiva('Dec 25 2023 00:00:0000 GMT-0500','cuentaRegresiva','¡Feliz Navidad!')












