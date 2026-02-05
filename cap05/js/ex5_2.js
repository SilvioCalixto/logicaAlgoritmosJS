const frm = document.querySelector("form"); // obtém elementos da página
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault()                         //evita envio do form
  const numero = Number(frm.inNumero.value)  // obtém número informado
  let resposta = `Entre número ${numero} e 1: ` //String para montar a resposta
  for (let i = numero; i > 1; i--){             //cria um for decrescente
      resposta = resposta + i + ", ";
  }
  resposta = resposta + "1."
  resp.innerText = resposta;                    //Exibe  a resposta
})