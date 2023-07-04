const formulario = document.querySelector("form")
const divIdade = document.querySelector("#divIdade")

//funcoes

function adicionarImagem(numero){
    const imagem = document.createElement("img")
    imagem.src = "./img/" + numero + ".jpg" 
    imagem.className = `imagem${numero}`
    divIdade.appendChild(imagem)
}

//eventos
formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const idade = formulario.inIdade.value
    
    const tamanho = idade.length

    if(tamanho > 1){
        let numero
        for(let i = 0; i < tamanho; i++){
            numero = idade.charAt(i)
            adicionarImagem(numero)
        }
    }else{
        adicionarImagem(idade)
    }
})

formulario.addEventListener("reset" , () => {
    window.location.reload()
})