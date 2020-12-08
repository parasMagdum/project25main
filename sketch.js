
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin, paper,ground;
var world;
var bg, bgImg;

function preload(){
	bgImg = loadImage("bgImg.jpg")
}


function setup(){
   createCanvas(1400,650)
	engine = Engine.create();
	world = engine.world;
	
	paper=new Paper(200,450,70);
	ground=new Ground(width/2,610,width,20);
	dustbin=new Dustbin(1200,590);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);
 
  
  paper.display();
  ground.display();
  dustbin.display();

  
  
 
  
  
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:335,y:-240})
	}
	}





