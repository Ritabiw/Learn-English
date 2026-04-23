function handleLesson(number) {
    console.log(`Iniciando lição ${number}`);
    // Exemplo de ação: mudar a cor ao clicar
    const node = document.getElementById(`lesson-${number}`);
    const bg = node.querySelector('.marker-bg');
    
    bg.style.fill = "#2ecc71"; // Muda para verde ao clicar
    
    // Aqui você pode adicionar o redirecionamento:
    // window.location.href = `licao-${number}.html`;
}