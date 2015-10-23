
/// funzionante

var dim;
var gabbia;
var cardellino;
var cardellinocanto;

var hidden = true;
var counterStart = false;

function preload() {  // preload() runs once
    cardellinocanto = loadSound('assets/CantoCardellinoSiciliano.mp3');
    gabbia = loadImage("assets/gabbia.png");
    cardellino = loadImage("assets/cardellino.png");
}

function setup() {
  createCanvas(1366, 768);
  dim = width/2;
  background(0);
  colorMode(RGB, 255);
  noStroke();
  ellipseMode(CENTER);
  rectMode(CENTER); 

  mousePressed();
  cardellinocanto.play();
}

function draw() {

  // if(counterStart) {
  //  if(frameCount % 5 == 0) {
  //   hidden = !hidden;
  //   console.log('--', frameCount);
  //   drawBird();
  //   counterStart = false;
  //  }
  // }


}

var t;

function mousePressed() {
  //fai partire il counter
  counterStart = true;
   hidden = !hidden;
    console.log('timer tick');
    drawBird();

//dag
  clearInterval(t); // be safe
  t = setInterval( function(){ 
    hidden = !hidden;
    console.log('timer tick');
    drawBird();    
  }, 500);
}

function keyPressed() {
  console.log(key);
  if(key==='K') {

  }
  clearInterval(t);
}

function drawBird() {
  if ( hidden ) { // .isPlaying() returns a boolean
    cardellinocanto.stop();
    background(0);
    fill(255)
    ellipse(width*0.5, height*0.5, height/1.618, height/1.618);
    image(gabbia, width/2-400/2, height/2-450/2-10, 400, 450);
  } else {
    background(244);
    fill(255)
    ellipse(width*0.5, height*0.5, height/1.618, height/1.618);
    image(cardellino, width/2-260/2-40, height/2-400/2+60, 260, 400);
    cardellinocanto.play();
  }
}