var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "PLAY"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(200,200,50,50);
  ghost.addImage(ghostImg);
  ghost.scale = 0.3;

  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  

  
  
}

function draw() {
  background(200);
  if (gameState === "play") {

  
  if(tower.y > 400){
      tower.y = 300
    }
  if (keyDown("space")) {
    ghost.velocityY = -5;

  }
  if (keyDown("left")) {
 ghost.x = ghost.x-3
  }
 if (keyDown("right")) {
   ghost.x = ghost.x +3
 }

 if (climbersGroup.isTouching(ghost)) {
   ghost.velocityY = 0;
 }

if (invisibleBlockGroup.isTouching(ghost)||ghost.y>600) {
  ghost.destroy();
gameState = "end";
}
  ghost.velocityY = ghost.velocityY + 0.6;
  Spawndoor();

  drawSprites();
}
if (gameState === "end"){
 stroke("yellow");
  fill("yellow");
   textSize(30);
   text("Game Over", 230,250) 
}
}
function Spawndoor() {
  if (frameCount%240 === 0) {
    door = createSprite(200,-50);
    door.addImage(doorImg);
    door.x  = Math.round(random(120,400));
    door.velocityY = 1;
    door.lifetime = 500;
    doorsGroup.add(door);

   climber = createSprite(200,10);
   climber.addImage(climberImg)
   climber.velocityY = 1;
   climber.lifetime = 500;
   climber.x = door.x;
   climbersGroup.add(climber);

   invisibleBlock = createSprite(200,15);
   invisibleBlock.height = 2;
   invisibleBlock.debug = true;
   invisibleBlock.velocityY = 1;
   invisibleBlock.x = door.x;
   invisibleBlockGroup.add(invisibleBlock);
    
  }
  }