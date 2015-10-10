var angle1=0;
var angle2=0;
var scalar = 70;
var bugs = []; // array of Jitter objects

function setup() {
  createCanvas(1024, 768);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(0);
  for (var i=0; i<bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }

  var ang1 = radians(angle1);
  var ang2 = radians(angle2);

  var x1 = width/2 + (scalar * cos(ang1));
  var x2 = width/2 + (scalar * cos(ang2));

  var y1 = height/2 + (scalar * sin(ang1));
  var y2 = height/2 + (scalar * sin(ang2));

  fill(255);
  ellipse(width*0.5, height*0.5, height- 120, height - 120);
  for(var i=0; i< width-20; i+= 4) {
    // The 30 is added to 70 and then evaluated
    // if it is greater than the current value of "i"
    // For clarity, write as "if (i > (30 + 70)) {"
    //if (i > 30 + 70) {
      fill(255, 204, 0);
      ellipse(i*i, mouseY, 50+i++*5, 50+i++*5);
    //}
}

  /*fill(0, 102, 153);
  ellipse(x1, height*0.5 - 120, scalar, scalar);
  ellipse(x2, height*0.5 + 120, scalar, scalar);
  
  fill(255, 204, 0);
  ellipse(width*0.5 - 120, y1, scalar, scalar);
  ellipse(width*0.5 + 120, y2, scalar, scalar);

  angle1 += 2;
  angle2 += 3; */
}

// Jitter class
function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = scalar+2;
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}


/*var coswave = [];

function setup() {
  createCanvas(1024, 768);
  for (var i = 0; i < width; i++) {
    var amount = map(i, 0, width, 0, PI);
    coswave[i] = abs(cos(amount));
  }
  background(255);
  noLoop();
}

function draw() {
  var y1 = 0;
  var y2 = height/3;
  for (var i = 0; i < width; i+=3) {
    stroke(coswave[i]*255);
    ellipse(i, y1, i, y2);
  }

 /* y1 = y2;
  y2 = y1 + y1;
  for (var i = 0; i < width; i+=3) {
    stroke(coswave[i]*255 / 4);
    ellipse(i, y1, i, y2);
  }
  
  y1 = y2;
  y2 = height;
  for (var i = 0; i < width; i+=3) {
    stroke(255 - coswave[i]*255);
    ellipse(i, y1, i, y2);
  }
}*/