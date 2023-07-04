const formulario = document.querySelector("form")
const resp = document.querySelector("h3")

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const numero = Number(formulario.inNumero.value)
    const raiz = Math.sqrt(numero)
    if (Number.isInteger(raiz)){
        resp.innerText = `Raiz: ${raiz}`
    }
    else {
        resp.innerText = `Não há raiz exata para ${numero}`
    }
    
})