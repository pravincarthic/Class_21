var rect1, rect2, rect3, rect4, rect5;
var edges;

function setup() {
  createCanvas(windowWidth,windowHeight);
  rect1 = createSprite(200, 200, 50, 50);
  rect2 = createSprite(350, 350, 50, 50);
  rect3 = createSprite(400, 200, 80, 100);
  rect4 = createSprite(400, 100, 80, 80);
  rect5 = createSprite(200, 200, 80, 100);
  edges = createEdgeSprites();
  rect2.shapeColor = rgb(random(0, 255), random(0, 255), random(0, 255));
  rect1.shapeColor = rgb(random(0, 255), random(0, 255), random(0, 255));
  rect3.shapeColor = rgb(random(0, 255), random(0, 255), random(0, 255));
  rect4.shapeColor = color('hsl(250, 100%, 1%)'); noStroke();
  rect5.shapeColor = color('hsl(190, 100%, 50%)'); noStroke();
}

function draw() {
  
  rect1.bounceOff(edges);
  rect2.bounceOff(edges);
  noCursor();
  // rect1.velocityX = 3;
  // rect1.velocityY = 15;
  rect1.x = mouseX;
  rect1.y = mouseY;
  if (touching(rect1, rect3), speed(6000, 666)) {
    rect1.shapeColor = color('hsl(160, 100%, 50%)'); noStroke();
    rect3.shapeColor = color('hsl(160, 100%, 50%)'); noStroke();
  }
  else if(touching(rect1, rect2)){
    rect2.shapeColor = color('hsl(200, 100%, 50%)'); noStroke();
    rect1.shapeColor = color('hsl(160, 100%, 50%)'); noStroke();
  }
  else if(touching(rect1, rect4)){
    rect4.shapeColor = color('hsl(200, 100%, 50%)'); noStroke();
    rect1.shapeColor = color('hsl(160, 100%, 50%)'); noStroke();
  }
  else if(touching(rect1, rect5)){
    rect5.shapeColor = color('hsl(200, 100%, 50%)'); noStroke();
    rect1.shapeColor = color('hsl(160, 100%, 50%)'); noStroke();
  }
  else{
  rect2.shapeColor = rgb(random(0, 155), random(0, 255), random(0, 255));
  rect1.shapeColor = rgb(random(0, 255), random(0, 255), random(0, 255));
  rect3.shapeColor = rgb(random(0, 255), random(0, 255), random(0, 255), random(0, 0.5));
  rect4.shapeColor = color('hsl(250, 100%, 1%)'); noStroke();
  rect5.shapeColor = color('hsl(190, 100%, 50%)'); noStroke();
  }




  background(200,255,0);  
  drawSprites();
}

function touching(recttouching1, recttouching2) {
  if(rect1.x-rect2.x < rect1.width/2+rect2.width/2 && rect2.x-rect1.x < rect1.width/2+rect2.width/2 && rect1.y-rect2.y < rect1.height/2+rect2.height/2 && rect2.y-rect1.y < rect1.height/2+rect2.height/2){
    background(200,255,0);
    return true;
  }
  else{
    return false;
  }
}
function speed(speed1, speed2) {
  mouseX = speed1/ 100;
  mouseY = speed1/speed2;
}