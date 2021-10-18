'use strict';

let numeroSecreto = Math.trunc(Math.random() * 20) + 1;
let puntaje = 20;
let maximoPuntaje = 0;

const displayMessage = function (mensaje) {
  document.querySelector('.message').textContent = mensaje;
};

document.querySelector('.check').addEventListener('click', function () {
  const numeroIngresado = Number(document.querySelector('.guess').value);
  console.log(numeroIngresado, typeof numeroIngresado);
  if (!numeroIngresado) {
    displayMessage('No Ingresaste nada!');
    //cuando gana
  } else if (numeroIngresado === numeroSecreto) {
    document.querySelector('.number').textContent = numeroSecreto;
    displayMessage('Numero Correcto!');
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (puntaje > maximoPuntaje) {
      maximoPuntaje = puntaje;
      document.querySelector('.highscore').textContent = maximoPuntaje;
    }
    //cuando es más alto o más bajo
  } else if (numeroIngresado !== numeroSecreto) {
    if (puntaje > 1) {
      displayMessage(numeroIngresado > numeroSecreto ? 'Muy Alto!' : 'Muy Bajo!');
      puntaje--;
      document.querySelector('.score').textContent = puntaje;
    } else {
      displayMessage('Perdiste!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  puntaje = 20;
  numeroSecreto = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Ingresar un numero...');
  document.querySelector('.score').textContent = puntaje;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('#container').style.backgroundColor = 'white';
});