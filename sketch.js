var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
   movingRect= createSprite(400, 200, 80, 30);
  fixedRect1=createSprite(500,200,50,80);
  fixedRect2=createSprite(600,200,50,80);
}

function draw() {
  background(0,0,0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
  if(isTouching(movingRect,fixedRect)){

    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }
  
  else if(isTouching(movingRect,fixedRect1)){
    movingRect.shapeColor="red";
    fixedRect1.shapeColor="red";
  }
  
  else if(isTouching(movingRect,fixedRect2)){
    movingRect.shapeColor="red";
    fixedRect2.shapeColor="red";
  }

  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
    fixedRect1.shapeColor="green"
    fixedRect2.shapeColor="green"
  }
  
  drawSprites();
}
    

