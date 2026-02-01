function verificarNumero() {
  const inNumero = document.getElementById("inNumero");
  const outResposta = document.getElementById("outResposta");

  outResposta.textContent = "";

  const numero = Number(inNumero.value);

  if ( numero % 2 === 0) {
    outResposta.textContent = `Resposta: ${numero} é Par`;
  }
  else {
    outResposta.textContent = `Resposta: ${numero} é Ímpar`;
  }
}

const btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click",verificarNumero)