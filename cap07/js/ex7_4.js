const formulario = document.querySelector("form")
const resp = document.querySelector("#outResp")

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const nome = formulario.inNome.value.trim() //obtem nome e retira espaco em branco no comeco e no final da string

    if (!nome.includes(" ")){ //se nome nao possui espaco
        alert('Informe o nome completo...')
        return
    }

    const primeiroNome = nome.indexOf(" ") //posicao do primeiro espaço
    const ultimoNome = nome.lastIndexOf(" ")//posicao do ultimo espaço

    const cracha = nome.substr(0,primeiroNome) + nome.substr(ultimoNome)

    resp.innerText = "Crachá: " + cracha

})