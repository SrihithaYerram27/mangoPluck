
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constriant  = Matter.Constriant;


var rockIm,treeIm,mangoIm,boyIm;
var tree,mango,boy,stone,ground;
function preload()
{
	
	treeIm = loadImage("tree.png");
	mangoIm = loadImage("mango.png");
	boyIm = loadImage("boy.png");
	

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ground = createSprite(400,680,900,50);
	

	var tree = createSprite(560,430,10,10);
	tree.addImage(treeIm);
	tree.scale = 0.4;

	var boy = createSprite(150,620,10,10);
	boy.addImage(boyIm);
	boy.scale = 0.1;

	man1 = new Mango(100,500,30);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");

  man1.display();
 
  drawSprites();
 
}



