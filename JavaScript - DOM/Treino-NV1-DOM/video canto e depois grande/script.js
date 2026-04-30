// 1. Pegamos as referências do DOM (elementos do HTML)
const videoContainer = document.getElementById('videoWrapper');
const triggerSection = document.getElementById('triggerSection');

// 2. Configuramos o "Observador de Interseção"
// O threshold: 0.2 significa: "Avisa quando 20% da Seção 2 estiver na tela"
const observerOptions = {
    threshold: 0.2 
};

// 3. Criamos a lógica do que fazer quando o observador detectar algo
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // 'rect' nos diz onde a Seção 2 está em relação ao topo da janela
        const rect = entry.boundingClientRect;

        // Se a Seção 2 entrou na tela (isIntersecting é verdadeiro)
        if (entry.isIntersecting) {
            // Adicionamos a classe CSS que faz o vídeo crescer e centralizar
            videoContainer.classList.add('expanded');
            videoContainer.classList.remove('hidden');
        } 
        // Se a Seção 2 SAIU da tela
        else {
            // Se rect.top > 0, significa que a Seção 2 está ABAIXO da visão (usuário subiu)
            if (rect.top > 0) {
                // Removemos a expansão para o vídeo voltar a ficar pequeno no cantinho
                videoContainer.classList.remove('expanded');
            } 
            // Se rect.top for menor que 0, a Seção 2 sumiu para CIMA (usuário desceu mais)
            else {
                // Escondemos o vídeo para que ele não fique por cima do resto do site
                videoContainer.classList.add('hidden');
            }
        }
    });
}, observerOptions);

// 4. Mandamos o observador começar a vigiar a Seção 2
observer.observe(triggerSection);