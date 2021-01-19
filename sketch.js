var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(300, 100, 80, 30);
  movingRect.shapeColor="green";
  movingRect.debug=true;

  fixedRect=createSprite(200,100,50,80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
}

function draw() {
  background("black");  
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2+fixedRect.height/2){
      fixedRect.shapeColor="red";
      movingRect.shapeColor="red";
    }else{
      movingRect.shapeColor="green";
      fixedRect.shapeColor="green";
    }
  
  drawSprites();


}