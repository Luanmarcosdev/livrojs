const formulario = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const numero = Number(formulario.inNumero.value)

    let soma = 1 //acumulador
    let divisores = ""

    for(i=2; i<=numero/2; i++){
        if (numero % i == 0){
            divisores+= ", " + i
            soma+= i
        }
    }

    resp1.innerText = `Divisores do ${numero}: 1${divisores} (Soma: ${soma})`

    if (soma == numero){
        resp2.innerText = `${numero} é um numero perfeito.`
    }
    else{
        resp2.innerText = `${numero} não é um numero perfeito.`
    }

})