function getID() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    return params.id;
}

async function usingData() {
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

    const id = getID();

    console.log(id);

}