const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

function setup() {
  createCanvas(800,400);
  noStroke();
}

function draw() {
  background(0);  
  hr = hour()
  mn = minute()
  sc = second()

  angleMode(DEGREES)

  scAngle = map(sc,0,60,0,360)

 stroke(255,0,0)
 strokeWeight(7)
 translate(200,200)
 line(0,0,100,0)
 
 
 push()
 rotate(scAngle)
 stroke(255,0,0)
 strokeWeight(7)
 line(0,0,100,0)
 translate(200,200)
 pop()
 
noFill();
arc(0, 0, 200, 200, 4, PI + QUARTER_PI);




  drawSprites();
}