const formulario = document.querySelector("form")
const resp = document.querySelector("h3")

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const nome = formulario.inFruta.value
    const quantidade = Number(formulario.inNumero.value)

    let resposta = ""

    for(let i = 1; i <= quantidade; i++){
        if (i == quantidade){
            resposta+= nome 
        }
        else{
            resposta+=nome + " * "
        }
    }

    resp.innerText = resposta
})