var altura= 0
var largura= 0
//criamos a variavel fora da função para que dentro da função essas variaveis sejam afetadas

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight //propriedade retorna a altura da área de conteúdo de uma janela.
    largura = window.innerWidth //propriedade retorna a largura da área de conteúdo de uma janela.
    //console.log(largura,altura)
}
ajustaTamanhoPalcoJogo()//aqui estou chamando a função

function posicaoRandomica(){// foi necessario colocar dentro da função para que ela seja representada a hora que o body for carregado 
    var posicaoX= Math.floor(Math.random() * largura)- 90
    var posicaoY= Math.floor(Math.random() * altura)- 90 
//math.random gera valores aleatorios que vao de 0 a 1 
//math.floor, faz o arredondamento do valor retirando casas decimais
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    //posicaoX é menor que zero. Se for verdadeiro, atribui-se o valor 0 a posicaoX; caso contrário, mantém-se o valor atual de posicaoX. Em outras palavras, essa linha assegura que posicaoX não seja negativo. Se posicaoX for menor que zero, é definido como zero.
    posicaoY= posicaoY < 0 ? 0: posicaoY

    console.log(posicaoX, posicaoY)
//cria elemento html
    var mosquito = document.createElement('img')//criado como uma variavel pq é necessario interligar ele como elemento filho do body
//adicionando um filho para o body
    mosquito.src ='imagens/mosca.png'//definimos uma imagem para a variavel mosquito
    mosquito.className = 'mosquito1'//A classNamepropriedade define ou retorna o atributo de classe de um elemento.
    mosquito.style.left = posicaoX+'px'//estou atribuindo um elemento css para a posicaoX para q ela seja exibida em pixels
    mosquito.style.top = posicaoY+'px'
    //para que isso aconteca deve colocar a posição como absoluta
    mosquito.style.position = 'absolute'
    document.body.appendChild(mosquito)
}