const botaoProduto = document.querySelectorAll("[data-botton]");

botaoProduto.forEach((elemento) => {

    elemento.addEventListener("click", (evento) => {
        const produto = []
        produto.push(dadosProdutos())
    })   
})

function dadosProdutos(){
    const nome = document.querySelectorAll("[data-nome]")
    const valor = document.querySelectorAll("[data-valor]");
}