// Obtém uma referência para o elemento HTML com a classe "currentPlayer".
const currentPlayer = document.querySelector(".currentPlayer");

// Declara variáveis globais
let selected;  // Array que armazena os movimentos selecionados no jogo.
let player = "X";  // Representa o jogador atual.
let positions = [  // Matriz que contém todas as combinações vencedoras possíveis.
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

// Função de inicialização do jogo
function init() {
    selected = [];  // Inicializa o array de movimentos selecionados.

    // Exibe uma mensagem indicando qual jogador está na vez.
    currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;

    // Adiciona um evento de clique a todos os botões do jogo para permitir que os jogadores façam seus movimentos.
    document.querySelectorAll(".game button").forEach((item) => {
        item.innerHTML = "";  // Limpa o conteúdo dos botões.
        item.addEventListener("click", newMove);  // Adiciona um evento de clique para o novo movimento.
    });
}

init();  // Chama a função de inicialização do jogo quando a página é carregada.

// Função chamada quando um botão do jogo é clicado.
function newMove(e) {
    const index = e.target.getAttribute("data-i");  // Obtém o índice do botão clicado.
    e.target.innerHTML = player;  // Define o conteúdo do botão como o símbolo do jogador atual.
    e.target.removeEventListener("click", newMove);  // Remove a capacidade de clicar no botão novamente.
    selected[index] = player;  // Registra o movimento no array.

    // Aguarda um curto período de tempo antes de verificar o resultado do jogo.
    setTimeout(() => {
        check();
    }, [100]);

    // Alterna para o próximo jogador e atualiza a mensagem exibida.
    player = player === "X" ? "O" : "X";
    currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
}

// Função que verifica o resultado do jogo.
function check() {
    // Determina o jogador anterior com base no jogador atual.
    let playerLastMove = player === "X" ? "O" : "X";

    // Filtra os movimentos do jogador anterior e obtém os índices deles.
    const items = selected
        .map((item, i) => [item, i])
        .filter((item) => item[0] === playerLastMove)
        .map((item) => item[1]);

    // Itera sobre todas as combinações vencedoras possíveis.
    for (pos of positions) {
        // Verifica se o jogador anterior preencheu todas as posições em alguma combinação vencedora.
        if (pos.every((item) => items.includes(item))) {
            alert("O JOGADOR '" + playerLastMove + "' GANHOU!");  // Exibe um alerta com o jogador vencedor.
            init();  // Reinicializa o jogo.
            return;
        }
    }

    // Verifica se houve um empate (todos os espaços preenchidos) e exibe um alerta.
    if (selected.filter((item) => item).length === 9) {
        alert("DEU EMPATE!");
        init();  // Reinicializa o jogo.
        return;
    }
}
