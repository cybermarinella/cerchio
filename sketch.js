
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

/// funzionante

var dim;
var gabbia;
var cardellino;
var cardellinocanto;

var hidden = true;
var counterStart = false;
var on = true;

function preload() {
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
  frameRate(5);
}

function draw() {
  //console.log('--', frameCount);
}

var t;

function mousePressed() {
  cardellinocanto.stop();
  console.log(key);
  clearInterval(t);
  hidden = true;
}

function keyPressed() {
  if(key==="A"){
    on=true;
    cardellinocanto.stop();
    hidden = !hidden;
    console.log(key);
    //drawGabbia();
    clearInterval(t); // be safe
    t = setInterval( function(){ 
      //console.log('timer tick' , hidden);
      hidden = !hidden;
      drawGabbia();    
    }, 5);
  }  else if(key==='K') {
    on=false;
    cardellinocanto.play();
    console.log(key);
    clearInterval(t);
    hidden = true;
  };
}

function drawGabbia() {
  if(on==true){
    if ( hidden ) {
      background(0);
      image(gabbia, width/2-800/2-50, height/2-700/2-20, 880, 730);
    } else {
      background(244);
      fill(255)
      ellipse(width*0.5, height*0.5, height/1.618, height/1.618);
      image(cardellino, width/2-260/2-40, height/2-400/2+60, 260, 400);
    }
  }else{
    fill(255)
    ellipse(width*0.5, height*0.5, height/1.618, height/1.618);
    image(cardellino, width/2-260/2-40, height/2-400/2+60, 260, 400);
  }
}

  // if(counterStart) {
  //  if(frameCount % 5 == 0) {
  //   hidden = !hidden;
  //   console.log('--', frameCount);
  //   drawGabbia();
  //   counterStart = false;
  //  }
  // }