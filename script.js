/**
 * Lógica de Animação ao Scroll
 * Identifica quando os elementos entram na tela e adiciona a classe 'active'
 */
function handleReveal() {
    const reveals = document.querySelectorAll(".reveal");
    
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100; // Sensibilidade da ativação
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
    });
}

// Escuta o evento de scroll
window.addEventListener("scroll", handleReveal);

    

// Dispara a função uma vez ao carregar para mostrar elementos iniciais
document.addEventListener("DOMContentLoaded", handleReveal);