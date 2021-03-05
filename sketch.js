const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//var ground;
var world;
var box1;




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  //ground = new Ground(600,height,1200,20);

  box1 = new Box(700,320,70,70);

}

function draw() {
  background(255,255,255);  
  
  //ground.display();
  box1.display();

}