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

/* ===== PROTEÇÃO DE CÓDIGO ===== */
document.addEventListener("contextmenu",e=>e.preventDefault()),document.addEventListener("keydown",e=>{"F12"===e.key&&e.preventDefault(),e.ctrlKey&&e.shiftKey&&["I","i","J","j","C","c"].includes(e.key)&&e.preventDefault(),e.ctrlKey&&["U","u"].includes(e.key)&&e.preventDefault()});