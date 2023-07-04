const formulario = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const dataInfracao = formulario.inData.value
    const multa = Number(formulario.inMulta.value)
    const dataDesconto = new Date()

    //obtem as partes da data da multa 
    const partes = dataInfracao.split("-") //data aaaa-mm-dd
    
    //seta as partes das datas
    dataDesconto.setFullYear(Number(partes[0]))
    dataDesconto.setMonth(Number(partes[1]))
    dataDesconto.setDate(Number(partes[2]))

    const dia = dataDesconto.getDate() //obtem o dia da multa
    dataDesconto.setDate(dia + 90) // 90 dias após a multa
    const mes = dataDesconto.getMonth()
    const ano = dataDesconto.getFullYear()
    
    const desconto = multa - (multa * (20/100))

    resp1.innerText = `Data Limite para Pagamento com Desconto: ${dia < 10? "0" + dia : dia}/${mes < 10 ? "0" + mes : mes}/${ano}.`
    resp2.innerText = `Valor com desconto R$: ${desconto.toFixed(2)}`

})