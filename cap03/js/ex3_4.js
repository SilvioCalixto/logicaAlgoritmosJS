function calcularRaiz() {
  const inNumber = document.getElementById("inNumber");
  const outResultado = document.getElementById("outResultado");

  const number = Number(inNumber.value);

  if (number === 0 || isNaN(number) || inNumber.value === "") {
    alert("Informe um número válido...")
    inNumber.focus();
    return;
  }

  let raiz = Math.sqrt(number);

  if (raiz === Math.floor(raiz)) {
    outResultado.textContent = `${raiz}, quadrados perfeitos`;
  } else {
    outResultado.textContent = `Não há raiz exata para ${number}`;
  }
}

const btExibir = document.getElementById("btExibir")
btExibir.addEventListener("click", calcularRaiz)

