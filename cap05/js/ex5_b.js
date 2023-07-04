const formulario = document.querySelector("form")
const resp = document.querySelector("#outResp")

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const chinchilas = Number(formulario.inNumero.value)
    const anos = Number(formulario.inAnos.value)

    let resposta = "" 
    let quantidade = chinchilas // variavel acumuladora

    for (let i = 1; i <= anos; i++){
        resposta+= i + "º Ano: " + quantidade + " Chinchilas" + "\n"
        quantidade = quantidade * 3
    }

    resp.innerText = resposta
})