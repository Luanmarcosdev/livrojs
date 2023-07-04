const tabela = document.querySelector("table")
const mostrar = document.querySelector("input[type='checkbox']")

function montarTabela(){
    
    if(localStorage.getItem("palavraJogo")){
        
        const palavras = localStorage.getItem("palavraJogo").split(";")
        const dicas = localStorage.getItem("dicaJogo").split(";")

        for(let i = 0; i <= palavras.length -1; i++){
            const linha = tabela.insertRow(-1) //adiciona uma linha no final da tabela

            const col1 = linha.insertCell(0) //cria colunas na linha inserida
            const col2 = linha.insertCell(1)
            const col3 = linha.insertCell(2)

            col1.innerText = palavras[i]
            col2.innerText = dicas[i]
            col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008;</i>"
        }
    }
}

mostrar.addEventListener("change", () => {
    mostrar.checked ? montarTabela() : window.location.reload()
})

tabela.addEventListener("click", (e) => {

    if(e.target.classList.contains("exclui")){
        
        const palavra = e.target.parentElement.parentElement.children[0].innerText
        
        if(confirm(`Confirma Exclusão da Palavra ${palavra}`)){
            e.target.parentElement.parentElement.remove()

            localStorage.removeItem("palavraJogo")
            localStorage.removeItem("dicaJogo")

            const palavras = []
            const dicas = []

            for(let i = 1; i < tabela.rows.length; i++){
                palavras.push(tabela.rows[i].cells[0].innerText)
                dicas.push(tabela.rows[i].cells[1].innerText)
            }

            localStorage.setItem("palavraJogo", palavras.join(";"))
            localStorage.setItem("dicaJogo", dicas.join(";"))
        }
    }
})