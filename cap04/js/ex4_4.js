const formulario = document.querySelector("form")
const resp = document.querySelector("h3")

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const horaBrasil = Number(formulario.inHora.value)

    let horaFranca = horaBrasil + 5

        if (horaFranca>19){
           horaFranca = horaFranca - 24
        }
    
    resp.innerText = `Hora na França: ${horaFranca.toFixed(2)}`
})