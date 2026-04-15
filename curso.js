document.addEventListener('DOMContentLoaded', () => {
    // 1. Verifica se o usuário já ativou o Dark Mode anteriormente
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }

    // 2. Cria e injeta o botão flutuante de Tema automaticamente
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'darkModeToggle';
    toggleBtn.className = 'floating-btn';
    toggleBtn.title = 'Alternar Modo Escuro';
    // Define o ícone com base no tema atual
    toggleBtn.textContent = isDarkMode ? '☀️' : '🌙';
    
    // Adiciona o botão ao final do <body>
    document.body.appendChild(toggleBtn);

    // 3. Adiciona a funcionalidade de clique ao botão
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Verifica se ficou escuro ou claro
        const currentlyDark = document.body.classList.contains('dark-mode');
        
        // Salva no navegador para sincronizar com as aulas (script.js)
        localStorage.setItem('darkMode', currentlyDark ? 'enabled' : 'disabled');
        // Troca o ícone
        toggleBtn.textContent = currentlyDark ? '☀️' : '🌙';
    });
});

/* ===== PRObi===== */
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('dragstart', function(e) {
    // Bloquear a ação de arrastar em imagens
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

document.addEventListener('keydown', function(e) {
    // Bloquear F12
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
    }
    // Bloquear Ctrl + Shift + I / J / C
    if (e.ctrlKey && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key)) {
        e.preventDefault();
    }
    // Bloquear Ctrl + U (Ver código fonte)
    if (e.ctrlKey && ['U', 'u'].includes(e.key)) {
        e.preventDefault();
    }
});