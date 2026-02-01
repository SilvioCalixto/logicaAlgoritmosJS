function calcularPeso() {
  // cria referência aos elementos manipulados pela function
  const inNome = document.getElementById("inNome");
  const rbMasculino = document.getElementById("rbMasculino");
  const rbFeminino = document.getElementById("rbFeminino");
  const inAltura = document.getElementById("inAltura");
  const outResposta = document.getElementById("outResposta");

  //obtém o conteúdo dos campos de edição da página
  const nome = inNome.value;
  const masculino = rbMasculino.checked;
  const feminino = rbFeminino.checked;
  const altura = Number(inAltura.value);

  //verifica se nome foi preenchido e sexo selecionado

  if(nome == "" || (masculino == false && feminino == false)) {
    alert("Por favor, informe o nome e selecione o sexo...");
    inNome.focus();// Posiciona no campo de edição inNome
    return;
  }

  //se altura vazio (0) ou NaN: Not a Number(Um texto for informado por exemplo)
  if(inAltura.value == "" || isNaN(altura) || altura <= 0) {
    alert("Por favor, informe a altura correta...");
    inAltura.focus();
    return;
  }
  // se masculino (significa se masculino == true)
  let peso;
  if(masculino) {
     peso = 22 * Math.pow(altura,2); // Math.pow eleva ao quadrado
  } else {
     peso = 21 * Math.pow(altura,2);
  }

  // apresenta a resposta(altera o conteúdo da linha outReposta)
  outResposta.textContent = nome + ": Seu peso ideal é " + peso.toFixed(3) + " kg";
}
  //cria referência ao elemento btCalcular e registra o elemento associado a calcularPeso

  const btCalcular = document.getElementById("btCalcular");
  btCalcular.addEventListener("click", calcularPeso);
