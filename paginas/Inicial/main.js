var paths = {
    "inicial": "/Inicial/inicial.html",
    "ingressos": "/Ingressos/ingressos.html",
    "loja": "/Loja/loja.html",
    "contatos": "#Footer"
};


function criarLinks() {
    var links = document.querySelectorAll("a");
    links.forEach(function(link) {
        var keyword = link.getAttribute("data-keyword");
        if (paths[keyword]) {
            link.href = paths[keyword];
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    criarLinks();
});


function texts(x) {
    var elemento;
    var img = document.getElementById("img");

    switch(x) {
        case 1:
            elemento = "Sol e Alegria";
            img.setAttribute("src", "img/boemia.jpg");
            break;
        case 2:
            elemento = "Cultivando Sonhos";
            img.setAttribute("src", "img/aaaa.avif");
            break;
        case 3:
            elemento = "Noites de Haze";
            img.setAttribute("src", "bromeia.avif");
            break;
        case 4:
            elemento = "Restos de Terra";
            img.setAttribute("src", "img/boemia.jpg");
            break;
        case 5:
            elemento = "Lágrimas da Rua";
            img.setAttribute("src", "img/aaaa.avif");
            break;
        case 6:
            elemento = "Noites Sem Fim";
            img.setAttribute("src", "bromeia.avif");
            break;
        case 7:
            elemento = "Sol e Alegria";
            img.setAttribute("src", "img/boemia.jpg");
            break;
        case 8:
            elemento = "Cultivando Sonhos";
            img.setAttribute("src", "img/aaaa.avif");
            break;
        case 9:
            elemento = "Noites de Haze";
            img.setAttribute("src", "bromeia.avif");
            break;
    }

    document.getElementById("texto").innerHTML = elemento;
}