const formulario = document.querySelector("form")
const resp = document.querySelector("h3")

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const numero = Number(formulario.inNumero.value)
    
    if (numero % 2 != 0){
        resp.innerText = `${numero} é impar`
    }

    else {
        resp.innerText = `${numero} é par`
    }
})