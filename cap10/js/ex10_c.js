const formulario = document.querySelector("form")
const divJogos = document.querySelector("#divJogos")

const clubes = [] //vetor global

//funcoes

function criarTabela(clubes){
    //cria titulo da tabela
    const h3 = document.createElement("h3")
    const texto = document.createTextNode("Tabela de Jogos")
    divJogos.appendChild(h3)
    h3.appendChild(texto)
    //cria tabela
    const tabela = document.createElement("table")
    divJogos.appendChild(tabela)
    tabela.className = "table table-striped"
    //laço para adicionar linhas e colunas na tabela
    let linha
    for(let i = 0; i < clubes.length; i++){
        if(i % 2 == 0){
            linha = tabela.insertRow(-1)
            const col1 = linha.insertCell(0)
            col1.textContent = clubes[i]
        }
        else{
            const col2 = linha.insertCell(1)
            col2.textContent = clubes[i]
        }
    }

}

//eventos

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const clube = formulario.inClube.value
    clubes.push(clube)
    const texto = document.createTextNode(clube)
    const h5 = document.createElement("h5")
    h5.appendChild(texto)
    divJogos.appendChild(h5)
    h5.style.fontStyle = "italic"
    h5.className = "text-end me-2"

    formulario.inClube.value = ""

})

formulario.btMontar.addEventListener("click", () => {

    if(clubes.length % 2 != 0 || clubes.length == 0){
        alert(`Impossivel montar tabela com ${clubes.length} clubes.`)
        return
    }

    criarTabela(clubes)
})

formulario.addEventListener("reset", () => {
    window.location.reload()
})