const botaoProduto = document.getElementById("botao__produto");

botaoProduto.addEventListener("click", (evento) => {
    const nomeProduto = document.getElementById("nome__produto").innerHTML
    const valorProduto = document.getElementById("valor__produto").innerHTML;
    
     produtos = {
        nome: nomeProduto,
        valor: valorProduto
    }
    const itens =
        [produtos]

    console.log(itens)
})

