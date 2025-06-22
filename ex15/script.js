let intervalo;
let segundos = 0;
let minutos = 0;
let horas = 0;
let estaRodando = false;

const cronometroElemento = document.getElementById('cronometro');
const iniciarBotao = document.getElementById('iniciar');
const pausarBotao = document.getElementById('pausar');
const zerarBotao = document.getElementById('zerar');

function formatarTempo(seg, min, hor) {
  const s = String(seg).padStart(2, '0');
  const m = String(min).padStart(2, '0');
  const h = String(hor).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

function iniciarCronometro() {
  if (!estaRodando) {
    intervalo = setInterval(() => {
      segundos++;
      if (segundos === 60) {
        segundos = 0;
        minutos++;
      }if (minutos === 60) {
        minutos = 0;
        horas++;
      }
      cronometroElemento.textContent = formatarTempo(segundos, minutos, horas);
    }, 1000);
    estaRodando = true;
    iniciarBotao.disabled = true;
    pausarBotao.disabled = false;
  }
}

function pausarCronometro() {
  clearInterval(intervalo);
  estaRodando = false;
  iniciarBotao.disabled = false;
  pausarBotao.disabled = true;
}

function zerarCronometro() {
  clearInterval(intervalo);
  segundos = 0;
  minutos = 0;
  horas = 0;
  cronometroElemento.textContent = formatarTempo(segundos, minutos, horas);
  estaRodando = false;
  iniciarBotao.disabled = false;
  pausarBotao.disabled = true;
}

iniciarBotao.addEventListener('click', iniciarCronometro);
pausarBotao.addEventListener('click', pausarCronometro);
zerarBotao.addEventListener('click', zerarCronometro);

pausarBotao.disabled = true;