let snake;
let resolution = 20;

function setup() {
    createCanvas(400, 400);
    snake = new Snake();
}

function draw() {
    frameRate(5);
    scale(resolution);
    background(120);
    snake.update();
    snake.show();
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