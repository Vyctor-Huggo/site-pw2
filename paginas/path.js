var paths = {
    "inicial": "/Inicial/inicial.html",
    "ingressos": "/Ingressos/ingressos.html",
    "loja": "/Loja/loja.html",
    "contatos": "#Footer",
    "instagram": "",
    "twitter": ""
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

document.addEventListener('htmlChanged', function() {
    criarLinks();
    console.log("paths on");
});
