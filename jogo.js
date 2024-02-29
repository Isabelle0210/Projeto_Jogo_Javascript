var altura= 0
var largura= 0
//criamos a variavel fora da função para que dentro da função essas variaveis sejam afetadas
var vidas = 1
function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight //propriedade retorna a altura da área de conteúdo de uma janela.
    largura = window.innerWidth //propriedade retorna a largura da área de conteúdo de uma janela.
    //console.log(largura,altura)
}
ajustaTamanhoPalcoJogo()//aqui estou chamando a função

function posicaoRandomica(){// foi necessario colocar dentro da função para que ela seja representada a hora que o body for carregado 
    //removendo mosquito anterior caso exista
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito'). remove()
        if(vidas>3){
            window.location.href = "fim_de_jogo.html"
        }else{
            document.getElementById('v'+ vidas).src ="imagens/coracao_vazio.png"
            vidas ++
        }
        
    }
    var posicaoX= Math.floor(Math.random() * largura)- 90
    var posicaoY= Math.floor(Math.random() * altura)- 90 
//math.random gera valores aleatorios que vao de 0 a 1 
//math.floor, faz o arredondamento do valor retirando casas decimais
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    //posicaoX é menor que zero. Se for verdadeiro, atribui-se o valor 0 a posicaoX; caso contrário, mantém-se o valor atual de posicaoX. Em outras palavras, essa linha assegura que posicaoX não seja negativo. Se posicaoX for menor que zero, é definido como zero. 
    posicaoY= posicaoY < 0 ? 0: posicaoY

//cria elemento html
    var mosquito = document.createElement('img')//criado como uma variavel pq é necessario interligar ele como elemento filho do body
//adicionando um filho para o body
    mosquito.src ='imagens/mosca.png'//definimos uma imagem para a variavel mosquito
    mosquito.className = tamanhoAleatorio() +' '+ ladoAleatorio()//A className propriedade define ou retorna o atributo de classe de um elemento.
    mosquito.style.left = posicaoX+'px'//estou atribuindo um elemento css para a posicaoX para q ela seja exibida em pixels
    mosquito.style.top = posicaoY+'px'
    //para que isso aconteca deve colocar a posição como absoluta
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()

        document.getElementById('v1').src="imagens/coracao_vazio.png"
    }

    document.body.appendChild(mosquito)
}
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3) 
    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2) //valores de 0,1 e proximo de 2
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
