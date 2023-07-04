const formulario = document.querySelector("form")
const resposta = document.querySelector("#outResp")

const carros = []

formulario.addEventListener("submit", (e) => { //bt adicionar

    e.preventDefault()

    const modelo = formulario.inModelo.value
    const preco = Number(formulario.inPreco.value)

    carros.push({modelo, preco}) //adicionar categorias modelo e preço na lista carros

    formulario.inModelo.value = ""
    formulario.inPreco.value = ""

    formulario.inModelo.focus()

    formulario.btLista.dispatchEvent(new Event("click")) // dispara um click no botao Listar na pagina   

})

formulario.btLista.addEventListener("click", () => {
    if (carros.length == 0){
        alert("Não há carros cadastrados para listar")
        return
    }
   
    const lista = carros.reduce((acumulador, carro) =>
        acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n", "")
    
    //maneira alternativa
    //let lista = ""
    //carros.forEach((carro) => lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`)


    resposta.innerText = `Lista dos Carros Cadastrados\n${"-".repeat(40)}\n${lista}`

})

formulario.btFiltro.addEventListener("click", () => {
    if (carros.length == 0){
        alert("Não há carros cadastrados para filtrar")
        return
    }

    const maximo = Number(prompt('Qual é o valor maximo que o cliente deseja pagar?'))

    if (maximo == 0 || isNaN(maximo)){
        alert('Número invalido')
        return
    }

    const carrosFilter = carros.filter(carro => carro.preco <= maximo)
    
    if (carrosFilter.length == 0){
        alert('Não há carros com preço inferior ou igual ao solicitado')
        return
    }

    let lista= ""
    for (const carro of carrosFilter){
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }

    resposta.innerText = `Carros até : ${maximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`

})

formulario.btPromocao.addEventListener("click", () => {

    const desconto = Number(prompt('Qual o percentual de desconto?'))

    if (desconto == 0 || isNaN(desconto)){
        alert('Valor digitado é invalido')
        return
    }

    let lista = ""
    for (const carro of carros){
        lista += `${carro.modelo} - R$: ${carro.preco-(carro.preco*(desconto/100))}.00\n`
    }

    resposta.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`

})