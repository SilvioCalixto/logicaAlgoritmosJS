const frm = document.querySelector("form") //obtém elementos da página
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {    //"escuta" evento submit do form
  e.preventDefault()                       //evita o envio do form
  const numero = Number(frm.inNumero.value)//obtem o número informado
  let resposta = ""                        //variável do tipo string, para concatenar a resposta
  // cria um laço de repetição(i começa em 1 e é incrementado até 10)
  for (let i = 1; i <= 10; i++) {
    //a variável resposta vai acumulando os novos conteúdos (nos 2 formatos)
    resposta = resposta + numero + " X " + i + " = " + (numero * i) + "\n"
    //resposta = `${resposta}${numero} X ${i} = ${numero * i}\n`
  }
  //O conteudo da tag pre é alterado pra exibir a tabuada do numero
  resp.innerText = resposta
})