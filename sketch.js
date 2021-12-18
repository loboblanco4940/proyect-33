const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11, box12, box13,box14,box15,box16,box17,box18,box19,box20;
var marble1,marble2,marble3,marble4,marble5,marble6;
var viga,rope,ground;

function preload() {
  bg = loadImage("constrctorBackGround2.png");
  bg.scale = 0.5;
}

function setup() {
  createCanvas(2000, 900);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 800, 2500, 20);

  viga = new Viga(400,10,300,20);
  

  rope = new Rope(viga.body, { x: 500, y: 100 });
  

  marble1 = new Marble(400,0,20,20);
  marble2 = new Marble(500,0,20,20);
  marble3 = new Marble(600,0,20,20);
  marble4 = new Marble(700,0,20,20);
  marble5 = new Marble(800,0,20,20);
  marble6 = new Marble(900,0,20,20);
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  viga.display();
  marble1.display();
  marble2.display();
  marble3.display();
  marble4.display();
  marble5.display();
  marble6.display();
  

 
  rope.display();
  

}


function mouseDragged() {
  Matter.Body.setPosition(viga.body,{ x: mouseX, y: mouseY});
}