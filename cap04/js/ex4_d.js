const formulario = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

formulario.addEventListener("submit", (e) => {

    e.preventDefault(e)

    const ladoA = Number(formulario.inLadoA.value)
    const ladoB = Number(formulario.inLadoB.value)
    const ladoC = Number(formulario.inLadoC.value)

    if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoB + ladoA){
        resp1.innerText = `Lados não podem formar um triângulo`
        resp2.innerText = ``
    }
    else {
        resp1.innerText = `Lados podem formar um triângulo`
        
        if (ladoA == ladoB && ladoA == ladoC){
            resp2.innerText = `Tipo: Equilátero`
        }

        else if (ladoA == ladoB || ladoB == ladoC || ladoC == ladoA){
            resp2.innerText = `Tipo: Isósceles`
        }

        else {
            resp2.innerText = `Tipo: Escaleno`
        }
    }
})

