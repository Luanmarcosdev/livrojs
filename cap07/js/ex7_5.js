const formulario = document.querySelector("form")
const resp = document.querySelector("#outResp")

formulario.addEventListener("click", (e) => {

    e.preventDefault()

    const funcionario = formulario.inFuncionario.value.trim().toLowerCase()//obtem o nome, tira os espacos do comeco e do final e transforma tudo em minusculo

    if (!funcionario.includes(" ")){//se nome nao possui espaco
        alert('Informe o nome completo do funcionário...')
        return
    }

    const partes = funcionario.split(" ")//a cada espaco adiciona um item no vetor partes
    const tamanho = partes.length//obtem tamanho do vetor

    let email = ""
    for(i=0;i<tamanho-1;i++){//percorre os item do vetor menos o ultimo
        email+=partes[i].charAt(0)//obtem itens do vetor e a primeira letra
    }

    email+=partes[tamanho-1]+"@empresa.com.br"//concatena os valores do laço juntamento com o ultimo nome e o @

    resp.innerText = "E-mail: "+email

})