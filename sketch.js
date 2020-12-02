
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground, ball;

function setup() {
  varCanvas=createCanvas(400,400);

engine=Engine.create();

world=engine.world;

groundOptions={

isStatic: true
}

ballOptions={

  restitution: 1
  }

ground=Bodies.rectangle(200, 360, 400, 5, groundOptions);
ball=Bodies.circle(200, 200, 15, ballOptions);

World.add(world,ground);
World.add(world,ball);

console.log(ball);

//console.log(object.type);

//console.log(object.position.y);

//console.log(object.position.x);
}

function draw() {
  background(0); 

  rectMode(CENTER);
  ellipseMode(RADIUS);

  Engine.update(engine);

  rect(ground.position.x, ground.position.y, 400, 5);
  ellipse(ball.position.x, ball.position.y,15);


  //drawSprites();
}