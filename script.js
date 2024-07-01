document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const pacMan = document.createElement('div');
    pacMan.classList.add('pac-man');
    gameBoard.appendChild(pacMan);

    const food = document.createElement('div');
    food.classList.add('food');
    gameBoard.appendChild(food);

    // Inicializa Pac-Man e comida em posições aleatórias
    pacMan.style.left = '100px';
    pacMan.style.top = '100px';
    placeFood();

    // Controle do movimento de Pac-Man
    document.addEventListener('keydown', movePacMan);

    function movePacMan(event) {
        const step = 10;
        let left = parseInt(pacMan.style.left);
        let top = parseInt(pacMan.style.top);

        switch (event.key) {
            case 'ArrowUp':
                if (top - step >= 0) pacMan.style.top = top - step + 'px';
                break;
            case 'ArrowDown':
                if (top + step <= 470) pacMan.style.top = top + step + 'px';
                break;
            case 'ArrowLeft':
                if (left - step >= 0) pacMan.style.left = left - step + 'px';
                break;
            case 'ArrowRight':
                if (left + step <= 470) pacMan.style.left = left + step + 'px';
                break;
        }

        checkCollision();
    }

    // Posiciona a comida em local aleatório
    function placeFood() {
        food.style.left = Math.floor(Math.random() * 490) + 'px';
        food.style.top = Math.floor(Math.random() * 490) + 'px';
    }

    // Verifica se Pac-Man colidiu com a comida
    function checkCollision() {
        const pacManRect = pacMan.getBoundingClientRect();
        const foodRect = food.getBoundingClientRect();

        if (pacManRect.left < foodRect.right &&
            pacManRect.right > foodRect.left &&
            pacManRect.top < foodRect.bottom &&
            pacManRect.bottom > foodRect.top) {
            placeFood();
        }
    }
});
