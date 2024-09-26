function recarregarPagina() {
    window.location.reload();
  }
  
  const davi = document.querySelector('.davi');
  const coco = document.querySelector('.coco');
  
  // Carregar os sons
  const jumpSound = new Audio('./sounds/jump.mp3');  // Som do pulo
  const gameOverSound = new Audio('./sounds/game-over.mp3');  // Som de game over
  
  const jump = () => {
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
  
      if (cocoPosition <= 52 && cocoPosition > 0 && daviPosition < 70) {
          coco.style.animation = 'none';
          coco.style.left = `${cocoPosition}px`;
  
          davi.style.animation = 'none';
          davi.style.bottom = `${daviPosition}px`;
  
          davi.src = './image/game-over.png';
          
          gameOverSound.play();  // Tocar som de game over
          clearInterval(loop);
      }
  
  }, 10);
  
