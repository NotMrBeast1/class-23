const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var box1,box2;
var ground1

function setup(){
  var canvas = createCanvas(400,400);
  myengine = Engine.create();
  myworld = myengine.world;

  box1 = new BOX(200,100,50,40);
  box2 = new BOX(180,170,50,60);

  ground1 = new GROUND();
}

function draw(){
  background(0);
  Engine.update(myengine);

  box1.display();
  box2.display();

  ground1.display1();
}