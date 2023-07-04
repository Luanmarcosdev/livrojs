const formulario = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const valor = Number(formulario.inValor.value)
    if (valor < 1.00){
        alert("Valor insuficiente. Mínimo R$ 1.00")
        formulario.inValor.value = ""
        formulario.inValor.focus()
        return
    }

    let tempo
    let troco 

    if (valor >= 3.00){
        tempo = 120
        troco = valor - 3.00
    }

    else if (valor >=1.75){
        tempo = 60
        troco = valor - 1.75
    }

    else {
        tempo = 30
        troco = valor - 1.00
    }

    resp1.innerText = `Tempo: ${tempo}min`

    if (troco > 0){
        resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
    } 
    else{
        resp2.innerText = ``
    }   

})