var botao = document.getElementById("btn-tema");

botao.onclick = function() {
    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        botao.innerText = "☀️ Modo Claro";
    } else {
        botao.innerText = "🌙 Modo Escuro";
    }
};