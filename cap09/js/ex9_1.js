const formulario = document.querySelector("form")
const imgClube = document.querySelector("#imgClube")
const titulo = document.querySelector("#divTitulo")

//funcoes 
 function trocarClube() {
    let clube //variavel que recebe o nome do clube

    if (formulario.rbBrasil.checked){
        clube = "Brasil"
    } else if (formulario.rbPelotas.checked){
        clube = "Pelotas"
    } else {
        clube = "Farroupilha"
    }

    //define as classes de titulo: row e cores clubes
    titulo.className = `row cores-${clube}`

    //modifica a imagem de acordo com a selecao do cliente
    imgClube.src = `./img/${clube.toLowerCase()}.png` 
    imgClube.className = "img-fluid" //muda o estilo para exibir a imagem
    imgClube.alt = `Simbolo do ${clube}` //modifica o atributo alt

    localStorage.setItem("clube", clube) //salva no navegador a escolha do cliente
}

function verificarClube() {
    if(localStorage.getItem("clube")){
        const clube = localStorage.getItem("clube")

        if(clube=="Brasil"){
            formulario.rbBrasil.checked = true
        } else if(clube=="Pelotas"){
            formulario.rbPelotas.checked = true
        } else {
            formulario.rbFarroupilha.checked = true
        }
        trocarClube()
    }
}


// associa o evento change de cada botao do form a funcao trocarClube

formulario.rbBrasil.addEventListener("change", trocarClube)
formulario.rbPelotas.addEventListener("change", trocarClube)
formulario.rbFarroupilha.addEventListener("change", trocarClube)

//ao carregar a página verifica se cliente já selecionou clube anteriormente
window.addEventListener("load", verificarClube)