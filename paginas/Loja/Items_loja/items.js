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
    
        const id = getID();
        const produto = lojaData.itens[id];
    
        console.log(id);

        const nome = document.getElementById("nome");
        const descricao = document.getElementById("descricao");
        const preco = document.getElementById("preco");

        nome.innerHTML = produto.nome;
        descricao.innerText = produto.descricao;
        preco.innerText = produto.preco;

    } catch (error) {
        console.error('Erro ao carregar o arquivo JSON:', error);
    }

    
}

usingData();
    