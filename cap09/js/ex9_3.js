const formulario = document.querySelector("form")
const resposta = document.querySelector("pre")

//funcoes

const verApostaExiste = (peso) => {
    if(localStorage.getItem("melanciaPeso")){
        //obtem seu conteudo e a string é dividida em itens de vetor a cada ";"
        const pesos = localStorage.getItem("melanciaPeso").split(";")
        return pesos.includes(peso.toString())
    }
    else{
        return false
    }
}

const mostrarApostas = () => {
    //se nao há apostas armazenadas em localStorage
    if(!localStorage.getItem("melanciaNome")){
        resposta.innerText = ""
        return //retorna (nao executa os comanddos abaixo)
    }
    
    //obtem o conteudo das variaveis salvas no localStorage, separando-as em
    //elementos de vetor a cada ";"
    const nomes = localStorage.getItem("melanciaNome").split(";")
    const pesos = localStorage.getItem("melanciaPeso").split(";")

    //loop para percorrer todos os itens do vetor e ir acumulando na variavel linhas
    let linhas = ""
    for(let i = 0 ; i < nomes.length ; i++ ){
        linhas+= nomes[i] + " - " + pesos[i] + "gr \n"
    }
    
    resposta.innerText = linhas
}


window.addEventListener("load", mostrarApostas)

formulario.addEventListener("submit", (e) => {

    e.preventDefault

    const nome = formulario.inNome.value
    const peso = Number(formulario.inPeso.value)
    
    //chama funcao que verifica se peso já foi apostado
    if(verApostaExiste(peso)){
        alert("Alguem já apostou esse peso, informe outro")
        formulario.inPeso.focus()
        return
    }

    if(localStorage.getItem("melanciaNome")){//se houver dados em localStorage
        //obtem o conteudo já salvo e acrescenta ";" + dados da aposta
        const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome
        const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso
        localStorage.setItem("melanciaNome", melanciaNome)  //salva os dados
        localStorage.setItem("melanciaPeso", melanciaPeso)
    }
    else{
        localStorage.setItem("melanciaNome", nome)
        localStorage.setItem("melanciaPeso", peso)
    }

    mostrarApostas()
    formulario.reset()
    formulario.inNome.focus()
})

formulario.btVencedor.addEventListener("click", () => {
    //se nao há apostas armazenadas em localStorage
    if(!localStorage.getItem("melanciaNome")){
        alert("Não há apostas cadastradas")
        return //retorna (nao executa o resto dos comandos abaixo)
    }

    //solicita o peso correto da melancia
    const pesoCorreto = Number(prompt("Qual o peso correto da Melancia?"))

    //se nao informou, retorna
    if(pesoCorreto==0 || isNaN(pesoCorreto)){
        return
    }

    //obtem os dados armazenados, separando-os em elementos de vetor 

    const nomes = localStorage.getItem("melanciaNome").split(";")
    const pesos = localStorage.getItem("melanciaPeso").split(";")

    //valor inicial para vencedor é o da primeira aposta
    let vencedorNome = nomes[0]
    let vencedorPeso = Number(pesos[0])

    //percorre as apostas

    for(let i = 1; i < nomes.length; i++){
        const difVencedor = Math.abs(vencedorPeso - pesoCorreto)
        const difAposta = Math.abs(Number(pesos[i] - pesoCorreto))
        if(difAposta < difVencedor){
            vencedorNome = nomes[i]
            vencedorPeso = pesos[i] 
        }
    }

    let mensagem = `Resultado - Peso Correto: ${pesoCorreto}gr`
    mensagem+= `\n--------------------------------------------------`
    mensagem+= `\n Vencedor: ${vencedorNome}`
    mensagem+= `\n Aposta: ${vencedorPeso}gr`

    alert(mensagem)
})

formulario.btLimpar.addEventListener("click", () => {

    if(confirm("Confirma exclusão de todas as apostas?")){
        localStorage.removeItem("melanciaNome")
        localStorage.removeItem("melanciaPeso")
        mostrarApostas()
    }
})