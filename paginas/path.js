var paths = {
    "inicial": "/paginas/Inicial/inicial.html",
    "ingressos": "/paginas/Ingressos/ingressos.html",
    "loja": "/paginas/Loja/loja.html",
    "contatos": "#Footer",
    "instagram": "https://www.instagram.com/gatos_fofos_e_engracados/",
    "twitter": "https://twitter.com/gatinarios"
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
    console.log("paths on");
});

