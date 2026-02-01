//criar referecia ao form e ao elemento h3 (onde sera exibida a resposta)

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//cria um "ouvinte" de evento, adicionando quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  const nome = frm.inNome.value // obtém o nome digitado no form
  resp.innerText = `Olá ${nome}` //exibe a resposta do programa
  e.preventDefault() //evita envio do form

  // const resp = document.querySelector("h3")  //primeiro elemento h3 da página
  // const cor = document.querySelector("#inCor") //elemento com id=inCor
  // const lista = document.querySelector(".lista") //elemento da class=lista

  // podemos armazenar a referencia a um elemento e depois obter a sua propriedade 
  // const frm = document.querySelector("form")
  // const nome = frm.inNome.value

  // Ou então podemos utilizar um unico comando
  // const nomes = document.querySelector("form").inNome.value
  /*Para criar um evento e definir o que será executado quando esse evento ocorrer, deve utilizar uma palavra reservada, por exemplo,
  submit, change, click, blur ou load.
  */

  // frm.addEventListener("submit", (e) => { comandos })

})