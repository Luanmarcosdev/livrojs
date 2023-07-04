const formulario = document.querySelector("form")
const divQuadro = document.querySelector("#divQuadro")

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const tarefa = formulario.inTarefa.value //obtem o conteudo digitado
 
    const h5 = document.createElement("h5") // cria o elemento HTML H5
    const texto = document.createTextNode(tarefa) // cria um texto a partir do conteudo obtido
    h5.appendChild(texto) // define que texto será filho de h5
    divQuadro.appendChild(h5) //define que h5 será filho de divQuadro

    formulario.inTarefa.value = ""
    formulario.inTarefa.focus()
})

formulario.btSelecionar.addEventListener("click", () => {

    const tarefas = document.querySelectorAll("h5")

    if(tarefas.length == 0){
        alert("Não há tarefas para selecionar") // se nao há tarefas exibe alerta
        return
    }

    let aux = -1 // variavel auxiliar para indicar linha selecionada

    for(let i = 0; i < tarefas.length; i++){
        if(tarefas[i].className == "tarefa-selecionada"){
            tarefas[i].className = "tarefa-normal"
            aux = i
            break
        }
    }

    if(aux == tarefas.length - 1){
        aux = -1
    }

    tarefas[aux+1].className = "tarefa-selecionada"
})

formulario.btRetirar.addEventListener("click", () => {

    const tarefas = document.querySelectorAll("h5")

    let aux = -1

    tarefas.forEach((tarefa, i) => {
        if(tarefa.className == "tarefa-selecionada"){
            aux = i
        }
    })

    if(aux == -1){
        alert("Selecione uma tarefa para removê-la...")
        return
    }

    if(confirm(`Confirmar Exclusão de "${tarefas[aux].innerText}"?`)){
        divQuadro.removeChild(tarefas[aux])
    }
})

formulario.btGravar.addEventListener("click", () => {

    const tarefas = document.querySelectorAll("h5")

    if(tarefas.length == 0){
        alert("Não há tarefas para serem salvas")
        return
    }

    let dados = ""
    for(let tarefa of tarefas){
        dados+=tarefa.innerText + ";"
    }
    
    localStorage.setItem("tarefasDia", dados.slice(0, -1))

    if(localStorage.getItem("tarefasDia")){
        alert("Ok! Tarefas Salvas")
    }

})

window.addEventListener("load", () => {

    if(localStorage.getItem("tarefasDia")){
        const dados = localStorage.getItem("tarefasDia").split(";")
        
        dados.forEach(dado => {
            const h5 = document.createElement("h5")
            const texto = document.createTextNode(dado)
            h5.appendChild(texto)
            divQuadro.appendChild(h5)
        })
    }
})
