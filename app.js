document.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('botao');
  const contador = document.getElementById('contador');
  let numero = 0;

  botao.addEventListener('click', () => {
      numero++;
      contador.textContent = numero;
  });
});