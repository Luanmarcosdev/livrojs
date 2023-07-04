const formulario = document.querySelector("form")
const resp = document.querySelector("#outResp")

formulario.addEventListener("click", (e) => {

    e.preventDefault()

    const senha = formulario.inSenha.value

    const erros = []

    if(senha.length<8 || senha.length>15){//verifica se tamanho da senha é valido
        erros.push("entre 8 e 15 caracteres")
    }

    if(senha.match(/[0-9]/g)==null){//verifica se senha possui numeros
        erros.push("no mínimo, um número")
    }

    if(!senha.match(/[a-z]/g)){//verifica se senha possui letra minuscula
        erros.push("no mínimo, uma letra minúscula")
    }
    
    if(senha.match(/[A-Z]/g)==null|| senha.match(/[A-Z]/g)==1){//verifica se senha possui letra maiuscula
        erros.push("no mínimo, duas letras maiúsculas")
    }
    
    if(!senha.match(/\W|_/g)){//verifica se senha possui simbolos
        erros.push("no mínimo, um símbolo")
    }
    
    if(erros.length==0){//se vetor está vazio(sem erros)
        resp.innerText = "Ok! Senha Válida!"
    } else{
        resp.innerText = "Erro... A senha deve possuir, " + erros.join(", ")
    }
    


})