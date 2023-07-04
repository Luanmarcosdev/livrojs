const formulario = document.querySelector("form")
const divNome = document.querySelector("#divNome")

//funcoes

function coresAleatorias(){
    const rgba1 = Math.ceil(Math.random() * 255)
    const rgba2 = Math.ceil(Math.random() * 255)
    const rgba3 = Math.ceil(Math.random() * 255)
    const cor = `rgb(${rgba1}, ${rgba2}, ${rgba3})`
    return cor
}

//eventos


formulario.addEventListener("submit", (e) => {

    e.preventDefault()
    
    //remove h3 já existentes na pagina
    const listaH3 = document.querySelectorAll("h3")
    for(let i = listaH3.length - 1; i >= 0; i--){
        divNome.removeChild(listaH3[i])
    }

    const nome = formulario.inNome.value.trim() //remove espaco no comeco e no final do nome

    //verifica se há espaço entre palavras 
    if(!nome.includes(" ")){
        alert("Digite o nome completo.")
        return
    }
    
    //transforma em vetor a cada ocorrencia de " "
    const vetorNome = nome.split(" ")
    const tamanho = vetorNome.length
    
    let nomeColorido
    for(let i = 0; i < tamanho; i++){
        nomeColorido = vetorNome[i] + "\n"
        const h3 = document.createElement("h3")
        const texto = document.createTextNode(nomeColorido)
        divNome.appendChild(h3)
        h3.appendChild(texto)
        h3.style.color = coresAleatorias()
    }
})