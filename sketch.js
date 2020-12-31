
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var bananaImage
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
createCanvas(600,400);  
  
monkey = createSprite(80, 315, 20, 20) ; 
monkey.addAnimation("moving", monkey_running)
monkey.scale=0.1  
  
ground = createSprite(300, 350, 600, 10) ;  


}


function draw() {
background("0")
  

 
if(keyDown("space")){
  monkey.velocityY = -10;
}
monkey.velocityY = monkey.velocityY +0.8
  monkey.collide(ground);
  
  
 Food(); 
 obstacle(); 
  
  
  
  
  drawSprites();
  
}

function Food(){
banana=createSprite(620,200,20,20);
if(World.frameCount%80===0){
banana.y=Math.round(random(100,250));   
banana.addImage(bananaImage);   
banana.scale=0.15;
banana.velocityX=-10;  
banana.lifetime=100;  
}
}  
function obstacle(){  
obstacles=createSprite(650, 300, 20, 20);
if(World.frameCount%120===0){ 
obstacles.addImage(obstacleImage);   
obstacles.scale=0.25;
obstacles.velocityX=-10;    
obstacles.lifetime=100;  
} 
  
  
 
  
}  
  
  
  
  
  
  
  
  