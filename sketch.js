const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world, object, ground;

function setup() {
var canvas=createCanvas(400,400);
 engine=Engine.create();
 world=engine.world;
 var object_options={
  restitution: 1.0
}
 object=Bodies.circle(200,100,20,object_options);
 World.add(world,object)
 var ground_options={
   isStatic:true
 }
 ground=Bodies.rectangle(200,390,400,20,ground_options);
 World.add(world,ground);
 
 console.log(object);
 console.log(object.type);
}
function draw() {
  background(0,0,0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(RADIUS); 
  ellipse(object.position.x,object.position.y, 20,20);
}