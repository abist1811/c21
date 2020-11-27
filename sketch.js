var movingRect,fixedRect
var ob1,ob2
function setup() {
  createCanvas(800,400);
 fixedRect =  createSprite(400, 200, 50, 50);
 fixedRect.shapeColor ="red";
 fixedRect.debug=true;
 movingRect = createSprite(100,100,50,50);
 movingRect.shapeColor="red";
 movingRect.debug=true
ob1=createSprite(200,300,20,30)
ob1.shapeColor=("green")
ob2=createSprite(250,300,20,30)
ob2.shapeColor=("orange")
}

function draw() {
  background(0);
  movingRect.x = mouseX
  movingRect.y = mouseY  

  if(collison(movingRect,ob2)){
    ob2.shapeColor=("blue")
    movingRect.shapeColor=("blue")
  }else{
    ob2.shapeColor=("red")
    movingRect.shapeColor=("red")
  }

  drawSprites();
}

function collison(p1,p2){
  if(p1.x - p2.x <= p2.width/2 + p1.width/2 &&
    p2.x - p1.x <= p2.width/2 + p1.width/2&&
    p1.y - p2.y <= p2.height/2 + p1.height/2 &&
    p2.y - p1.y <= p2.height/2 + p1.height/2){

    return true 
  }else{
    return false
  }

}