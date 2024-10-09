let snake;
let resolution = 20;
let scalatura = 2;
let mela;
let larghezza;
let altezza;

function setup() {
    createCanvas(400, 400);
    frameRate(5);
    larghezza = floor(width / resolution);
    altezza = floor(height / resolution);
    snake = new Snake(larghezza,altezza);
    posizioneMela();
}

function posizioneMela() {
    let x = floor(random(larghezza));
    let y = floor(random(altezza));
    mela = createVector(x, y);
}

function draw() {
    scale(resolution);
    background(120);

    if(snake.mangia(mela)){
        posizioneMela();
    };

    snake.update();
    snake.show();

    noStroke();
    fill(180,0,0);
    rect(mela.x,mela.y,1,1);
}

function keyPressed() {

    // if (keyCode === UP_ARROW) {
    //     snake.setDir(0,-1);
    // }
    // else if(keyCode === DOWN_ARROW) {
    //     snake.setDir(0,1);
    // }
    // else if(keyCode === LEFT_ARROW) {
    //     snake.setDir(-1,0);
    // }
    // else if(keyCode === RIGHT_ARROW) {
    //     snake.setDir(1,0);
    // }

    switch (keyCode) {
        case UP_ARROW:
            snake.setDir(0, -1);
            break;
        case DOWN_ARROW:
            snake.setDir(0, 1);
            break;
        case LEFT_ARROW:
            snake.setDir(-1, 0);
            break;
        case RIGHT_ARROW:
            snake.setDir(1, 0);
            break;

        default:
            break;
    }

}