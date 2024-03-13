async function makeCards() {
    try {
        // Carregando o arquivo JSON
        const response = await fetch('items.json');
        const lojaData = await response.json();

        // Obtendo o 5º produto
        const quintoProduto = lojaData.itens[3];

        // Criando uma string com as informações do produto
        console.log(quintoProduto);
    } catch (error) {
        console.error('Erro ao carregar o arquivo JSON:', error);
    }
}

function redirect_items(id) {

    const url = `Items_loja/items.html?id=${id}`;
    window.location.href = url;
}