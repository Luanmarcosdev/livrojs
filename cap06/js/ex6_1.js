const formulario = document.querySelector("form")
const respNome = document.querySelector("#outAtendimento")
const respLista = document.querySelector("#outPacientes")

const pacientes = []

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const nome = formulario.inPaciente.value // obtem o nome do paciente
    pacientes.push(nome) //adiciona um paciente no final do vetor
    let lista = "" //string para concatenar pacientes
    
    //for (i=0; i<pacientes.length; i++){  //inicia em 0 pois é onde começa o vetor e vai ate o total de pacientes
    //    lista = lista + `${i+1}. ${pacientes[i]}\n` //cria uma lista com o numero do paciente e seu nome
    //}
    pacientes.forEach((paciente, i) => {
        lista+=`${i+1}. ${paciente}\n`
    })

    respLista.innerText = lista  //exibe a lista de pacientes na pagina
    formulario.inPaciente.value = "" //limpa o conteudo
    formulario.inPaciente.focus() //posiciona o cursor no campo
})

formulario.btUrgencia.addEventListener("click", () => {  //adiciona um "ouvindo" para evento click no botao Urgencia
    if(!formulario.checkValidity()){ //caso nao tenha um nome digitado
        alert("Informe o nome do paciente a ser atendido em carater de urgência.")
        formulario.inPaciente.focus() //posiciona o cursor no inPaciente
        return //retorna ao form
    }

    const nome = formulario.inPaciente.value  //recebe o nome do paciente
    pacientes.unshift(nome) //adiciona paciente no inicio do vetor
    let lista = ""  // string para concatenar pacientes

    pacientes.forEach((paciente, i) => (lista = lista + `${i+1}. ${pacientes[i]}\n`))
    
    respLista.innerText = lista //exibe a lista de pacientes
    formulario.inPaciente.value = "" //limpa o conteudo
    formulario.inPaciente.focus() //posiciona o cursor no campo
})

formulario.btAtender.addEventListener("click", () => {
    if (pacientes.length == 0){
        alert("Não há pacientes na lista de espera")
        formulario.inPaciente.focus() //posiciona o cursor no inPaciente
        return
    }
   
    const atender = pacientes.shift()//remove do inicio da fila e obtem nome
    respNome.innerText = "Em atendimento: " + atender
    let lista = ""
    pacientes.forEach((paciente, i) => (lista = lista + `${i+1}. ${pacientes[i]}\n`))
    respLista.innerText = lista
})