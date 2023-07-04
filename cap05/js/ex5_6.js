const formulario = document.querySelector("form")
const resp = document.querySelector("h3")

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const numero = Number(formulario.inNumero.value)

    //let numDivisores = 0
    // for (let i = 1; i <= numero; i = i + 1){
    //     if (numero % i == 0){
    //         numDivisores = numDivisores + 1
    //     }
    //         if (numDivisores == 2){
    //             resp.innerText = numero + " é primo"
    //         }
    //         else{
    //             resp.innerText = numero + " não é primo"
    //         }
    // }

    let temDivisor = 0
    for (let i = 2; i <= numero / 2; i++){
        if (numero % i == 0){
            temDivisor = 1
            break
        }
    }

    if (numero > 1 && temDivisor == 0){
        resp.innerText = numero + " é primo"
    }
    else{
        resp.innerText = numero + " não é primo"
    }
})

