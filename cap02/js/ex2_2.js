//cria referencia ao form e ao h3 e h4 (respostas)

const formulario = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

// acao quando o submit for clicado

formulario.addEventListener("submit", (e) => {
    const titulo = formulario.inTitulo.value  //obtem conteudo dos campos
    const duracao = Number(formulario.inDuracao.value)

    const horas = Math.floor(duracao / 60) //arredonda pra baixo o resultado
    const minutos = duracao % 60 // obtem o resto da divisao, ou seja, os minutos

    resp1.innerText = titulo     //exibe as respostas
    resp2.innerText = `O filme tem duraçao de: ${horas} horas e ${minutos} minutos`

    e.preventDefault()

})