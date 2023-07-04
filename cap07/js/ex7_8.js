const formulario = document.querySelector("form")

const taxaMulta = 2/100     //multa por atraso
const taxaJuros = 0.33/100  //juros por dia de atraso

formulario.addEventListener("submit", (e) => {

    e.preventDefault()
    const dataVencimento = formulario.inData.value
    const valor = Number(formulario.inValor.value)
    const hoje = new Date()
    const vencimento = new Date()

    const partes = dataVencimento.split("-") //data vem no formato aaaa-mm-dd
    vencimento.setFullYear(Number(partes[0]))
    vencimento.setMonth(Number(partes[1])-1)
    vencimento.setDate(Number(partes[2]))

    const atraso = hoje - vencimento //calcula a diferença de dias entre as datas em ms
    let multa = 0
    let juros = 0

    if(atraso>0){
        const dias = atraso/86400000  //1 dia é 86.400.000ms
        multa = valor * taxaMulta
        juros = valor * taxaJuros * dias
    }

    const total = valor + multa + juros

    formulario.outMulta.value = multa.toFixed(2)
    formulario.outJuros.value = juros.toFixed(2)
    formulario.outTotal.value = total.toFixed(2)

})