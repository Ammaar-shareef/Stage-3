const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var leftSide;
var rightSide;
var extRight;
var extLeft;

var ball;


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,395,800,20);
  rightSide = new Ground(600,360,15,80);
  leftSide = new Ground(500,360,15,80);
  extRight = new Ground(795,200,10,400);
  extLeft = new Ground(5,200,10,4000)

  var ball_options = {
    isStatic: false,
    restitution: 0.2,
    friction: 0,
    density: 1.2
  }
 
  ball = Bodies.circle(200,200,15,ball_options);
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  fill("white");
  ellipse(ball.position.x,ball.position.y,15);
  ground.show();
  leftSide.show();
  rightSide.show();
  extLeft.show();
  extRight.show();

  Engine.update(engine);
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,{x:0, y:0},{x:20, y:5})
  }
}
