let valorTotal;
limpar();

function adicionar() {
    /* recuperar valores nome do produto, quantidade e valor */ 
    let produto = document.getElementById('produto').value; 
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let nomeDoProduto = produto.split('-')[0];
    let valorDoProduto = produto.split('R$')[1];

    /* Caluclar o preço total */
    let precoTotal = valorDoProduto * quantidade;

    /* adicionar no carrinho */
    let carrinho = document.getElementById('lista-produtos');

    if(isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, insira a quantidade do item.');
        campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$${valorTotal}`;
    } else {
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}</span> ${nomeDoProduto} <span class="texto-azul">R$${precoTotal}</span></section>`;
    }

    /* atualizar a soma do valor total */
    valorTotal = valorTotal + precoTotal;

    /* atualizar o site com o carrinho */
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${valorTotal}`;

    /* Chamando a função limpar Quantidade para cada vez que apertar o botão adicionar */
    limparQuantidade();
}

/* Função para limpar a quantidade de produtos */
function limparQuantidade() {
    let limpaQuantidade = document.getElementById('quantidade');
    limpaQuantidade.value = '';
}

/* Função para limpar a lista de produtos do carrinho */
function limparCarrinho(){
    let limpaCarrinho = document.getElementById('lista-produtos');
    limpaCarrinho.innerHTML = "";
}

/* Função para limpar o valor total da soma */
function limparValorTotal() {
    let limpaTotal = document.getElementById('valor-total');
    limpaTotal.textContent = `R$${0}`;
}

/* Função do botão Limpar */
function limpar() {
    valorTotal = 0;
    limparCarrinho();
    limparValorTotal();

}