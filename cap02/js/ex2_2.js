// cria referencia ao form e aos elementos h3 e h4 (resposta)
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

// cria um "ouvinte" de evento, acionando quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  const titulo = frm.inTitulo.value // obtem conteudo dos campos
  const duracao = Number(frm.inDuracao.value)

  const horas = Math.floor(duracao / 60) //arredonda para baixo os resultados
  const minutos = duracao % 60          //obtem o resto da divisao

  resp1.innerText = titulo  // exibe as respostas
  resp2.innerText = `${horas} horas(s) e ${minutos} minutos(s)`

  e.preventDefault()   // evita o envio de form
})