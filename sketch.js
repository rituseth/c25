
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paper1; 
var ground1;
var dustbin1;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 paper1= new Paper(200,10 ,40);
	 ground1 = new Ground(600,400,1200,20);
	 dustbin1=new dustbin(1000,350,100,100);


	Engine.run(engine);
	 var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });
 Render.run(render); 
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  ground1.display();
 dustbin1.display();
 paper1.display();
 keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW)
{
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:100,y:95});
}}


