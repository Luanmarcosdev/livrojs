const formulario = document.querySelector("form")
const resposta = document.querySelector("pre")

const itens = []

//evento para quando pizza estiver selecionado ocultar opcoes de bebidas
formulario.rbPizza.addEventListener("click", () => {
    formulario.inBebida.className = "oculta"
    formulario.inPizza.className = "exibe"
    formulario.inDetalhes.focus()
})

//evento para quando bebidas estiver selecionado ocultar opcoes de pizzas
formulario.rbBebida.addEventListener("click", () => {
    formulario.inBebida.className = "exibe"
    formulario.inPizza.className = "oculta"
    formulario.inDetalhes.focus()
})

//evento para dar dica de preenchimento de campo quando o botao Pizza está selecionado
formulario.inDetalhes.addEventListener("focus", () => {
    if(formulario.rbPizza.checked){
    const pizza = formulario.inPizza.value
    let numero = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4
    formulario.inDetalhes.placeholder = `Até ${numero} sabores`
    }
})

//evento para "limpar" as dicas se nao estiver com o campo selecionado
formulario.inDetalhes.addEventListener("blur", () => {
    formulario.inDetalhes.placeholder = ""
})

//funcao principal "submit"

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    
    let produto = ""
    if(formulario.rbPizza.checked){
        let tamanho = formulario.inPizza.value
        const descricao = formulario.inDetalhes.value
        tamanho == "media" ? tamanho = "Pizza Média" : tamanho == "grande" ? tamanho = "Pizza Grande" : tamanho = "Pizza Família"
        produto = `${tamanho} (${descricao})`
    }
    else{
        let tamanho = formulario.inBebida.value
        const descricao = formulario.inDetalhes.value
        tamanho == "refri" ? tamanho = "Refrigerante Litro" : tamanho == "suco" ? tamanho = "Jarra de Suco" : tamanho = "Água Mineral"
        produto = `${tamanho} (${descricao})`
    }
    
    itens.push(produto)
    resposta.innerText = itens.join("\n")

    formulario.reset()
    formulario.rbPizza.dispatchEvent(new Event("click"))
})