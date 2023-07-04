const formulario = document.querySelector("form")
const resposta = document.querySelector("#outLista")

//funcoes

function adicionarProduto(produto){
    
    const produtos = localStorage.getItem("produtos") + ";" + produto
    localStorage.setItem("produtos", produtos)
    formulario.inProduto.value = ""
    formulario.inProduto.focus()
    listaProduto()
   
}


function listaProduto(){
    
    const produtos = localStorage.getItem("produtos").split(";")
    
    let lista = "Produtos Adicionaos\n--------------------------------------------------------\n"

    for(let i = 1 ; i < produtos.length; i++){
        lista+= produtos[i].toUpperCase() + "\n"
    }

    resposta.innerText = lista
}


//eventos

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const produto = formulario.inProduto.value

    adicionarProduto(produto)
})


formulario.btLimpar.addEventListener("click", () => {

    if(!localStorage.getItem("produtos")){
        alert("Não há produtos cadastrados na lista.")
    }


    else if(confirm("Deseja mesmo apagar a lista?")){
        localStorage.removeItem("produtos")
        resposta.innerText = ""
    }
    
})

window.addEventListener("load",listaProduto)