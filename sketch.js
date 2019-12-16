const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig, log, box2, box3, box4, log1,pig1,box5,log2,log3;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    box2 = new Box(920,300,70,70);
    ground = new Ground(600,height,1200,20)
    pig = new Pig(800,300)
    log = new Log(800,260,300,PI/2)
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    log1 = new Log(800,200,300,PI/2)
    pig1 = new Pig(800,220)
    box5 = new Box(800,180,70,70)
    log2 = new Log(700,120,150,PI/5)
    log3 = new Log(850,120,150,-PI/5)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    log.display();
    box3.display();
    box4.display();
    log1.display();
    pig1.display();
    box5.display();
    log2.display();
    log3.display();
}