//cria referencia ao form e ao h3 e h4 (respostas)

const formulario = document.querySelector("form")
const resp1 = document.querySelector("#resposta")

// acao quando o submit for clicado

formulario.addEventListener("submit", (e) => {
    const preco = Number(formulario.inPreco.value)  //obtem conteudo dos campos
    const consumo = Number(formulario.inConsumo.value)

    const total = (preco * consumo) / 1000

    resp1.innerText = `Valor a pagar R$: ${total.toFixed(2)}`

    e.preventDefault()

})