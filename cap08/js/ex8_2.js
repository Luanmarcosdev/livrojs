const formulario = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

// funcao para classificar o veiculo quanto ao ano
function classificaVeiculo(ano){
    const anoAtual = new Date().getFullYear()
    let classificacao = ""
    if(ano==anoAtual){
        classificacao = "NOVO"
    }
    else if(ano == anoAtual - 1||ano == anoAtual - 2 ){
        classificacao = "SEMINOVO"
    }
    else {
        classificacao = "USADO"
    }
    return classificacao
}

//funcao para determinar a entrada do veiculo 
function entradaVeiculo(preco, classificacao){
    let valorEntrada
    if(classificacao == "NOVO"){
        valorEntrada = preco * 0.5
    }
    else{
        valorEntrada = preco * 0.3
    }
    return valorEntrada
}

//programa principal
formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const modelo = formulario.inModelo.value.toUpperCase()
    const ano = Number(formulario.inAno.value)
    const preco = Number(formulario.inPreco.value)
    const classificacao = classificaVeiculo(ano)
    const entrada = entradaVeiculo(preco, classificacao)
    const parcelas = (preco - entrada) / 10

    resp1.innerText = `${modelo} - ${classificacao}`
    resp2.innerText = `Entrada R$: ${entrada.toFixed(2)}`
    resp3.innerText = `+10x de R$: ${parcelas.toFixed(2)}`
})