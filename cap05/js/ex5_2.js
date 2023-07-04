const formulario = document.querySelector("form")
const resp = document.querySelector("h3")

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const numero = Number(formulario.inNumero.value)
    let resposta = `Entre ${numero} e 1: `
    let i = numero
    
    
    while (i>1){  //enquanto
        resposta += i + "," 
        i--
    }
    
    // for (let i = numero; i > 0; i = i - 1){
    //     if (i == 1){
    //         resposta = resposta + i + "."
    //     }
    //     else {
    //         resposta = resposta + i + ","
    //     }
    // }

    resp.innerText = resposta + "1."
})