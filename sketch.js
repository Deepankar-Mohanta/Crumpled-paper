
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Canvas
var paper1;
var dustbin1, dustbin2, dustbin3;
var ground1;


function preload()
{
	
}

function setup() {
	Canvas=createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1=new Paper(100, 450, 40);
	dustbin1=new Dustbin(650, 650, 200, 20, PI/2);
	dustbin2=new Dustbin(550, 600, 20, 100, PI/8);
	dustbin3=new Dustbin(750, 600, 20, 100, PI/8);
	ground1=new ground(width/2,670, width, 20);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
  Engine.update(engine);

  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();
  drawSprites();

 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:60,y:-60});
  
	}
}



