function recarregarPagina() {
    window.location.reload();
}

const davi = document.querySelector('.davi');
const coco = document.querySelector('.coco');

// Carregar os sons
const jumpSound = new Audio('./sounds/jump.mp3');  // Som do pulo
const gameOverSound = new Audio('./sounds/game-over.mp3');  // Som de game over
const backgroundMusic = new Audio('./sounds/background.mp3');  // Música de fundo

// Configurações da música de fundo
backgroundMusic.loop = true;  // Faz a música de fundo tocar em loop
backgroundMusic.volume = 0.5; // Ajusta o volume da música de fundo (de 0 a 1)

let musicStarted = false; // Controle se a música já foi iniciada

const startMusic = () => {
    if (!musicStarted) {
        backgroundMusic.play();
        musicStarted = true; // Define como true para que a música não seja iniciada novamente
    }
}

const jump = () => {
    startMusic(); // Iniciar a música de fundo no primeiro salto
    davi.classList.add('jump');
    jumpSound.play();  // Tocar som de pulo

    setTimeout(() => {
        davi.classList.remove('jump');
    }, 500);
}

// Detecta toque na tela para pular (para celulares)
document.addEventListener('touchstart', jump);

// Detecta pressionamento de tecla para pular (para desktops)
document.addEventListener('keydown', jump);

const loop = setInterval(() => {

    const cocoPosition = coco.offsetLeft;
    const daviPosition = +window.getComputedStyle(davi).bottom.replace('px','');

    if (cocoPosition <= 80 && cocoPosition > 0 && daviPosition < 50) {
        coco.style.animation = 'none';
        coco.style.left = `${cocoPosition}px`;

        davi.style.animation = 'none';
        davi.style.bottom = `${daviPosition}px`;

        davi.src = './image/game-over.png';
        
        gameOverSound.play();  // Tocar som de game over
        clearInterval(loop);
    }

}, 10);
