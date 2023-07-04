const formulario = document.querySelector("form")
const resp = document.querySelector("#outResp")

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const mensagem = formulario.inMensagem.value//obtem as mensagem e retira os espacos em branco no comeco e no final
    const tamanho = mensagem.length
    
    let criptografada = ""
    for(i = 0; i < tamanho; i = i + 2){
        criptografada+=mensagem.charAt(i)
    }
    for(i = 1; i < tamanho; i = i + 2){
        criptografada+=mensagem.charAt(i)
    }
    
    resp.innerText= criptografada
})

formulario.btDescriptografar.addEventListener("click", () => {
    
    if(!formulario.checkValidity()){
        alert('Informe a mensagem criptografada')
        formulario.inMensagem.focus()
        return
    }

    const mensagem = formulario.inMensagem.value
    
    resp.innerText = mensagem
    

})