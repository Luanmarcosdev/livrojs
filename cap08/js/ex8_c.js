const formulario = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

//funcoes
function calcularDesconto(preco, taxaDesconto){
    const desconto = preco * taxaDesconto
    return desconto
}

//eventos
formulario.rbSim.addEventListener("click", () => {
    pConvenio.className = "exibe-linha"   
})

formulario.rbNao.addEventListener("click", () => {
    pConvenio.className = "oculta"   
})

formulario.addEventListener("submit", (e) => {

    e.preventDefault()
    const preco = Number(formulario.inPreco.value)
    
    let taxaDesconto
    if(formulario.rbSim.checked){
        if(formulario.selConvenio.value == "amigoAnimal"){
            taxaDesconto = 0.2
        }
        else{
            taxaDesconto = 0.5
        }
    }
    else{
        taxaDesconto = 0.1
    }

    const desconto = calcularDesconto(preco, taxaDesconto)
    
    resp1.innerText = `Desconto R$: ${desconto.toFixed(2)}`
    resp2.innerText = `A Pagar: R$: ${(preco-desconto).toFixed(2)}`
    
    
})