var botao = document.getElementById("btn-tema");

botao.onclick = function() {
    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        botao.innerText = " Modo Claro";
    } else {
        botao.innerText = " Modo Escuro";
    }
};

var botaoTopo = document.getElementById("btn-topo");

window.onscroll = function() {
    if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }
};

botaoTopo.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
};