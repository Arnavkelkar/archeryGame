const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint =Matter.Constraint;

var engine,world,circ1,circ2,circ3,circ4,circ5,circ6,circ7;
var arrow,arroimg,wind,popper,popperImg,arrowSnd,winSnd;
var Play=0;
var win=1;
var gameState=0;
var arrowGroup; 
var score = 0;

function preload(){
  arroimg = loadImage('images.png');
  popperImg = loadImage('download.jpg');
  arrowSnd = loadSound('arrowSound.mp3');
  winSnd = loadSound('winSound.mp3');
}

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  circ9 = Bodies.circle(400,400,240,{isStatic:true});
  World.add(world, circ9);
  circ8 = Bodies.circle(400,400,240,{isStatic:true});
  World.add(world, circ8);
  circ7 = Bodies.circle(400,400,210,{isStatic:true});
  World.add(world, circ7);
  circ6 = Bodies.circle(400,400,180,{isStatic:true});
  World.add(world, circ6);
  circ5 = Bodies.circle(400,400,150,{isStatic:true});
  World.add(world, circ5);
  circ4 = Bodies.circle(400,400,120,{isStatic:true});
  World.add(world, circ4);
  circ3 = Bodies.circle(400,400,90,{isStatic:true});
  World.add(world, circ3);
  circ2 = Bodies.circle(400,400,60,{isStatic:true});
  World.add(world, circ2);
  circ1 = Bodies.circle(400,400,30,{isStatic:true});
  World.add(world, circ1);

  arrowGroup=new Group();
}

function draw() {
  Engine.update(engine)
  background(0,200,255);

  if(gameState===Play){
  ellipseMode(RADIUS);
  fill('white');
  ellipse (circ9.position.x,circ9.position.y,270,270);
  fill('white');
  ellipse (circ8.position.x,circ8.position.y,240,240);
  fill('black');
  ellipse (circ7.position.x,circ7.position.y,210,210);
  fill('black');
  ellipse (circ6.position.x,circ6.position.y,180,180);
  fill('blue');
  ellipse (circ5.position.x,circ5.position.y,150,150);
  fill('blue');
  ellipse (circ4.position.x,circ4.position.y,120,120);
  fill('red');
  ellipse (circ3.position.x,circ3.position.y,90,90);
  fill('red');
  ellipse (circ2.position.x,circ2.position.y,60,60);
  fill('yellow');  
  ellipse (circ1.position.x,circ1.position.y,30,30);

  arrow=createSprite(mouseX+wind,mouseY,20,20);
  arrowGroup.add(arrow);
  arrow.visible=false;
    if(keyIsDown(UP_ARROW)){
    arrow.visible=true;
    arrow.addImage(arroimg);
    arrow.scale=0.3;
    arrowSnd.play();
    wind=Math.round(random(-25,25));
    textSize(20);
    text('wind :'+ wind,600,30)
    if(arrow.x>370 && arrow.x<430 && arrow.y>350 && arrow.y<490 ){
      score=score+1;
      }
    if(arrow.x>340 && arrow.x<460 && arrow.y>340 && arrow.y<460 ){
      score=score+1;
      }
    if(arrow.x>310 && arrow.x<490 && arrow.y>310 && arrow.y<490 ){
      score=score+1;
      }
    if(arrow.x>280 && arrow.x<520 && arrow.y>280 && arrow.y<520 ){
      score=score+1;
      }
    if(arrow.x>250 && arrow.x<550 && arrow.y>250 && arrow.y<550 ){
      score=score+1;
      }
    if(arrow.x>220 && arrow.x<580 && arrow.y>220 && arrow.y<580 ){
      score=score+1;
      }
    if(arrow.x>190 && arrow.x<610 && arrow.y>190 && arrow.y<610 ){
      score=score+1;
      }
    if(arrow.x>160 && arrow.x<640 && arrow.y>160 && arrow.y<640 ){
      score=score+1;
      }
    if(arrow.x>130 && arrow.x<670 && arrow.y>130 && arrow.y<670 ){
      score=score+1;
      }
    if(arrow.x>370 && arrow.x<430 && arrow.y>370 && arrow.y<430 && score>100){
      gameState=win;
      winSnd.play();
      }
      else{
        score=score+1
      }
    }
    textSize(30);
    fill('red');
    text('SCORE :' + score,80,180);
    text('HURRY! save the princess by shooting the target',60,50);
    text('Use Mouse to AIM and UP ARROW to shoot',60,720);
  }
  console.log(gameState)
  if(gameState===win){
    background(popperImg);
    arrowGroup.destroyEach();
    textSize(50);
    fill('red');
    text("YOU WIN",270,400);
    text('Congo you saved the princess',100,500);
  }
    drawSprites();
}