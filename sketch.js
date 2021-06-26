var fixedRect, movingRect;
var tom,jerry,doraemon, shinchan ;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  tom = createSprite(100, 100, 50, 50);
 tom.shapeColor = "green";
 jerry = createSprite(200, 100, 50, 50);
  jerry.shapeColor = "green";
 doraemon = createSprite(300, 100, 50, 50);
 doraemon.shapeColor = "green";
shinchan = createSprite(400, 100, 50, 50);
 shinchan.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, jerry)){
    movingRect.shapeColor = "blue";
   jerry.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    jerry.shapeColor = "green";
  }
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}