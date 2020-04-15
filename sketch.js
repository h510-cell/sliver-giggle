var box1;
var platform;
function setup() {
  createCanvas(1200,400);
  
  ground=new Ground(600,height,1200,20);
  platform=new Ground(150,305,300,170);
  
  log1=new Log(180,260,300,PI/2);
  log2=new Log(180,280,300,PI/2);
  
  box1=new Box(180,300,50,50);
  log3=new Log(200,300,PI/2);
  
  ball=new Ball(220,300);
}
function draw() {
  background(225);
  
  noStroke();
  textSize(35)
  fill("white")
  
  //strokeWeight(4);
  box1.display();
  log1.display();
  log2.display();
  log3.display();
  ground.display();
  ball.display();
}
function mouseDrgged(){
//if(gameState!=="launched"){
   Matter.body.setPosition(ball.body,{mousex,y:mouseY});
//}
}
function mouseReleased(){
  log.fly();
  gameState="launched";
}
function keyPressed(){
  if (keyCode===32){
    ball.trajectroy=[];
    Matter.body.setAngle(ball.body,{x:220,y:300});
    log.attach(ball.body)
}
}
