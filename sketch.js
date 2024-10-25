let posSerpenteX = 0;
let posSerpenteY = 0;

let velocitaSerpenteX = 1;
let velocitaSerpenteY = 1;

let direzioneSerpenteX = 1;
let direzioneSerpenteY = 0;

let posMelaX;
let posMelaY;

let riscalatura = 10;

let serpente = [];




function setup() {
  createCanvas(400, 400);
  frameRate(5);
  posMelaX = floor(random(0, width / riscalatura));
  posMelaY = floor(random(0, height / riscalatura));
  scale(riscalatura);
  serpente.length = 3;
  console.log(serpente);
}

function draw() {
  scale(riscalatura);
  background(120);
  disegnaSerpente();
  muoviSerpente();
  disegnaMela();

  if (posMelaX == posSerpenteX && posMelaY == posSerpenteY) {
    mangiaMela();
  }
}

function impostaDirezione(x, y) {
  velocitaSerpenteX = velocitaSerpenteX * x;
  velocitaSerpenteY = velocitaSerpenteY * y;
}

function keyPressed() {
  switch (keyCode) {
    case UP_ARROW:
      direzioneSerpenteX = 0;
      direzioneSerpenteY = -1;
      //aggiorna();
      break;
    case DOWN_ARROW:
      direzioneSerpenteX = 0;
      direzioneSerpenteY = 1;
      //aggiorna();
      break;
    case LEFT_ARROW:
      direzioneSerpenteX = -1;
      direzioneSerpenteY = 0;
      //aggiorna();
      break;
    case RIGHT_ARROW:
      direzioneSerpenteX = 1;
      direzioneSerpenteY = 0;
      //aggiorna();
      break;
    default:
      break;
  }
}


function disegnaSerpente() {
  noStroke();
  fill(0);
  for (let index = 0; index < serpente.length-1; index++) {
    
    serpente[index] = serpente[index+1];
    rect(posSerpenteX-direzioneSerpenteX*index, posSerpenteY-direzioneSerpenteY*index, 1, 1)
  }

  // noStroke();
  // fill(0);
  // rect(posSerpenteX, posSerpenteY, 1, 1)
}


function muoviSerpente() {
  for (let index = 0; index < serpente.length-1; index++) {  
    serpente[index] = serpente[index+1];
  }
  posSerpenteX = posSerpenteX + velocitaSerpenteX * direzioneSerpenteX;
  posSerpenteY = posSerpenteY + velocitaSerpenteY * direzioneSerpenteY;
}

function mangiaMela() {
  posMelaX = floor(random(0, width / riscalatura));
  posMelaY = floor(random(0, height / riscalatura));
  disegnaMela();
  disegnaSerpente();
}


function disegnaMela() {
  noStroke();
  fill(255, 0, 0);
  rect(posMelaX, posMelaY, 1, 1)
}

function mousePressed() {
  console.log(" mouse pressed");
}


function aggiorna(){
  background(120);
  muoviSerpente();
  disegnaSerpente();
  disegnaMela();

  if (posMelaX == posSerpenteX && posMelaY == posSerpenteY) {
    mangiaMela();
  }

}