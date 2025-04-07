// tabuleiro
let tileSize = 32;
let rows = 16;
let columns = 16;

let board;
let boardWidth = tileSize * columns; // 32 * 16
let boardHeight = tileSize * rows;   // 32 * 16
let context;

// nave
let shipWidth = tileSize*2;
let shipHeight = tileSize;
let shipX = tileSize * columns/2 - tileSize;
let shipY = tileSize * rows - tileSize*2;

let ship = {
    x : shipX,
    y : shipY,
    width : shipWidth,
    height : shipHeight
}

let shipImg;
let shipVelocityX = tileSize; // velocidade da nave ao mover

// alienígenas
let alienArray = [];
let alienWidth = tileSize*2;
let alienHeight = tileSize;
let alienX = tileSize;
let alienY = tileSize;
let alienImg;

let alienRows = 2;
let alienColumns = 3;
let alienCount = 0; // número total de alienígenas vivos
let alienVelocityX = 1; // velocidade de movimento horizontal dos alienígenas

// tiros
let bulletArray = [];
let bulletVelocityY = -10; // velocidade do tiro da nave (para cima)

let alienBullets = [];
let alienBulletVelocityY = 4; // velocidade dos tiros dos alienígenas
let alienShootInterval = 1000;
let lastAlienShootTime = 0;
let aliensCanShoot = false; // alternância para tiros dos alienígenas

let score = 0;
let highScore = 0;
let gameOver = false;

window.onload = function() {
    board = document.getElementById("board");
    board.width = boardWidth;
    board.height = boardHeight;
    context = board.getContext("2d"); // usado para desenhar no canvas

    shipImg = new Image();
    shipImg.src = "./ship.png";
    shipImg.onload = function() {
        context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
    }

    alienImg = new Image();
    alienImg.src = "./alien.png";
    createAliens();

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", shoot);
    document.addEventListener("mousedown", shootMouse);

    requestAnimationFrame(update);
}

function update(timestamp) {
    requestAnimationFrame(update);
    if (gameOver) return;

    context.clearRect(0, 0, board.width, board.height);

    // desenha a nave
    context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);

    // desenha os alienígenas
    for (let i = 0; i < alienArray.length; i++) {
        let alien = alienArray[i];
        if (alien.alive) {
            alien.x += alienVelocityX;

            // se algum alienígena tocar nas bordas
            if (alien.x + alien.width >= board.width || alien.x <= 0) {
                alienVelocityX *= -1;
                alien.x += alienVelocityX*2;
                for (let j = 0; j < alienArray.length; j++) {
                    alienArray[j].y += alienHeight; // desce todos os alienígenas uma linha
                }
            }

            context.drawImage(alienImg, alien.x, alien.y, alien.width, alien.height);

            if (alien.y >= ship.y) {
                gameOver = true;
                document.getElementById("restartBtn").style.display = "inline";
            }
        }
    }

    // tiros da nave
    for (let i = 0; i < bulletArray.length; i++) {
        let bullet = bulletArray[i];
        bullet.y += bulletVelocityY;
        context.fillStyle="white";
        context.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);

        for (let j = 0; j < alienArray.length; j++) {
            let alien = alienArray[j];
            if (!bullet.used && alien.alive && detectCollision(bullet, alien)) {
                bullet.used = true;
                alien.alive = false;
                alienCount--;
                score += 100;
            }
        }
    }

    while (bulletArray.length > 0 && (bulletArray[0].used || bulletArray[0].y < 0)) {
        bulletArray.shift(); // remove o primeiro tiro (usado ou fora da tela)
    }

    // tiros dos alienígenas
    if (aliensCanShoot && timestamp - lastAlienShootTime > alienShootInterval) {
        shootAlienBullet();
        lastAlienShootTime = timestamp;
    }

    for (let i = 0; i < alienBullets.length; i++) {
        let bullet = alienBullets[i];
        bullet.y += alienBulletVelocityY;
        context.fillStyle = "red";
        context.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);

        if (detectCollision(bullet, ship)) {
            gameOver = true;
            document.getElementById("restartBtn").style.display = "inline";
        }
    }

    while (alienBullets.length > 0 && (alienBullets[0].y > board.height)) {
        alienBullets.shift(); // remove tiros fora da tela
    }

    if (alienCount == 0) {
        score += alienColumns * alienRows * 100; // pontos bônus :)
        alienColumns = Math.min(alienColumns + 1, columns/2 - 2); // máximo de 6 colunas
        alienRows = Math.min(alienRows + 1, rows - 4);             // máximo de 12 linhas
        alienVelocityX += (alienVelocityX > 0) ? 0.2 : -0.2;
        alienArray = [];
        bulletArray = [];
        alienBullets = [];
        createAliens();
    }

    context.fillStyle="white";
    context.font="16px courier";
    context.fillText("Score: " + score, 5, 20);
    context.fillText("High Score: " + highScore, 5, 40);
    context.fillText("T para alternar tiros inimigos: " + (aliensCanShoot ? "ON" : "OFF"), 5, 60);
}

