function calcularTiempo(){
  let tiempo = new Date();

  let hora = tiempo.getHours();
  let minutos = tiempo.getMinutes();
  let segundos = tiempo.getSeconds();

  hora = hora < 10 ? "0" + hora : hora;
  minutos = minutos < 10 ? "0" + minutos : minutos;
  segundos = segundos < 10 ? "0" + segundos : segundos;

  let pantallaReloj = hora + ":" + minutos + ":" + segundos;
  let relojDigital = document.querySelector(".reloj");
  relojDigital.innerHTML = pantallaReloj;

}

setInterval(calcularTiempo, 1000);