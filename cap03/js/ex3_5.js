function calcularNotas() {
  //cria uma referência aos elementos da página   
  const inSaque = document.getElementById("inSaque");
  const outNotasCem = document.getElementById("outNotasCem");
  const outNotasCinquenta = document.getElementById("outNotasCinquenta");
  const outNotasDez = document.getElementById("outNotasDez");

  //Limpa mensagens caso, uma segunda execução

  outNotasCem.textContent = "";
  outNotasCinquenta.textContent = "";
  outNotasDez.textContent = "";


  const saque = Number(inSaque.value);// converte o conteúdo do campo inSaque

  //Se não preencheu ou NaN
  if(saque === 0 || isNaN(saque)) {
    alert("Informe o valor do saque corretamente");// Exibe o alerta
    inSaque.focus();// posiciona e, inSaque
    return;
  }
  // Verifica se saque não é múltiplo de 10
  if (saque % 10 != 0) {
    alert("Valor inválido para notas disponíveis (R$ 10,  50, 100)");
    inSaque.focus();
    return;
  }

  //calcula notas de 100, 50 e 10

  let notasCem = Math.floor(saque / 100);
  let resto = saque % 100;
  let notasCinquenta = Math.floor(resto / 50);
  resto = resto % 50;
  let notasDez = Math.floor(resto / 10);
  // Exibe as notas apenas se houverhttps://sass-lang.com/install/

  if (notasCem > 0) {
    outNotasCem.textContent = "Notas de 100: " + notasCem;
  }
  if(notasCinquenta > 0) {
    outNotasCinquenta.textContent = "Notas de 50: " + notasCinquenta;
  }
  if(notasDez > 0) {
    outNotasDez.textContent = "Notas de 10: " + notasDez;
}
  // cria referência ao elemento btExibir e associa function ao evento click
  const btExibir = document.getElementById("btExibir");
  btExibir.addEventListener("click", calcularNotas);

  