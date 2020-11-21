
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;

function setup() {
  var canvas = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic :true
  }

  ground=Bodies.rectangle(200,380,400,20,ground_options);
  World.add(world,ground);

  var box_options ={
    restitution: 1.0
  }

  box=Bodies.rectangle(200,200,50,50,box_options);
  World.add(world,box);

  var ball_options={
   restitution : 1.0
  }

  ball=Bodies.circle(100,100,50,ball_options);
  World.add(world,ball);
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
rectMode(CENTER);
  rect(box.position.x,box.position.y,50,50);
  ellipseMode(RADIUS);
  circle(ball.position.x,ball.position.y,50);


}