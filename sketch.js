var bob1, bob2, bob3, bob4, bob5, roof, rope1, rope2, rope3, rope4, rope5, engine, world;
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	ellipseMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	bob1 = new Bob (300, 300);
	bob2 = new Bob (350, 300);
	bob3 = new Bob (400, 300);
	bob4 = new Bob (450, 300);
	bob5 = new Bob (500, 300);

	roof = new Roof (400, 100, 300, 10);

	rope1 = new Chain (bob1.body, {x: 300, y: 100});
	rope2 = new Chain (bob2.body, {x: 350, y: 100});
	rope3 = new Chain (bob3.body, {x: 400, y: 100});
	rope4 = new Chain (bob4.body, {x: 450, y: 100});
	rope5 = new Chain (bob5.body, {x: 500, y: 100});

}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);

  background(0);

  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -70, y: 70});
	  }
}