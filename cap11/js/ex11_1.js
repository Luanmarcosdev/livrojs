const formulario = document.querySelector("form")
const respostaLista = document.querySelector("pre")
const respostaCavalo = document.querySelector("#outCavalo")

const CAVALOS = ["Marujo", "Todinho", "Belga", "Twister", "Jade", "Lucky"]

//vetor que irá armazenar um objeto (num cavalo e valor da aposta)
const apostas = []

//funcoes

function obterCavalo(num){
    const posicao = num - 1
    return CAVALOS[posicao] //retorna o nome do cavalo do numero escolhido
}

function validarCavalo(num){
    if(num >= 1 && num <= CAVALOS.length){
        return true
    }
    else{
        return false
    }
}

function contarApostas(num){
    let contador = 0

    for(const aposta of apostas){
        if(aposta.cavalo == num){
            contador++ //soma +1 quando aposta for no cavalo do parametro
        }
    }
    return contador
}

function totalizarApostas(num){
    let total = 0
    
    for(const aposta of apostas){
        if(aposta.cavalo == num){
            total+= aposta.valor
        }
    }
    return total //retorna a soma dos valores apostados no número do cavalo
}

//eventos
formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const cavalo = Number(formulario.inCavalo.value)
    const valor = Number(formulario.inValor.value)

    //adiciona ao vetor de objetos (atributos cavalo e valor)
    apostas.push({cavalo, valor})

    let lista = `Apostas Realizadas\n${"-".repeat(25)}\n`

    for(const aposta of apostas){
        lista+=`Nº ${aposta.cavalo} ${obterCavalo(aposta.cavalo)}`
        lista+=` - R$ ${aposta.valor.toFixed(2)}\n`
    }

    respostaLista.innerText = lista
    formulario.reset()
    formulario.inCavalo.focus()
})

formulario.inCavalo.addEventListener("blur", () => {
    
    if(formulario.inCavalo.value == ""){
        respostaCavalo.innerText = ""
        return
    }

    const cavalo = Number(formulario.inCavalo.value)

    if(!validarCavalo(cavalo)){
        alert(`Nº do cavalo inválido`)
        formulario.inCavalo.focus()
        return
    }

    const nome = obterCavalo(cavalo)
    const contaNum = contarApostas(cavalo)
    const total = totalizarApostas(cavalo)

    respostaCavalo.innerText = `${nome} (Apostas: ${contaNum} - R$: ${total.toFixed(2)})`

})

formulario.inCavalo.addEventListener("focus", () => {
    respostaCavalo.innerText = ""
    formulario.inCavalo.value = ""
})

formulario.btResumo.addEventListener("click", () => {

    const somaApostas = [0, 0, 0, 0, 0, 0]

    for(const aposta of apostas){
        somaApostas[aposta.cavalo - 1]+= aposta.valor
    }

    let resposta = `Nº Cavalo................... R$ Apostado\n${"-".repeat(35)}\n`
    CAVALOS.forEach((cavalo, i) => {
        resposta+= `${i + 1} ${cavalo.padEnd(20)}`
        resposta+= `${somaApostas[i].toFixed(2).padStart(11)}\n`
    })

    respostaLista.innerText = resposta
})

formulario.btGanhador.addEventListener("click", () => {

    const ganhador = Number(prompt(`Nº do Cavalo Ganhador:`))

    if(isNaN(ganhador) || !validarCavalo(ganhador)){
        alert(`Cavalo Inválido`)
        return
    }

    const total = apostas.reduce((acumulador, aposta) => acumulador + aposta.valor, 0)

    let resumo = `Resumo Final do Páreo\n${"-".repeat(30)}\n`
    resumo+= `Nº Total de Apostas: ${apostas.length}\n`
    resumo+= `Total Geral R$: ${total.toFixed(2)}\n\n`
    resumo+= `Ganhador Nº ${ganhador} ${obterCavalo(ganhador)}\n\n`
    resumo+= `Nº de Apostas: ${contarApostas(ganhador)}\n`
    resumo+= `Total Apostado: ${totalizarApostas(ganhador).toFixed(2)}`

    respostaLista.innerText = resumo

    formulario.btApostar.disable = true
    formulario.btGanhador.disable = true
    formulario.btNovo.focus()

})

formulario.btNovo.addEventListener("click", () =>{
    window.location.reload()
})