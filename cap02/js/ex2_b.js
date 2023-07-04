//cria referencia ao form e ao h3 e h4 (respostas)

const formulario = document.querySelector("form")
const resp = document.querySelector("h3")

// acao quando o submit for clicado

formulario.addEventListener("submit", (e) => {
    const valor = Number(formulario.inValor.value)  //obtem conteudo dos campos
    const tempo = Number(formulario.inTempo.value)

    const total = Math.ceil(tempo / 15) * valor 

    resp.innerText = `Valor a pagar R$: ${total.toFixed(2)}`

    e.preventDefault()

})