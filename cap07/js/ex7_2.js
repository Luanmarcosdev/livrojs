const formulario = document.querySelector("form")  //obtem os elementos da pagina
const resp = document.querySelector("#outResp")

formulario.addEventListener("click", (e) => { //adiciona evento click ao botao submit

    e.preventDefault() //evita envio do form
    
    const fruta = formulario.inNome.value.toUpperCase() //pega o conteudo digitado e tranforma em letras maisculas

    let resposta = ""
    for(const letra of fruta){
        if(letra==fruta.charAt(0)){ //se letra é igual a inicial da string 
            resposta+=fruta.charAt(0)// mostra letra
        }
        else{ //senao...
            resposta+=" _ " // adiciona hifen nas demais letras
        }
    }

    resp.innerText = resposta
    formulario.inNome.value = "*".repeat(fruta.length)
})