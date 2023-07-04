const formulario = document.querySelector("form")
const tabela = document.querySelector("table")

// funcoes

function inserirLinha(titulo, genero){
    
    const linha = tabela.insertRow(-1) //insere uma linha no final da tabela

    const col1 = linha.insertCell(0) //cria colunas na linha inserida
    const col2 = linha.insertCell(1)
    const col3 = linha.insertCell(2)

    col1.innerText = titulo //adiciona conteudo em cada cedula
    col2.innerText = genero
    col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008</i>"

}


function gravarFilme(titulo, genero){
    if(localStorage.getItem("filmesTitulo")){
        const filmesTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo
        const filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero
        localStorage.setItem("filmesTitulo", filmesTitulo)
        localStorage.setItem("filmesGenero", filmesGenero)
    }else {
        localStorage.setItem("filmesTitulo", titulo)
        localStorage.setItem("filmesGenero", genero)
    }
}

//eventos

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const titulo = formulario.inTitulo.value.toUpperCase()
    const genero = formulario.inGenero.value.toUpperCase()

    inserirLinha(titulo, genero) //chama function que insere filmes na tabela
    gravarFilme(titulo, genero) //chama function que grava dados no localStorage

    formulario.reset() //limpa campos do form
    formulario.inTitulo.focus() //posiciona cursor no campo de titulo
})

window.addEventListener("load", () => {
    if(localStorage.getItem("filmesTitulo")){
        //converte elementos em vetor a cada ";"
        const titulos = localStorage.getItem("filmesTitulo").split(";")
        const generos = localStorage.getItem("filmesGenero").split(";")
    
        //percorre os elementos do vetor e os insere na tabela atraves da function inserirLinha()
        for(let i = 0; i < titulos.length; i++){
            inserirLinha(titulos[i], generos[i])
        }
    }
})

tabela.addEventListener("click", (e) => {
    //se a classe do elemento alvo clicado contem exclui
    if(e.target.classList.contains("exclui")) {
        //acessa o pai do pai do elemento alvo e obtem o texto do primeiro filho
        const titulo = e.target.parentElement.parentElement.children[0].innerText

        if(confirm(`Confirma Exclusão do Filme "${titulo}"?`)){
            //remove a linha da tabela correspondente ao simbolo excluir clicado
            e.target.parentElement.parentElement.remove()
        
            localStorage.removeItem("filmesTitulo")
            localStorage.removeItem("filmesGenero")
        }

        //salva novamente (se existir), acessando o conteudo da tabela
        for(let i = 1; i < tabela.rows.length; i++){
            //obtem o conteudo da tabela (coluna 0; titulo; coluna 1; genero)
            const auxTitulo = tabela.rows[i].cells[0].innerText
            const auxGenero = tabela.rows[i].cells[1].innerText
            gravarFilme(auxTitulo, auxGenero)
        }
    }
})
