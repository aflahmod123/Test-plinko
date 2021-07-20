const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var groundimg;
var turn = 0;
var score = 0;
var gameState = "start";
var particles = [];
var plinkos = [];
var divisions = [];
var ball;
var balls = [];
var divisionHeight = 300;

function preload(){
  groundimg = loadImage("iceback.jpg");
}
function setup() { 
  createCanvas(480,800);
  
  back = createSprite(240, 798, 480, 30);
  back.addImage(groundimg);
  back.scale = 0.3;

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 785, 480, 30);

  //create division bodies
  for (var i = 0; i <= width; i = i + 80){
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }

  //create plinko bodies
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175));
  }
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 375));
  }

  //spawn particles
  
  
}

function draw() {
  Engine.update(engine);
  background(232, 255, 255 );
  textSize(35);
  text("score:"+score,20,40)
  fill(0);
  text(mouseX + "," + mouseY, mouseX , mouseY);
  text("200",15,500);
  text("200",100,500);
  text("500",180,500);
  text("500",250,500);
  text("100",320,500);
  text("100",410,500);

  ground.display();
  
  
  if(ball !== null){
      ball.display();
      if(ball.body.position.y > 760){
       if(ball.body.position.x > 159 &&  ball.body.position.x < 315 ){
score  = score+500;
ball = null;
if(turn >= 5){gameState = "end"}
      }
      else if(ball.body.position.x > 11 &&  ball.body.position.x < 160){
        score = score + 200;
        ball = null;
       if(turn >= 5){gameState = "end"}
      }
      else if(ball.body.position.x > 320 &&  ball.body.position.x < 450){
        score = score + 100;
        ball = null;
       if(turn >= 5){gameState = "end"}
      }
  }
}
  for (var j = 0; j < plinkos.length; j++){
    
    plinkos[j].display();
  }

  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  drawSprites();
  
  
}
function mousePressed(){
if(gameState !== "end" )
{
  count++ 
  ball = new Particle(mouseX,10,10,10)
}

}
