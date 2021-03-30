var fixedRect, movingRect
var object1,object2
function setup() {
  createCanvas(800, 400);
  fixedRect = createSprite(200, 200, 50, 50);
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  fixedRect.debug = "true";
  object1=createSprite(100,100,50,50);
  object1.shapeColor="green";
  object2=createSprite(200,100,50,50);
  object2.shapeColor="green";
}

function draw() {
  background(0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouching(movingRect,object1)) {
    movingRect.shapeColor = "blue";
    object1.shapeColor = "blue";
  }else{
    movingRect.shapeColor = "green";
    object1.shapeColor = "green";
  }
  drawSprites();
}
