const paragrafo = document.getElementById("Paragrafo");
let cliques = 0;

paragrafo.addEventListener("dblclick", function () {
    cliques++;
    if (cliques === 2) {
        paragrafo.classList.add("escondido");
        cliques = 0; 
    }
});