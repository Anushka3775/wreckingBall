const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3;
var backgroundImg,platform;

var bg = "sprites/bg1.png";
var bgImg;


function preload() {

}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,310,70,70);
    box2 = new Box(700,380,70,70);
    box3 = new Box(700,240,70,70);

    box4 = new Box(770,310,70,70);
    box5 = new Box(770,380,70,70);
    box6 = new Box(770,240,70,70);
    box7 = new Box(770,450,70,70);

}

function draw(){
     background("lightblue");
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();

    box4.display();
    box5.display();
    box6.display();
    box7.display();

    
    ground.display();
   
}
