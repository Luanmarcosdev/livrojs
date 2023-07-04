const formulario = document.querySelector("form")
const resp = document.querySelector("h3")

formulario.addEventListener("submit", (e) =>{

    e.preventDefault()

    const numero = Number(formulario.inNumero.value)
    let resposta = ""
    for (let i = 1; i <=10; i++) {
        resposta = resposta + numero + "x" + i+ "=" + (numero * i) + "\n"
    }

    resp.innerText = resposta
})