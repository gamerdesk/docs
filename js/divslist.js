// Função para adicionar uma nova div filha
function adicionarDivFilha(conteudo) {
    // Seleciona a div pai
    const divPai = document.querySelector('.div-pai');

    // Cria uma nova div filha
    const novaDivFilha = document.createElement('div');
    novaDivFilha.className = 'div-filha'; // Adiciona a classe 'div-filha'
    novaDivFilha.textContent = conteudo; // Adiciona o conteúdo

    // Adiciona a nova div filha à div pai
    divPai.appendChild(novaDivFilha);
}

// Exemplo de como adicionar novas divs filhas
adicionarDivFilha('Filha 4');
adicionarDivFilha('Filha 5');
