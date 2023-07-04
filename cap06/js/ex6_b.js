const formulario = document.querySelector("form")
const resposta1 = document.querySelector("#outResp1")
const resposta2 = document.querySelector("#outResp2")
//declara vetor global
const numeros = []

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const num = Number(formulario.inNumero.value)
    //se numero já foi digitado exibe mensagem de erro se nao adiciona no final do vetor
    if (numeros.includes(num)){
        alert('Este número já foi digitado, digite outro.')
    }
    else{
        numeros.push(num)
    }
    //limpa campo e posiciona cursor
    formulario.inNumero.value = ""
    formulario.inNumero.focus()
    //exibe numeros adicionados no vetor
    resposta1.innerText = "Numeros: " + numeros.join(", ")
})

formulario.btOrdem.addEventListener("click", () => {
    //se o vetor está vazia
    if(numeros.length == 0){
        alert('Não há numeros na lista.')
        formulario.inNumero.focus()
    }
    //cria cópia do vetor e organiza copia em ordem crescente
    let numerosOrdem = [...numeros] 
    numerosOrdem = numerosOrdem.sort((a, b)=> a - b)
    //verifica de vetor original possui a mesma ordem do novo vetor
    for(i=0; i<numeros.length; i++){
        if (numeros[i] == numerosOrdem[i]){
            resposta2.innerText = "Os números estão em ordem crescente."
        }
        else{
            resposta2.innerText = "Atenção... Números não estão em ordem crescente."
        }
    }
})