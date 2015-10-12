var dim;
var gabbia;
var cardellino;
var cardellinocanto;

function preload() {  // preload() runs once
    cardellinocanto = loadSound('assets/CantoCardellinoSiciliano.mp3');
    gabbia = loadImage("assets/stock-photo-17901185-birdcage.jpg");
    cardellino = loadImage("assets/cardellino.jpg");
}

function setup() {
  createCanvas(1366, 768);
  dim = width/2;
  background(0);
  colorMode(RGB, 255);
  noStroke();
  ellipseMode(CENTER);
  rectMode(CENTER); 
  noLoop();
}


function draw() {
  background(244);
  fill(255)
  ellipse(width*0.5, height*0.5, height/1.618, height/1.618);
  image(cardellino, width/2-254/2, height/2-200/2, 254, 200);
}

function mousePressed() {
  if ( cardellinocanto.isPlaying() ) { // .isPlaying() returns a boolean
    cardellinocanto.stop();
    background(0);
    fill(255)
    ellipse(width*0.5, height*0.5, height/1.618, height/1.618);
    image(gabbia, width/2-370/2, height/2-556/2, 370, 556);
  } else {
    background(244);
    fill(255)
    ellipse(width*0.5, height*0.5, height/1.618, height/1.618);
    image(cardellino, width/2-254/2, height/2-200/2, 254, 200);
    cardellinocanto.play();
    hide(gabbia);
  }
}