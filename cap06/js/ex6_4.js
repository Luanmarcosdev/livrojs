const formulario = document.querySelector("form")
const resposta = document.querySelector("#outResp")

const criancas = []

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const nome = formulario.inNome.value
    const idade = Number(formulario.inIdade.value)

    criancas.push({nome, idade})

    formulario.inNome.value = ""
    formulario.inIdade.value = ""
    formulario.inNome.focus()

    formulario.btListar.dispatchEvent(new Event("click"))
            
})

formulario.btListar.addEventListener("click", () =>{

    if (criancas.length == 0){
        alert('Não há crianças cadastradas para listar.')
        return
    }

    let lista = ""
    for(const crianca of criancas){
        lista += `${crianca.nome} - ${crianca.idade} anos\n`
    }
    
    resposta.innerText = lista
})

formulario.btResumir.addEventListener("click", () => {
    
    if (criancas.length == 0){
        alert('Não há crianças cadastradas para listar.')
        return
    }

    const copiaCriancas = [...criancas]
    copiaCriancas.sort((a,b) => a.idade - b.idade)
    
    let aux = copiaCriancas[0].idade
    let nomes = []
    let resumo = ""
    for(const crianca of copiaCriancas){
        const {nome, idade} = crianca
        if (crianca.idade == aux){
            nomes.push(nome)
        }

        else{
            resumo += `${aux} ano(s): ${nomes.length} crianças - ${((nomes.length/copiaCriancas.length)*100).toFixed(2)}%\n(${nomes.join(", ")})\n\n`
            aux = idade
            nomes = []
            nomes.push(nome)
        }
    }
    
    resumo += `${aux} ano(s): ${nomes.length} crianças - ${((nomes.length/copiaCriancas.length)*100).toFixed(2)}%\n(${nomes.join(", ")})\n\n`

    resposta.innerText = resumo
})