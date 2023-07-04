const formulario = document.querySelector("form")
const resposta = document.querySelector("#outResp")

const candidatos = []

formulario.addEventListener("submit", (e) => {

    e.preventDefault()
    
    //obtem nomes e acertos dos candidatos
    const nome = formulario.inNome.value
    const acerto = Number(formulario.inAcertos.value)
    
    //adiciona informacoes obtidas no vetor
    candidatos.push({nome, acerto})
    
    //limpa campos do formulario e posiciona cursor
    formulario.inNome.value = ""
    formulario.inAcertos.value = ""
    formulario.inNome.focus()
    
    //dispara botao de listar todos candidatos para ir exibindo quando for adicionando
    formulario.btListar.dispatchEvent(new Event("click"))
})

formulario.btListar.addEventListener("click", () => {
    //se vetor estiver vazio
    if (candidatos.length == 0){
        alert('Não há candidatos para exibir')
        formulario.inNome.focus()
    }
    
    //percorre o vetor e exibe
    let lista = "" 
    for(const candidato of candidatos){
        lista+= `${candidato.nome} - ${candidato.acerto} acertos\n`
    }

    resposta.innerText = lista
})

formulario.btAprovados.addEventListener("click", () => {
    
    //se vetor estiver vazio
    if (candidatos.length == 0){
        alert('Não há candidatos para exibir')
        formulario.inNome.focus()
    }
    //obtem numero de acertos para aprovação
    const numAcertos = Number(prompt('Numeros de acertos para aprovação?'))
    
    if(numAcertos == 0 || isNaN(numAcertos)){
        alert('Número invalido.')
        return
    }

    const copiaCandidatos = [...candidatos]
    
//percorre o vetor e exibe
    copiaCandidatos.sort((a, b) => a.acerto - b.acerto)
    copiaCandidatos.reverse()

    const aprovados = copiaCandidatos.filter(num => num.acerto >= numAcertos)
    if(aprovados.length == 0){
        resposta.innerText = "Não há candidatos aprovados"
        return
    }
    let lista = ""
    for(const aprovado of aprovados){
        lista+= `${aprovado.nome} - ${aprovado.acerto} acertos\n`
    }
    resposta.innerText = lista
    
})