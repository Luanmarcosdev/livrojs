const formulario = document.querySelector("form")
const resposta = document.querySelector("#outResp")

clubes = []

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const nomeClube = formulario.inNome.value
    //adiciona clube no final do vetor
    clubes.push(nomeClube)
    //limpa campo de texto e posiciona cursor novamente nele
    formulario.inNome.value = ""
    formulario.inNome.focus()
    //dispara botao Listar Clubes para já ir mostrando clubes adicionados
    formulario.btListar.dispatchEvent(new Event("click"))

})

formulario.btListar.addEventListener("click", () => {
    // se tamanho do vetor for 0
    if (clubes.length == 0){ 
        alert('Não há clubes cadastrados para listar.')
        return
    }
    //percorre os elementos do vetor
    let lista = "" 
    for(clube of clubes){ 
        lista += clube + "\n"
    }

    resposta.innerText = lista
})

formulario.btTabela.addEventListener("click", () => {
    //se numero de clubes nao é par
    if (clubes.length % 2 != 0){ 
        alert('Impossivel montar tabela de jogos com o número atual de clubes!')
        return
    }
    else{
        const ultimo = clubes.length - 1 // tamanho do vetor -1, pois eu quero o indice do ultimo, e a contagem do vetor começa em 0
        let tabela = ""
        for (i = 0; i < clubes.length/2; i++){ // tamanho do vetor /2 pois sao confronte entre dois times
            tabela+= clubes[i] + " x " + clubes[(ultimo-i)] + "\n"
        }
        
        resposta.innerText = tabela
    }
})