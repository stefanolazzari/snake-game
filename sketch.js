let posX = 0;
let posY = 0;

let speedX = 1;
let speedY = 1;

let dirX = 1;
let dirY = 1;


function setup() {
  createCanvas(400, 400);
  frameRate(1);
}

function draw() {
  scale(10);
  background(120);
  noStroke();
  rect(posX, posY, 1, 1);
  posX = posX + (speedX * dirX);
  posY = posY + (speedY * dirY);
  console.log("dirX= " + dirX);
  console.log("dirY= " + dirY);
}

function setDir(x, y) {
  speedX = speedX * x;
  speedY = speedY * y;
}

function keyPressed() {
  switch (keyCode) {
    case UP_ARROW:
      dirX = 0;
      dirY = -1;
      break;
    case DOWN_ARROW:
      dirX = 0;
      dirY = 1;
      break;
    case LEFT_ARROW:
      dirX = -1;
      dirY = 0;
      break;
    case RIGHT_ARROW:
      dirX = 1;
      dirY = 0;
      break;
    default:
      break;
  }

}
