
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin,ground;	
var world;
var paper;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	ground=new Ground(width/2,680,width,20);
	dustbin=new Dustbin(1200,500);
	paper = new Paper(100,150,70,70);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  ground.display();
  paper.display(); 
  dustbin.display();
  
  if(keyDown("up_arrow")){
	paper.body.position.x = paper.body.position.x + 1;
	paper.body.position.y = paper.body.position.y - 3;
}

}

