const botoes = (document.querySelectorAll('.botao'));

const personagens = (document.querySelectorAll('.personagem'));

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselionarBotao();
        botao.classList.add("selecionado");

        desselecionarPersonagem();
        personagens[indice].classList.add("selecionado");

        function desselionarBotao() {
            const btnSelecionado = document.querySelector(".botao.selecionado");
            btnSelecionado.classList.remove("selecionado");
        }
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

