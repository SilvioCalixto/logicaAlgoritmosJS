function calcularPreco() {
  const inPreco = document.getElementById("inPreco");
  const inConsumo = document.getElementById("inConsumo");
  const outValor = document.getElementById("outValor");


  const preco = Number(inPreco.value);
  const consumo = Number(inConsumo.value);

  const calcular = (consumo / 1000) * preco;

  outValor.textContent = `Valor a pagar R$: ${calcular.toFixed(2)}`;
}

const btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPreco);