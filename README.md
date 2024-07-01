# pacman
PACMAN. O objetivo do jogo é comer todas as pastilhas do labirinto sem ser atingido pelos fantasmas. Ao colidir com uma pastilha o PACMAN a engole e a mesma deve desaparecer do labirinto. Caso o jogador coma todas as pastilhas de um labirinto, o jogador passa de fase.
[index.html.txt](https://github.com/user-attachments/files/16051242/index.html.txt)
[script.js.txt](https://github.com/user-attachments/files/16051244/script.js.txt)
document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const pacMan = document.createElement('div');
    pacMan.classList.add('pac-man');
    gameBoard.appendChild(pacMan);

    const food = document.createElement('div');
    food.classList.add('food');
    gameBoard.appendChild(food);[style.css.txt](https://github.com/user-attachments/files/16051261/style.css.txt)body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: black;
    color: white;
}

#game-board {
    position: relative;
    width: 500px;
    height: 500px;
    margin: 0 auto;
    background-color: navy;
    border: 2px solid white;
}

.pac-man {
    width: 30px;
    height: 30px;
    background-color: yellow;
    position: absolute;
    border-radius: 50%;
    transition: left 0.1s, top 0.1s;
}

.food {
    width: 10px;
    height: 10px;
    background-color: white;
    position: absolute;
    border-radius: 50%;[Uploading style.css.txt…](body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: black;
    color: white;
}

#game-board {
    position: relative;
    width: 500px;
    height: 500px;
    margin: 0 auto;
    background-color: navy;
    border: 2px solid white;
}

.pac-man {
    width: 30px;
    height: 30px;
    background-color: yellow;
    position: absolute;
    border-radius: 50%;
    transition: left 0.1s, top 0.1s;
}

.food {
    width: 10px;
    height: 10px;
    background-color: white;
    position: absolute;
    border-radius: 50%;
}
)

}




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
[Uploading style.css.txt…]()body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: black;
    color: white;
}

#game-board {
    position: relative;
    width: 500px;
    height: 500px;
    margin: 0 auto;
    background-color: navy;
    border: 2px solid white;
}

.pac-man {
    width: 30px;
    height: 30px;
    background-color: yellow;
    position: absolute;
    border-radius: 50%;
    transition: left 0.1s, top 0.1s;
}

.food {
    width: 10px;
    height: 10px;
    background-color: white;
    position: absolute;
    border-radius: 50%;
}


        
    }
});
