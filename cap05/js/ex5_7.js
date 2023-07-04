const formulario = document.querySelector("form")
const resp = document.querySelector("h3")

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const numero = Number(formulario.inNumero.value)

    let resposta = ""
    for (i = 1; i <= numero; i++){
        if (i % 2 == 1){ // se i é impar
            resposta+="*"
        } 
        else{
            resposta+="-"
        }
    }
    
    resp.innerText = resposta
})