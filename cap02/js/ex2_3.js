//cria referencia ao form e ao h3 e h4 (respostas)

const formulario = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")
const resp3 = document.querySelector("h5")

// acao quando o submit for clicado

formulario.addEventListener("submit", (e) => {
    const veiculo = formulario.inVeiculo.value  //obtem conteudo dos campos
    const valor = Number(formulario.inPreco.value)

    const entrada = valor * 0.5 //arredonda pra baixo o resultado
    const saldo = (valor * 0.5) / 12 // obtem o resto da divisao, ou seja, os minutos

    resp1.innerText = veiculo    //exibe as respostas
    resp2.innerText = `Entrada de R$ ${entrada}`
    resp3.innerText = `+ 12x de R$ ${saldo.toFixed(2)}`

    e.preventDefault()

})