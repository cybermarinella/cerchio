var Polygon = function() {

  var sides             = floor(random(5, 18));
  var cx                = random(0, width);
  var cy                = random(0, height);
  var angle             = random(0, 360);
  var radius            = 0;
  var color             = colors[floor(random(0, colors.length))];
  var lineWeight        = random(0.75, 1.5);
  var radiusIncrement   = random(4, 9);
  var rotationIncrement = random(-2, 2);
  var points            = [];

  var updatePoints = function() {
    points = [];
    for (i = 0; i < sides; i++) {
      var a = angle + (i / sides) * 360;
      var x = cx + (cos(radians(a)) * radius);
      var y = cy + (sin(radians(a)) * radius);
      points.push([x, y]);
    }
  }

  var draw = function() {
    updatePoints();
    stroke(color);
    strokeWeight(lineWeight);
    noFill();
    beginShape();
    for (i = 0; i < sides; i++) {
      vertex(points[i][0], points[i][1]);
    }
    endShape(CLOSE);
    radius = radius + radiusIncrement;
    angle = angle + rotationIncrement;
  }

  var getRadius = function() {
    return radius;
  }

  return {
    'draw': draw,
    'getRadius': getRadius
  }
}


var p;
var colors;
var radiusLimit;

var dim;
var gabbia;
var cardellino;
var cardellinocanto;

function preload() {  // preload() runs once
    cardellinocanto = loadSound('assets/CantoCardellinoSiciliano.mp3');
    gabbia = loadImage("assets/gabbia.png");
    cardellino = loadImage("assets/cardellino.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(244);
  frameRate(48);
  radiusLimit = sqrt(pow(windowWidth, 2) + pow(windowHeight, 2));
  colors = [
    color(155),
    color(142),
    color(155),
    color(140)
  ];
  //noLoop();
  p = new Polygon();
}

function draw() {
  p.draw();
  if (p.getRadius() > radiusLimit) {
    background(244);
    p = new Polygon();
  }
  fill(255)
  noStroke();
  ellipse(width*0.5, height*0.5, height/1.618, height/1.618);
  image(cardellino, width/2-260/2-40, height/2-400/2+60, 260, 400);
  //cardellinocanto.play(); va in loop!?!
}

function mousePressed() {
  if ( cardellinocanto.isPlaying() ) { // .isPlaying() returns a boolean
    //cardellinocanto.stop();
    background(0);
    fill(255)
    ellipse(width*0.5, height*0.5, height/1.618, height/1.618);
    image(gabbia, width/2-400/2, height/2-450/2-10, 400, 450);
  } else {
    cardellinocanto.play();
    background(244);
    fill(255)
    ellipse(width*0.5, height*0.5, height/1.618, height/1.618);
    image(cardellino, width/2-260/2-40, height/2-400/2+60, 260, 400);
  }
}