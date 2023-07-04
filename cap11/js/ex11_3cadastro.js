const formulario = document.querySelector("form")

formulario.addEventListener("submit", (e) => {

    e.preventDefault()

    const palavra = formulario.inPalavra.value.trim() //tira espacos do comeco e do final
    const dica = formulario.inDica.value

    if(palavra.includes(" ")){
        alert(`Insira uma palavra válida, sem espaços`)
        formulario.inPalavra.value = ""
        formulario.inPalavra.focus()
        return
    }

    // se já existem dados no local storage, grava conteudo anterior + ";" + palavra / dica
    if(localStorage.getItem("palavraJogo")){
        localStorage.setItem("palavraJogo", localStorage.getItem("palavraJogo") + ";" + palavra)
        localStorage.setItem("dicaJogo", localStorage.getItem("dicaJogo") + ";" + dica)
    }
    // senao, é a primeira inclusao, grava apenas palavra / dica
    else{
        localStorage.setItem("palavraJogo", palavra)
        localStorage.setItem("dicaJogo", dica)
    }

    if(localStorage.getItem("palavraJogo")){
        alert(`Ok! Palavra ${palavra} salva com sucesso!`)
    }

    formulario.reset()
    formulario.inPalavra.focus()
})