
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  PaperObject= new Ball(200, 100, 50);
  ground = new Ground(600, 590, 1200, 20);
  ground1 = createSprite(600,590,1200,20);
  ground1.shapeColor="black";
  bin1 = new DustBin(1000,300);
  BinB=createSprite(1000,580,200,20);
  BinL=createSprite(900,480,20,200);
  BinR=createSprite(1100,480,20,200);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightGray");
  PaperObject.display();
  ground.display();
  bin1.display();
  
  drawSprites();
 
}

function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(PaperObject.body,PaperObject.body.position,{x:85,y:-85});
  }
}