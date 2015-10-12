var dim;
var gabbia;
var cardellino;

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
}


function draw() {
  background(244);
  /*for (var x = 0; x <= width; x+=dim) {
    drawGradient(width/2, height/2);
  } */
  fill(255)
  ellipse(width*0.5, height*0.5, height/3, height/3);
  image(cardellino, width/4, height/4, 254, 200);
 /* textSize(32);
  text("Cardellino", 10, 30);
  textSize(12);
  text("Secondo la mitologia greca il cardellino sarebbe in realtà una delle Pieridi, Acalante, trasformata in uccello da Atena; il mito è raccontato da Ovidio nelle Metamorfosi.", 10, 30);
 cardellinocanto.play();*/
}


/*function mousePressed() {
  if ( cardellinocanto.isPlaying() ) { // .isPlaying() returns a boolean
    cardellinocanto.stop();
    image(cardellino, width/3, height/3, 254, 200);
  } else {
    cardellinocanto.play();
  }
}*/

function drawGradient(x, y) {
  var radius = dim/2;
  var h = 20;
  i=100;
  for (var r = radius; r > 0; --r) {
    if(h<220){
      fill(h+120, h+120, h+120);
    }else{
      fill(h, h, h);
    }
    ellipse(x, y, r*3, r*4);
    //ellipse(x, y, r, r);
    h = i++/3;
  }
}