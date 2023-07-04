const formulario = document.querySelector("form")
const resp = document.querySelector("h3")

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const velocidadePermitida = Number(formulario.inPermitida.value)
    const velocidadeCondutor = Number(formulario.inCondutor.value)

    if (velocidadeCondutor < velocidadePermitida) {
        alert(`Sua velocidade era ${velocidadeCondutor}km/h e você não ultrapassou a velocidade permitida que é de ${velocidadePermitida}km/h`)
    }
    
    const verificacao = (velocidadeCondutor / velocidadePermitida) - 1

    if (verificacao >= 0.20) {
        resp.innerText = `Multa Grave`
    }
    
    else {
        resp.innerText = `Multa Leve`
    }


})