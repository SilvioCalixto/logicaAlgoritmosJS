function calcularPromocao() {
  const inProduto = document.getElementById("inProduto");
  const inPreco = document.getElementById("inPreco");
  const outPromocaoTres = document.getElementById("outPromocaoTres");
  const outPromocaoUnitario = document.getElementById("outPromocaoUnitario");

  const produto = inProduto.value;
  const preco = Number(inPreco.value);

  const promocao = preco / 2;

  outPromocaoTres.textContent = `${produto} - Promoção: Leve 3 por R$: ${(promocao + (preco * 2)).toFixed(2)}`;
  outPromocaoUnitario.textContent = `O 3º produto custa apenas R$: ${promocao.toFixed(2)}`;
}

const btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", calcularPromocao);

