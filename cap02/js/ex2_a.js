//cria referencia ao form e ao h3 e h4 (respostas)

const formulario = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")


// acao quando o submit for clicado

formulario.addEventListener("submit", (e) => {
    const medicamento = formulario.inMedicamento.value  //obtem conteudo dos campos
    const preco = Number(formulario.inPreco.value)

    const promocao = Math.floor(preco * 2)

    //exibe as respostas
    resp1.innerText = `Promoção de ${medicamento}`
    resp2.innerText = `Leve 2 por apenas ${promocao.toFixed(2)}`

    e.preventDefault()

})