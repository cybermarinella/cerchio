var num = 8;
var diametro;

function setup() {
  createCanvas(1366, 768);
  diametro = height/1.618;
  ellipseMode(CENTER);
}

function draw() {
  background(244);
  stroke(200);
  noFill();
  ellipse(width/2, height/2, diametro , diametro);

  for(var i=0; i < num; ++i ){
    noStroke();
    fill(255, 0, 0, 10*i);
    var x =width/2  +i*5;
    var y =height/2  +i*5;
    ellipse(x, y, diametro , diametro);

    //narure of code
  }
}
 