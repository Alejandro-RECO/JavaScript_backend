const deg = 6;

const hora = document.querySelector('.hora');
const minuto = document.querySelector('.minuto');
const segundo = document.querySelector('.segundo');

setInterval(()=>{
  let tiempo = new Date();

  let hr = tiempo.getHours() * 30;
  let min = tiempo.getMinutes() * deg;
  let seg = tiempo.getSeconds() * deg;

  hora.style.transform =`rotate(${(hr) + (min/12)}deg)`;
  minuto.style.transform = `rotate(${(min)}deg)`;
  segundo.style.transform = `rotate(${seg}deg)`;
})

function calcularTiempo(){
    let tiempo = new Date();
  
    let hora = tiempo.getHours();
    let minutos = tiempo.getMinutes();
    let segundos = tiempo.getSeconds();
  
    hora = hora < 10 ? "0" + hora : hora;
    
    let horaLet = hora > 12 ? "PM" : "AM"

    hora = hora % 12 || 12
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

  
    let pantallaReloj = hora + ":" + minutos + ":" + segundos;
    let relojDigital = document.querySelector(".reloj_digital");
    relojDigital.innerHTML = (pantallaReloj+ " "+ horaLet);
  
} setInterval(calcularTiempo, 1000);
