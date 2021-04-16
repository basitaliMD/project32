const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var engine, world;

var G1;//G1 is Ground.
var S1, S2;//S1, S2 are Stands.
var B1, B2, B3, B4, B5, B6, B7;//level1, Stand1 blocks.
var B8, B9, B10, B11, B12;//level2, Stand1 blocks.
var B13, B14, B15;//level3, Stand1 blocks.
var B16;//level4, Stand1 blocks.
var B17, B18, B19, B20, B21;//level1, Stand2 blocks.
var B22, B23, B24;//level2, Stand2 blocks.
var B25;//level3, Stand2 blocks.

var ball;

var sling;

var img;

var backgroundImg, bg;

function preload() {
img = loadImage("hexagon (1).png");
getTime();
}

function setup() {
var canvas = createCanvas(1450,600);
engine = Engine.create();
world = engine.world;

//Ground
G1 = new Ground(750, 600, 1500, 10);

//Stands
S1 = new Ground(715, 280, 250, 10, {isStatic:true});
S2 = new Ground(990, 210, 200, 10, {isStatic:true});

//level1,stand1.

B1 = new Box(630, 260, 30, 40);
B2 = new Box(660, 260, 30, 40);
B3 = new Box(690, 260, 30, 40);
B4 = new Box(720, 260, 30, 40);
B5 = new Box(750, 260, 30, 40);
B6 = new Box(780, 260, 30, 40);
B7 = new Box(810, 260, 30, 40);
//level2,stand1.
B8 = new Box(660, 220, 30, 40);
B9 = new Box(690, 220, 30, 40);
B10 = new Box(720, 220, 30, 40);
B11 = new Box(750, 220, 30, 40);
B12 = new Box(780, 220, 30, 40);
//level3,stand1.
B13 = new Box(690, 180, 30, 40);
B14 = new Box(720, 180, 30, 40);
B15 = new Box(750, 180, 30, 40);
//level4,stand1.
B16 = new Box(720, 150, 30, 40);
//level1,stand2.
B17 = new Box(930, 170, 30, 40);
B18 = new Box(960, 170, 30, 40);
B19 = new Box(990, 170, 30, 40);
B20 = new Box(1020, 170, 30, 40);
B21 = new Box(1050, 170, 30, 40);
//level2,stand2.
B22 = new Box(960, 140, 30, 40);
B23 = new Box(990, 140, 30, 40);
B24 = new Box(1020, 140, 30, 40);
//level3,stand2.
B25 = new Box(990, 90, 30, 40);

ball = Bodies.circle(50, 200, 30);
World.add(world, ball);

sling = new SlingShot(this.ball,{x:200,y:180});
}

function draw() {
if(backgroundImg)
background(backgroundImg)
Engine.update(engine);
fill("red");
textSize(20);
text(mouseX+","+mouseY, 30, 30);

S1.display();
S2.display();

fill("skyblue");
B1.display();
B1.display();
B2.display();
B3.display();
B4.display();
B5.display();
B6.display();
B7.display();
fill("pink");
B8.display();
B9.display();
B10.display();
B11.display();
B12.display();
fill("turquoise");
B13.display();
B14.display();
B15.display();
fill("gray");
B16.display();
fill("skyblue");
B17.display();
B18.display();
B19.display();
B20.display();
B21.display();
fill("turquoise");
B22.display();
B23.display();
B24.display();
fill("pink");
B25.display();

imageMode(CENTER);
image(img,ball.position.x,ball.position.y,40,40);

fill("blue");
sling.display();

drawSprites();
}

function mouseDragged(){
Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
sling.fly();
}

function keyPressed() {
if(keyCode === 32) {
sling.attach(this.ball);
}
}

async function getTime() {
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON = await response.json();

var dateTime = responseJSON.datetime;
var hour = dateTime.slice(11,13);
console.log(hour);

if(hour >= 06 && hour <= 18) {
bg = rgb(0, 220, 0);
} else{
bg = rgb(0, 0, 220);
}

backgroundImg = bg;
}