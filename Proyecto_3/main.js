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