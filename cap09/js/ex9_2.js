//cria referencia aos objetos da pagina

const inRadios = document.querySelectorAll("input")//captura tags input da página

//percorre os elementos para associar funcion ao evento change
for (const inRadio of inRadios){
    inRadio.addEventListener("change", trocarClube)
}

//ao carregar a pagina verifica se o cliente já selecionou clube anteriormente

window.addEventListener("load", verificarClube)

//funcoes
function trocarClube(){
    const clubes = ["Brasil", "Pelotas", "Farroupilha"]

    let selecao
    //percorre os inRadios para verificar qual está selecionado
    for (let i = 0 ; i<inRadios.length; i++){
        if(inRadios[i].checked){
            selecao = i
            break
        }
    }

    if (selecao <= 2){//significa que usuario selecionou algum clube
        divTitulo.className = `row cores-${clubes[selecao]}`//modifica a cor
        //muda a propriedade src de acordo com a imagem do clube selecionado
        imgClube.src= `./img/${clubes[selecao].toLowerCase()}.png`
        imgClube.alt= `Imagem do escudo do ${clubes[selecao]}`
        imgClube.className= `img-fluid` //muda o estilo para exibir a imagem
        localStorage.setItem("clube", clubes[selecao])
    }

    else{//se selecionou radio "nenhum"
        divTitulo.className= `row` //tira classe de cor de dvTitulo
        imgClube.className= `d-none` //oculta imagem
        imgClube.alt= `` //limpa texto alternativo
        localStorage.removeItem("clube") //remove a variavel do localStorage 
    }
}

function verificarClube(){
    if(localStorage.getItem("clube")){
        const clube = localStorage.getItem("clube")
        //conforme o clube, marca um dos elementos do input type radio
        if(clube=="Brasil"){
            inRadios[0].checked = true
        } else if(clube=="Pelotas"){
            inRadios[1].checked = true
        } else {
            inRadios[2].checked = true
        }

        trocarClube() //chama a funcao que troca a imagem e cores
    }
}
