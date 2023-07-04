const formulario = document.querySelector("form")
const divMoedas = document.querySelector("#divMoedas")

//funcoes

function criarMoedas(num, moeda, textoAlt, classe){
    //laço para inserir varias imagens de moedas na pagina 
    for( let i = 1; i <= num; i++){
        const novaMoeda = document.createElement("img") //cria elemento img
        novaMoeda.src = "img/" + moeda
        novaMoeda.alt = textoAlt
        novaMoeda.className = classe
        divMoedas.appendChild(novaMoeda)
    }
    const br = document.createElement("br")
    divMoedas.appendChild(br)
}


//eventos

window.addEventListener("load", () => {
    
    // gera numeros aleatorios, entre 1 e 5, para cada moeda

    const num1_00 = Math.ceil(Math.random() * 5)
    const num0_50 = Math.ceil(Math.random() * 5)
    const num0_25 = Math.ceil(Math.random() * 5)
    const num0_10 = Math.ceil(Math.random() * 5)

    // define texto alternativo das imagens (acessibilidade)

    const alt1_00 = "Moedas de um real"
    const alt0_50 = "Moedas de cinquenta centavos"
    const alt0_25 = "Moedas de vinte e cinco centavos"
    const alt0_10 = "Moedas de dez centavos"

    // chama o método criarMoedas passando os argumentos

    criarMoedas(num1_00, "1_00.jpg", alt1_00, "moeda1-00")
    criarMoedas(num0_50, "0_50.jpg", alt0_50, "moeda0-50")
    criarMoedas(num0_25, "0_25.jpg", alt0_25, "moeda0-25")
    criarMoedas(num0_10, "0_10.jpg", alt0_10, "moeda0-10")
})

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const resposta = Number(formulario.inSoma.value)
   
    const moedas = divMoedas.querySelectorAll("img")
    
    let totalMoedas = 0
    for(const moeda of moedas){
        if(moeda.className == "moeda1-00"){
            totalMoedas+=1
        }
        else if(moeda.className == "moeda0-50"){
            totalMoedas+=0.5
        }
        else if(moeda.className == "moeda0-25"){
            totalMoedas+=0.25
        }
        else{
            totalMoedas+=0.1
        }
    }

    const div = document.createElement("div")
    const h3 = document.createElement("h3")

    let mensagem
    if(resposta == totalMoedas.toFixed(2)){
        div.className = "alert alert-success"
        mensagem = "Parabéns!! Você acertou!"
    }
    else{
        div.className = "alert alert-danger"
        mensagem = `Ops... A resposta correta é ${totalMoedas.toFixed(2)}`
    }

    const texto = document.createTextNode(mensagem)
    h3.appendChild(texto)
    div.appendChild(h3)
    divMoedas.appendChild(div)

    formulario.submit.disabled = true

})

formulario.addEventListener("reset", () => {
    window.location.reload()
})
