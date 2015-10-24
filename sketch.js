
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