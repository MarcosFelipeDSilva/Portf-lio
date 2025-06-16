// Seleciona o elemento HTML onde o texto será exibido
const textElement = document.getElementById("text");

// Lista de palavras que irão aparecer no efeito de digitação
const words = [
    "Desenvolvedor",
    "Desenvolvedor Web",
    "Desenvolvedor Front-end",
    "Desenvolvedor Back-end",
    "Desenvolvedor Full Stack"
];

// Controla qual palavra está sendo exibida
let wordIndex = 0;

// Controla qual caractere da palavra está sendo exibido
let charIndex = 0;

// Define se o efeito está digitando ou apagando
let isDeleting = false;

// Função responsável pelo efeito de digitação
function type() {
    // Palavra atual da lista
    const currentWord = words[wordIndex];

    if (isDeleting) {
        // Se estiver apagando, diminui o texto letra por letra
        textElement.textContent = currentWord.substring(0, charIndex);
        charIndex--;
    } else {
        // Se estiver digitando, aumenta o texto letra por letra
        textElement.textContent = currentWord.substring(0, charIndex);
        charIndex++;
    }

    // Se terminou de digitar a palavra inteira
    if (!isDeleting && charIndex === currentWord.length) {
        // Espera 1 segundo antes de começar a apagar
        setTimeout(() => isDeleting = true, 1000);
    }
    // Se terminou de apagar toda a palavra
    else if (isDeleting && charIndex === 0) {
        // Muda para a próxima palavra
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    // Controla a velocidade da digitação e da exclusão
    setTimeout(type, isDeleting ? 80 : 120);
}

// Inicia o efeito assim que o conteúdo da página carregar
document.addEventListener("DOMContentLoaded", type);
