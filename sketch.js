var dim;
var img; 

function setup() {
  createCanvas(1366, 768);
  dim = width/2;
  background(0);
  colorMode(RGB, 255);
  noStroke();
  ellipseMode(RADIUS);
  noLoop();

  //cardellino = loadSound('assets/CantoCardellinoSiciliano.mp3');
  dama = loadImage("assets/dama.gif"); 
}

function draw() {
  background(0);
  for (var x = 0; x <= width; x+=dim) {
    drawGradient(width/2, height/2);
  } 
  fill(255)
  ellipse(width*0.5, height*0.5, height/3, height/3);
  image(dama, 0, 0);
}

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

function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();
    background(255,0,0);
  } else {
    song.play();
    background(0,255,0);
  }
}