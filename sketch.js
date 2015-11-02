/// funzionante

var dim;
var gabbia;
var gabbiacanto;
var cardellino;
var cardellinocanto;
var dama;

var diameter; 
var angle = 0;

var hidden = true;
var counterStart = false;
var on = true;

function preload() {
    cardellino = loadImage("assets/cardellino.png");
    cardellinocanto = loadSound('assets/CantoCardellinoSiciliano.mp3');
    gabbia = loadImage("assets/gabbia.png");
    gabbiacanto = loadSound('assets/traffico.mp3');
    dama = createVideo(['assets/dama.mov']);
}

function setup() {
  createCanvas(1366, 768);
  dim = width/2;
  diametro = height/1.618;
  background(0);
  colorMode(RGB, 255);
  noStroke();
  ellipseMode(CENTER);
  rectMode(CENTER); 
  mousePressed();
  cardellinocanto.play();
  frameRate(10);

  diameter = height*2.5 -30;
  noFill();
  stroke(200, 200, 200, 100);
}

function draw() {
  //console.log('--', frameCount);
  background(244);
  for(var i=0; i < num; ++i ){
    noFill();
    stroke(155, 155, 155, 30*i);
    drawOnda();
  }
  
  for(var i=50; i < num; ++i ){
    noFill();
    stroke(0, 0, 155, 30*i);
    drawOnda();
  }

  noStroke();
  fill(255);
  ellipse(width*0.5, height*0.5, height/1.618, height/1.618);
  image(cardellino, width/2-260/2-40, height/2-400/2+60, 260, 400);
}

var t;
var num = 8;
var diametro;

function mousePressed() {
  cardellinocanto.stop();
  clearInterval(t);
}

function keyPressed() {
  if(key==="A"){
    on=true;
    cardellinocanto.stop();
    gabbiacanto.play()
    hidden = !hidden;
    console.log(key);
    drawGabbia();
    clearInterval(t); // be safe
    t = setInterval( function(){ 
      //console.log('timer tick' , hidden);
      hidden = !hidden;
      drawGabbia();  

    }, 5);
  }  else if(key==='K') {
    on=false;
    cardellinocanto.play();
    gabbiacanto.stop()
    console.log(key);
    clearInterval(t);
    hidden = true;
  }else if(key==='D') {
    on=false;
    //fingers.loop();
    console.log(key);
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
  }/*else{
    fill(255)
    ellipse(width*0.5, height*0.5, height/1.618, height/1.618);
    image(dama, width/2-260/2-40, height/2-400/2+60, 260, 400);
  }*/
}

function drawOnda(){
  noFill();
  if(d2>10){
    var d2 = 10 + (sin(angle + PI/2) * diameter/2) + diameter/2;
    fill(255, 0, 0);
    ellipse(width/2, height/2, d2, d2);
    console.log(diameter);
  }else{
    var d2 = 10 + (sin(angle + PI/2) * diameter/2) + diameter/2;
    noFill();
    ellipse(width/2, height/2, d2, d2);
    console.log(diameter);
  }
  //ellipse(width/2, height/2, d2, d2);
  angle += 0.05;
}
  // if(counterStart) {
  //  if(frameCount % 5 == 0) {
  //   hidden = !hidden;
  //   console.log('--', frameCount);
  //   drawGabbia();
  //   counterStart = false;
  //  }
  // }