const formulario = document.querySelector("form")
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDicas = document.querySelector("#outDicas")

const erros = [] //vetor global com os numeros já apostador
const sorteado = Math.floor(Math.random()*100)+1 //numero aleatório entre 1 e 100
const chances = 6  //constante com o número maximo de chancer

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const numero = Number(formulario.inNumero.value) //obtem o numero digitado pelo usuário
    
    if (numero == sorteado){  //se acertou
        respDicas.innerText = `Parabéns você acertou!! Número sorteado ${sorteado}`
        formulario.btSubmit.disabled = true //troca status dos botoes
        formulario.btNovo.className = "exibe"
    }
    else{ //se nao acertou
        if (erros.includes(numero)) { //se o numero já existe no array (se já foi digitado antes)
        alert("Você já digitou o número " + numero + " .Tente outro" )
        } else {
            erros.push(numero)  //adiciona o numero no final do vetor
            const numErros = erros.length //obtem o tamanho do vetor
            const numChances = chances - numErros
            respErros.innerText = `${numErros} (${erros.join(", ")})`
            respChances.innerText = numChances
            if (numChances == 0){
                alert("Suas chances acabaram...")
                formulario.btSubmit.disabled = true //troca status dos botoes
                formulario.btNovo.className = "exibe"
                respDicas.innerText = `Game Over!! Número sorteado: ${sorteado}`
            }
            else {
                const dica = numero < sorteado ? "maior" : "menor" //se o numero digitado for menor que o sorteado
                respDicas.innerText = `Tente um numero ${dica} do que ${numero}`
            }
        }
    }

    formulario.inNumero.value = ""
    formulario.inNumero.focus()
})

formulario.btNovo.addEventListener("click", () => {
    location.reload()
})

