let posSerpenteX = 0;
let posSerpenteY = 0;

let velocitaSerpenteX = 1;
let velocitaSerpenteY = 1;

let direzioneSerpenteX = 1;
let direzioneSerpenteY = 1;

let posMelaX;
let posMelaY;

let riscalatura = 10;


function setup() {
  createCanvas(400, 400);
  frameRate(5);
  posMelaX = floor(random(0, width / riscalatura));
  posMelaY = floor(random(0, height / riscalatura));
  scale(riscalatura);
}

// function draw() {
//   scale(riscalatura);
//   background(120);
//   impostaSerpente();
//   muoviSerpente();
//   creaMela();

//   if (posMelaX == posSerpenteX && posMelaY == posSerpenteY) {
//     mangiaMela();
//   }
// }

function impostaDirezione(x, y) {
  velocitaSerpenteX = velocitaSerpenteX * x;
  velocitaSerpenteY = velocitaSerpenteY * y;
}

function keyPressed() {
  switch (keyCode) {
    case UP_ARROW:
      direzioneSerpenteX = 0;
      direzioneSerpenteY = -1;
      aggiorna();
      break;
    case DOWN_ARROW:
      direzioneSerpenteX = 0;
      direzioneSerpenteY = 1;
      aggiorna();
      break;
    case LEFT_ARROW:
      direzioneSerpenteX = -1;
      direzioneSerpenteY = 0;
      aggiorna();
      break;
    case RIGHT_ARROW:
      direzioneSerpenteX = 1;
      direzioneSerpenteY = 0;
      aggiorna();
      break;
    default:
      break;
  }

}


function impostaSerpente() {
  noStroke();
  fill(0);
  rect(posSerpenteX, posSerpenteY, 1, 1)
}


function muoviSerpente() {
  posSerpenteX = posSerpenteX + velocitaSerpenteX * direzioneSerpenteX;
  posSerpenteY = posSerpenteY + velocitaSerpenteY * direzioneSerpenteY;
  //console.log(posSerpenteX,posSerpenteY);
}

function mangiaMela() {
  posMelaX = floor(random(0, width / riscalatura));
  posMelaY = floor(random(0, height / riscalatura));

}


function creaMela() {
  noStroke();
  fill(255, 0, 0);
  rect(posMelaX, posMelaY, 1, 1)
  //console.log(posMelaX, posMelaY);
}

function mousePressed() {
  console.log(" mouse pressed");


}


function aggiorna(){

  background(120);
  muoviSerpente();
  impostaSerpente();

  creaMela();

  if (posMelaX == posSerpenteX && posMelaY == posSerpenteY) {
    mangiaMela();


  }

}