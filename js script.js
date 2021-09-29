let canvas = document.getElementById("snake");
let conttext = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box,
}

 let direction = "right";
 let food = {
     x: Math.floor(Math.random() * 15 + 1) * box,
     y: Math.floor(Math.random() * 15 + 1) * box,
 }

function criarBG() {
    conttext.fillStyle = "lightgreen";
    conttext.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for(i = 0; i < snake.length; i++){
        conttext.fillStyle = "green";
        conttext.fillrect(snake[i];x, sanke[i].y, box, box);
    } 
}

function drawFood(){
    conttext.fillStyle = "red";
    conttext.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update (event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && diretcion != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){

    if(sanke[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(sanke[0].x < 0 * box && direction == "left") snake[0].x = 16 * box;
    if(sanke[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(sanke[0].y < 0 * box && direction == "up") snake[0].y = 16 * box;
    criarBG();
    criarCobrinha();
    drawFood();

    for(i = 1; i < snake.ligth; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over');
        }
    }

    let snake = snake[0].x;
    let snakey = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeX -= box;
    if(direction == "down") snakeX += box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    }
    else{
        food.x = Math.floor(Math.random() * 15 + 1) * box,
        food.y = Math.floor(Math.random() * 15 + 1) * box,
    }

    snake.pop();

    let newhead = {
        x: snakeX,
        y: snakey
    }

    snake.unshift(newHead)

}

let jogo = setInterval(iniciarJogo, 100);
