const formulario = document.querySelector("form")
const resp1 = document.querySelector("h4")
const resp2 = document.querySelector("h3")

let resposta = ""
let numeroContas = 0
let valorContas = 0

formulario.addEventListener("submit", (e) => {

    e.preventDefault()
    const descricao = formulario.inDescricao.value
    const valor = Number(formulario.inValor.value)

    valorContas += valor
    resposta += descricao + "- R$: " + valor.toFixed(2) + "\n"
    numeroContas++ 

    resp1.innerText = resposta + "---------------------------------------"
    resp2.innerText = numeroContas + " Conta(s) - Total R$: " + valorContas.toFixed(2)

    formulario.inDescricao.value = ""
    formulario.inValor.value = ""
    formulario.inDescricao.focus()
})

