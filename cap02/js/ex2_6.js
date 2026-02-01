function calcularValor() {
  const inValor = document.getElementById("inValor");
  const inTempo = document.getElementById("inTempo");
  const outCalcular = document.getElementById("outCalcular");

  const valor = Number(inValor.value);
  const tempo = Number(inTempo.value);

  const blocos = Math.ceil(tempo / 15);
  const total = valor * blocos;

  outCalcular.textContent = `Valor a Pagar R$:${total.toFixed(2)}`
}

const btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularValor);