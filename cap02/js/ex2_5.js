function mostrarPromocao() {
  const inMedicamento = document.getElementById("inMedicamento");
  const inPreco = document.getElementById("inPreco");
  const outPromocao = document.getElementById("outPromocao");
  const outPreco = document.getElementById("outPreco");

  const medicamento = inMedicamento.value;
  const preco = Number(inPreco.value);

  const promocao = Math.floor(preco * 2);
  
  outPromocao.textContent = `Promoção de ${medicamento}`;
  outPreco.textContent = `Leve 2 por apenas R$: ${Math.floor(preco * 2).toFixed(2)}`;

}
const btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click",mostrarPromocao);