function handleKeyDown(e) {
    if (gameOver) return;

    if ((e.code == "ArrowLeft" || e.code == "KeyA") && ship.x - shipVelocityX >= 0) {
        ship.x -= shipVelocityX; // move a nave para a esquerda
    }
    else if ((e.code == "ArrowRight" || e.code == "KeyD") && ship.x + shipVelocityX + ship.width <= board.width) {
        ship.x += shipVelocityX; // move a nave para a direita
    }
    else if (e.code == "KeyT") {
        aliensCanShoot = !aliensCanShoot; // ativa/desativa tiros dos alienígenas
    }
}

function shoot(e) {
    if (gameOver) return;

    if (e.code == "Space") {
        spawnBullet(); // atira ao pressionar espaço
    }
}

function shootMouse(e) {
    if (gameOver) return;

    if (e.button == 0) {
        spawnBullet(); // atira ao clicar com o botão esquerdo do mouse
    }
}

function spawnBullet() {
    let bullet = {
        x : ship.x + shipWidth*15/32,
        y : ship.y,
        width : tileSize/8,
        height : tileSize/2,
        used : false
    }
    bulletArray.push(bullet); // adiciona o tiro ao array
}

function shootAlienBullet() {
    let shooters = alienArray.filter(a => a.alive);
    if (shooters.length == 0) return;

    let shooter = shooters[Math.floor(Math.random() * shooters.length)];
    let bullet = {
        x: shooter.x + shooter.width/2,
        y: shooter.y + shooter.height,
        width: tileSize/8,
        height: tileSize/2
    }
    alienBullets.push(bullet); // adiciona o tiro ao array de tiros inimigos
}

function createAliens() {
    for (let c = 0; c < alienColumns; c++) {
        for (let r = 0; r < alienRows; r++) {
            let alien = {
                img : alienImg,
                x : alienX + c*alienWidth,
                y : alienY + r*alienHeight,
                width : alienWidth,
                height : alienHeight,
                alive : true
            }
            alienArray.push(alien); // cria cada alienígena
        }
    }
    alienCount = alienArray.length;
}

function detectCollision(a, b) {
    return a.x < b.x + b.width &&       // A está à esquerda do lado direito de B
           a.x + a.width > b.x &&       // A está à direita do lado esquerdo de B
           a.y < b.y + b.height &&      // A está acima da parte de baixo de B
           a.y + a.height > b.y;        // A está abaixo da parte de cima de B
}

function restartGame() {
    if (score > highScore) highScore = score;
    score = 0;
    gameOver = false;
    document.getElementById("restartBtn").style.display = "none";
    ship.x = shipX;
    ship.y = shipY;
    alienColumns = 3;
    alienRows = 2;
    alienVelocityX = 1;
    alienArray = [];
    bulletArray = [];
    alienBullets = [];
    createAliens(); // reinicia o jogo do início
}
