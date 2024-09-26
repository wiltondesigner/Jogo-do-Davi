function recarregarPagina() {
    window.location.reload();
  }

document.addEventListener('DOMContentLoaded', () => {
    const jumpSound = new Audio('./sounds/jump.mp3');
    const gameOverSound = new Audio('./sounds/game-over.mp3');
    
    // Defina o volume se necessário
    jumpSound.volume = 0.5;
    gameOverSound.volume = 0.5;
    
    const davi = document.querySelector('.davi');
    const coco = document.querySelector('.coco');

    const jump = () => {
        davi.classList.add('jump');
        jumpSound.play();  // Toca o som de pulo
        
        setTimeout(() => {
            davi.classList.remove('jump');
        }, 500);
    }

    const loop = setInterval(() => {

        const cocoPosition = coco.offsetLeft;
        const daviPosition = +window.getComputedStyle(davi).bottom.replace('px','');

        if (cocoPosition <= 72 && cocoPosition > 0 && daviPosition < 80) {
            coco.style.animation = 'none';
            coco.style.left = `${cocoPosition}px`;

            davi.style.animation = 'none';
            davi.style.bottom = `${daviPosition}px`;

            davi.src = './image/game-over.png';

            gameOverSound.play();  // Toca o som de game over
            clearInterval(loop);
        }

    }, 10);

     
      // Adiciona suporte para teclado (desktop)
    document.addEventListener('keydown', jump);

    // Adiciona suporte para toque (celulares/tablets)
    document.addEventListener('touchstart', jump);
});
