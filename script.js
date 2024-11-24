// Abertura e fechamento do menu lateral
const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.sidebar-header .close-btn');

// Abrir o menu quando o botão for clicado
menuBtn.addEventListener('click', () => {
    sidebar.classList.add('open');
});

// Fechar o menu quando o botão de fechar for clicado
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
});

// Exibir conteúdo correspondente ao item clicado no menu
const menuItems = document.querySelectorAll('.menu-item');
const contentSections = document.querySelectorAll('.content > div');

menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        // Esconde todas as seções
        contentSections.forEach(section => {
            section.classList.add('hidden');
        });

        // Mostra a seção correspondente ao item
        const contentId = item.getAttribute('data-content');
        document.getElementById(contentId).classList.remove('hidden');

        // Fechar o menu automaticamente
        sidebar.classList.remove('open');
    });
});
