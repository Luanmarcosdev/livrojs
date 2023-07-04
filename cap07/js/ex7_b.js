const formulario = document.querySelector("form")
const resp = document.querySelector("#outResp")

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const frase = formulario.inFrase.value.toUpperCase()
    const frase2 = frase.replace(/ /g, "")//retira espacos da string
    const tamanho = frase.length - 1
    
    let comparacao = ""
    for(i = tamanho; i >= 0; i--){
        comparacao+= frase2.charAt(i)
    }

    if(comparacao == frase2){
        resp.innerText = `${frase} é um Palindromo`
    }
    else{
        resp.innerText = `${frase} não é um Palindromo`
    }
})