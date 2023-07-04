const formulario = document.querySelector("form")
const resp = document.querySelector("h3")

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const nome = formulario.inNome.value
    const masculino = formulario.inMasculino.checked //retorna true or false
    const altura = Number(formulario.inAltura.value)

    let peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2)

    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)}`
   
})

formulario.addEventListener("reset", () => {
    resp.innerText = ""
    //window.location.reload()
})