const formulario = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

//funcoes
function retornarTracos(nome){
    const nomeCopia = nome.toLowerCase().substr() //transforma todas letras em minusculas
    const tracos = nomeCopia.replace(/[a-z]/g, "-") //pega todas letras minusculas entre A e Z e troca por hifen 
    return tracos

}

function categorizarAluno(idade){
    const categoria = idade <= 12 ? "Infantil" : idade <= 18 ? "Juvenil" : "Adulto"
    return categoria 
}

//programa principal
formulario.addEventListener("submit", (e) => {

    e.preventDefault()
    const nome = formulario.inNome.value
    const idade = Number(formulario.inIdade.value)
    const categoria = categorizarAluno(idade)
    const tracos = retornarTracos(nome)

    resp1.innerText = `${nome}\n${tracos}`
    resp2.innerText = `Categoria: ${categoria}` 
})