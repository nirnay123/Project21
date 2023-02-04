
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj, leftSide, rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;

	//ball properties
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	};

	//Create the Bodies Here
	ball = Bodies.circle(500, 50, 10, ball_options);
	World.add(world, ball);
	ellipseMode(RADIUS);

	groundObj= new Ground(width/2, 570, width, 20);
	leftSide= new Ground(900, 500, 20, 120);
	rightSide= new Ground(1100, 500, 20, 120);
	
	Engine.run(engine);
	rectMode(CENTER);
}


function draw() {
  background(0);
  Engine.update(engine);

  groundObj.display();
  leftSide.display();
  rightSide.display();

  fill (250);
  ellipse(ball.position.x,ball.position.y, 10);

  keyPressed();

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-2});
	}
}