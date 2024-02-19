var altura= 0
var largura= 0
//criamos a variavel fora da função para que dentro da função essas variaveis sejam afetadas

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight //propriedade retorna a altura da área de conteúdo de uma janela.
    largura = window.innerWidth //propriedade retorna a largura da área de conteúdo de uma janela.
    console.log(altura,largura)
}
ajustaTamanhoPalcoJogo()//aqui estou chamando a função

console.log(altura,largura)