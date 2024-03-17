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

        const nome = document.getElementById("nome");
        const img = document.getElementById("imagem");
        const descricao = document.getElementById("descricao");
        const preco = document.getElementById("preco");

        nome.innerHTML = produto.nome;
        descricao.innerText = produto.descricao;
        preco.innerText = produto.preco;

        console.log(img);

        for (let i = 1; i <= 5; i++) {
            var src_img = '../data/2022/' + i + '.png';
            
            var item = document.createElement("div");
            item.id = "" + i;

            if(item.id === "1") {
                item.className = "carousel-item active";
            } else {
                item.className = "carousel-item";
            }
            item.innerHTML = `<img src="${src_img}" class="d-block w-100" alt="${i}"></img>`

            img.append(item);
        }
        
/*
        <div class="carousel-item active">
            <img src="..." class="d-block w-100" alt="...">
        </div>
*/        

    } catch (error) {
        console.error('Erro ao carregar o arquivo JSON:', error);

        const url = `404.html`;
        window.location.href = url;
    }

    
}
document.addEventListener("DOMContentLoaded", function() {
    usingData();
});
    