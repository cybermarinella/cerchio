var dim;

function setup() {
  createCanvas(1366, 768);
  dim = width/2;
  background(0);
  colorMode(HSB, 255, 20, 10);
  noStroke();
  ellipseMode(RADIUS);
  noLoop();
}

function draw() {
  background(0);
  for (var x = 0; x <= width; x+=dim) {
    drawGradient(x, height/2);
    //drawGradient(350, height/2); una palla
  } 
}

function drawGradient(x, y) {
  var radius = dim/2;
  var h = random(0, 360);
  for (var r = radius; r > 0; --r) {
    fill(h, 90, 90);
    ellipse(x, y, r, r);
    h = (h + 1) % 360;
  }
}

/*

ACIDE A RIGHINE
var dim;

function setup() {
  createCanvas(1366, 768);
  dim = width/2;
  background(0);
  colorMode(HSB, 255, 20, 10);
  noStroke();
  //ellipseMode(RADIUS);
  noLoop();
}

function draw() {
  background(0);
  for (var x = 0; x <= width; x+=dim) {
    drawGradient(width/2, height/2);
  } 
}

function drawGradient(x, y) {
  var radius = dim/2;
  var h = 20;
  i=100;
  for (var r = radius; r > 0; --r) {
    fill(h, 40, 40);
    ellipse(x, y, r, r);
    //ellipse(width*0.5, height*0.5, height- 120, height - 120);
    h = i++;
  }
}