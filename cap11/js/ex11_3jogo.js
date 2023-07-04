const formulario = document.querySelector("form")
const respPalavra = document.querySelector("#outPalavra")
const respChances = document.querySelector("#outChances")
const respErros = document.querySelector("#outErros")
const imgSituacaoJogador = document.querySelector("img")
const respDica = document.querySelector("#outDica")
const msgFinal = document.querySelector("#outMensagemFinal")

let palavraSorteada // variaveis globais
let dicaSorteada

//funcoes

function trocarStatus(chances) {
    
    if(chances > 0){
        imgSituacaoJogador.src = `img/status${chances}.jpg`
    }
}

function verificarFim(){
    
    const chances = Number(respChances.innerText)
    
    if(chances == 0){
        msgFinal.className = "display-3 text-danger"
        msgFinal.innerText = `Ah... é ${palavraSorteada}. Você Perdeu!`
        concluirJogo()
    }
    else if(respPalavra.innerText == palavraSorteada){
        msgFinal.className = "display-3 text-primary"
        msgFinal.innerText = "Parabéns!!! Você Ganhou."
        trocarStatus(4)
        concluirJogo()
    }
}

function concluirJogo() {
    respDica.innerText = `Clique no botão 'Iniciar Jogo' para jogar novamente`
    formulario.inLetra.disabled = true
    formulario.btJogar.disabled = true
    formulario.btVerDica.disabled = true
}


//eventos
window.addEventListener("load", () => {
   
    if(!localStorage.getItem("palavraJogo")){
        alert(`Cadastre palavras para jogar`)
        formulario.inLetra.disabled = true
        formulario.btJogar.disabled = true
        formulario.btVerDica.disabled = true
    }

    const palavras = localStorage.getItem("palavraJogo").split(";")
    const dicas = localStorage.getItem("dicaJogo").split(";")

    const tamanho = palavras.length
    
    //gera um numero aleatorio entre 0 e tamanho -1 (pois math.floor() arredonda para baixo)
    const numAleatorio = Math.floor(Math.random() *  tamanho)

    palavraSorteada = palavras[numAleatorio].toUpperCase()
    dicaSorteada = dicas[numAleatorio] 


    let novaPalavra = "" 
    for(const letra of palavraSorteada){
        if(letra == palavraSorteada.charAt(0)){
            novaPalavra += letra
        }
        else{
            novaPalavra+= "_"
        }
    }

    respPalavra.innerText = novaPalavra
})

formulario.btVerDica.addEventListener("click", () => {
    
    if(respErros.innerText.includes("*")){
        alert(`Você já solicitou a dica...`)
        formulario.inLetra.focus()
        return
    }

    respDica.innerText = "*" + dicaSorteada
    respErros.innerText += "*"

    const chances = Number(respChances.innerText) - 1 //diminui 1 em chances
    respChances.innerText = chances
    
    trocarStatus(chances) //troca a imagem
    verificarFim() //verifica se atingiu limite de chances

    formulario.inLetra.focus()
})

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const letra = formulario.inLetra.value.toUpperCase()

    let erros = respErros.innerText
    let palavra = respPalavra.innerText

    if(erros.includes(letra) || palavra.includes(letra)){
        alert(`Você já apostou essa letra`)
        formulario.inLetra.focus()
        return
    }

    if(palavraSorteada.includes(letra)){
        
        let novaPalavra = ""
        
        for(let i = 0; i < palavraSorteada.length; i++){
            if(palavraSorteada.charAt(i) == letra){
                novaPalavra+= letra
            }
            else{
                novaPalavra+= palavra.charAt(i)
            }
        }
        respPalavra.innerText = novaPalavra
    } 
    else{
        respErros.innerText+= letra
        const chances = Number(respChances.innerText) - 1
        respChances.innerText = chances
        trocarStatus(chances)
    }


    verificarFim()

    formulario.inLetra.value = ""
    formulario.inLetra.focus()
})