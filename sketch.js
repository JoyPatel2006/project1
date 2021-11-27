var ball;

function setup() {
  createCanvas(800,800);
ball=createSprite(400,400, 50,50);
ball.shapeColor="blue"


}

function draw() 
{
  background(30);
if(keyIsDown(RIGHT_ARROW)) {
ball.position.x=ball.position.x+6

}
if(keyIsDown(LEFT_ARROW)){
ball.position.x=ball.position.x-6

}
if (keyIsDown(UP_ARROW)){
ball.position.y=ball.position.y-6

}
if(keyIsDown(DOWN_ARROW)){
ball.position.y=ball.position.y+6

}

  drawSprites()
}




