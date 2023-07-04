const formulario = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

formulario.addEventListener("submit", (e) => {

    const produto = formulario.inProduto.value
    const preco = Number(formulario.inPreco.value)

    const promocao = (preco * 2) + (preco * 0.5)
    const precoTerceiro = (preco * 0.5)

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$ ${promocao.toFixed(2)}`
    resp2.innerText = `O terceiro produto custa apenas ${precoTerceiro.toFixed(2)}`

    e.preventDefault()
})