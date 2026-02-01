function calcularMedia() {
  const inNome = document.getElementById("inNome");
  const inPrimeiraNota = document.getElementById("inPrimeiraNota");
  const inSegundaNota = document.getElementById("inSegundaNota");
  const outMedia = document.getElementById("outMedia");
  const outMensagem = document.getElementById("outMensagem");

  const nome = inNome.value;
  const primeiraNota = Number(inPrimeiraNota.value);
  const segundaNota = Number(inSegundaNota.value);

  const media = (primeiraNota + segundaNota) / 2;
  outMedia.textContent = `Média das Notas: ${media.toFixed(1)}`;
  outMedia.style.color = media >= 7 ? "blue" : "red";
  outMensagem.textContent = media >= 7
    ? `Parabéns ${nome}! Você foi aprovado(a)`
    : `Ops... ${nome}, você foi reprovado(a)`;
  if (media > 7.0) {
    outMensagem.style.color = "blue";
  } else {
    outMensagem.style.color = "red";
  }

}


const btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularMedia);