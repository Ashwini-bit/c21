var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;

  movingRect.velocityY = -5;
 // fixedRect.velocityY = +5;
}

function draw() {
  background("pink");  

  if (bounceoff(movingRect,fixedRect))
  {
    // movingRect.velocityY=0;
    
    
  }
  

  drawSprites();
}

