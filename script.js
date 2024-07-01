document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const cellSize = 24;
    const maze = [
        // 20x20 grid: 0 = empty, 1 = wall, 2 = dot
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,1],
        [1,2,1,1,1,1,2,1,2,1,1,2,1,2,1,1,1,1,2,1],
        [1,2,1,1,1,1,2,1,2,2,2,2,1,2,1,1,1,1,2,1],
        [1,2,2,2,2,2,2,1,1,1,1,1,1,2,2,2,2,2,2,1],
        [1,1,1,1,1,1,2,1,2,2,2,2,1,2,1,1,1,1,1,1],
        [1,2,2,2,2,1,2,1,2,1,1,2,1,2,1,2,2,2,2,1],
        [1,2,1,1,2,1,2,1,2,1,1,2,1,2,1,1,2,1,2,1],
        [1,2,2,1,2,2,2,2,2,1,1,2,2,2,2,1,2,2,2,1],
        [1,1,2,1,2,1,1,1,1,1,1,1,1,1,2,1,2,1,1,1],
        [1,2,2,1,2,1,2,2,2,0,0,2,2,2,2,1,2,2,2,1],
        [1,2,1,1,2,1,2,1,1,1,1,1,1,1,2,1,1,1,2,1],
        [1,2,2,1,2,2,2,1,2,2,2,2,1,2,2,1,2,2,2,1],
        [1,1,2,1,1,1,2,1,2,1,1,2,1,2,1,1,2,1,1,1],
        [1,2,2,2,2,2,2,1,2,1,1,2,1,2,2,2,2,2,2,1],
        [1,2,1,1,1,1,2,1,2,1,1,2,1,1,1,1,1,1,2,1],
        [1,2,1,1,1,1,2,1,2,2,2,2,1,2,1,1,1,1,2,1],
        [1,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,1],
        [1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];

    // Criar o labirinto
    maze.forEach((row, y) => {
        row.forEach((cell, x) => {
            const div = document.createElement('div');
            div.classList.add('cell');
            if (cell === 1) {
                div.classList.add('wall');
            } else if (cell === 2) {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                div.appendChild(dot);
            }
            gameBoard.appendChild(div);
        });
    });

    // Adicionar Pac-Man
    const pacMan = document.createElement('div');
    pacMan.classList.add('pac-man');
    gameBoard.appendChild(pacMan);

    let pacManPosition = { x: 9, y: 10 };

    function updatePacManPosition() {
        const pacManCell = gameBoard.children[pacManPosition.y * 20 + pacManPosition.x];
        const rect = pacManCell.getBoundingClientRect();
        const boardRect = gameBoard.getBoundingClientRect();
        pacMan.style.left = `${rect.left - boardRect.left + rect.width / 2}px`;
        pacMan.style.top = `${rect.top - boardRect.top + rect.height / 2}px`;
    }

    updatePacManPosition();

    // Movimento de Pac-Man
    document.addEventListener('keydown', (e) => {
        let { x, y } = pacManPosition;
        switch (e.key) {
            case 'ArrowUp':
                if (maze[y - 1][x] !== 1) y--;
                break;
            case 'ArrowDown':
                if (maze[y + 1][x] !== 1) y++;
                break;
            case 'ArrowLeft':
                if (maze[y][x - 1] !== 1) x--;
                break;
            case 'ArrowRight':
                if (maze[y][x + 1] !== 1) x++;
                break;
        }

        // Comer dots
        if (maze[y][x] === 2) {
            maze[y][x] = 0;
            const dot = gameBoard.children[y * 20 + x].querySelector('.dot');
            if (dot) dot.remove();
        }

        pacManPosition = { x, y };
        updatePacManPosition();
    });
});

