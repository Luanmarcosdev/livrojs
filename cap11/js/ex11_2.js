const formulario = document.querySelector("form")
const divPalco = document.querySelector("#divPalco")

const POLTRONAS = 240 //numero de poltronas do teatro
const reservadas = [] //poltronas reservadas pelos clientes

window.addEventListener("load", () => {
    //operador ternario se houver dados faz um split e adiciona dados no array
    //se nao deixa o array vazio
    const ocupadas = localStorage.getItem("teatroOcupadas") ? 
    localStorage.getItem("teatroOcupadas").split(";") : []

    for(let i = 1; i <= POLTRONAS; i++){
        const figure = document.createElement("figure")
        const imgStatus = document.createElement("img")

        //se a posicao consta em ocupadas, exibe a imagem ocupada, senao, disponivel

        imgStatus.src = ocupadas.includes(i.toString()) ? "img/ocupada.jpg" : "img/disponivel.jpg"

        imgStatus.className = "poltrona"
        const legenda = document.createElement("figcaption") //cria figcaption (legenda)

        //quantidade de zeros antes do numero da poltrona

        const zeros = i < 10 ? "00" : i < 100 ? "0" : ""

        const num = document.createTextNode(`${zeros}${i}`) // cria texto

        legenda.appendChild(num)
        figure.appendChild(imgStatus)
        figure.appendChild(legenda)

        // se i modulo 24 == 12 (é corredor: define margem a direita 60px)
        if(i % 24 == 12){
            figure.style.marginRight = "60px"
        }

        divPalco.appendChild(figure)

        //
        if(i % 24 == 0){
            divPalco.appendChild(document.createElement("br"))
        }
}
})

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const poltrona = Number(formulario.inPoltrona.value)

    if(reservadas.includes(poltrona)){
        alert(`A poltrona ${poltrona} já está reservada...`)
        formulario.inPoltrona.focus()
        formulario.inPoltrona.value = ""
        return
    }
    
    if(poltrona > POLTRONAS){
        alert(`Informe um número de poltrona válido`)
        formulario.inPoltrona.value = ""
        formulario.inPoltrona.focus()
        return
    }

    const ocupadas = localStorage.getItem("teatroOcupadas") ? 
    localStorage.getItem("teatroOcupadas").split(";") : []

    //se poltrona escolhida já está ocupada

    if(ocupadas.includes(poltrona.toString())){
        alert(`Poltrona ${poltrona} já está ocupada...`)
        formulario.inPoltrona.value = ""
        formulario.inPoltrona.focus()
        return
    }

    const imgPoltrona = divPalco.querySelectorAll("img")[poltrona-1]
    imgPoltrona.src = "img/reservada.jpg"
    reservadas.push(poltrona)

    formulario.inPoltrona.value = ""
    formulario.inPoltrona.focus()
})

formulario.btConfirmar.addEventListener("click", () => {
    
    if(reservadas.length == 0){
        alert(`Não há poltronas reservadas`)
        formulario.inPoltrona.focus()
        return
    }

    const ocupadas = localStorage.getItem("teatroOcupadas") ? 
    localStorage.getItem("teatroOcupadas").split(";") : []

    for(let i = reservadas.length - 1; i >= 0; i--){
        ocupadas.push(reservadas[i])

        const imgPoltrona = divPalco.querySelectorAll("img")[reservadas[i] - 1]

        imgPoltrona.src = "img/ocupada.jpg"
    
        reservadas.pop() //remove do vetor a reserva já alterada
    }

    localStorage.setItem("teatroOcupadas", ocupadas.join(";"))
})

