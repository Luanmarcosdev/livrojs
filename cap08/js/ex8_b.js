const formulario = document.querySelector("form")
const resposta = document.querySelector("h3")

//funcoes

function validarNome(nome){
    const nomeCompleto = nome.includes(" ")
    return nomeCompleto
}

function obterSobrenome(nome){
    const nomeVetor = nome.toLowerCase().split(" ")
    const tamanho = nomeVetor.length
    const sobrenome = nomeVetor[tamanho - 1]
    return sobrenome    
}

 function contarVogais(nome){
    const minusculo = nome.toLowerCase()
    const tamanho = minusculo.length
    let contador = 0
    for(i=0;i<tamanho;i++){
        if(minusculo.charAt(i) == "a" ||minusculo.charAt(i) == "e" ||minusculo.charAt(i) == "i" ||minusculo.charAt(i) == "o"||minusculo.charAt(i) == "u"){
            contador+=1
        }
    }
    const vogais = contador < 10 ? "0" + contador : contador
    return vogais
}


//programa principal

formulario.addEventListener("submit", (e) => {

    e.preventDefault()
    const nome = formulario.inNome.value

    if(!validarNome(nome)){
        alert("Digite o nome completo do aluno.")
        formulario.inNome.focus()
        return
    }

    const sobrenome = obterSobrenome(nome)
    const contadorVogais = contarVogais(nome)

    resposta.innerText = `Senha Inicial : ${sobrenome}${contadorVogais}`

})


