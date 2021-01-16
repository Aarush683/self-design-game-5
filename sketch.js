var truck,truckImage;

var background1,backgroundImage;
var path1,path1Image;
var path,pathImage;
var car1,car1Image;
var car2,car2Image;
var car3,car3Image;
var fuel,fuelImage;
var car1group,car2group,car3group,fuelgroup;
var score=0;
var gamestate="play";
var edges;
var sound;





function preload(){
  truckImage=loadImage("images/t1.png");
  backgroundImage=loadImage("images/road.jpg");
  car1Image=loadImage("images/car1.png");
  car2Image=loadImage("images/car2.png");
  car3Image=loadImage("images/car3.png");
  sound=loadSound("CARRO3.wav");
  
  
  path1Image=loadImage("images/path1.png");
  //pathImage=loadImage("images/path.png");

  fuelImage=loadImage("images/fuel.png");

}
function setup() {

  createCanvas(1000,800);
 // sound.play();
   
  


  background1=createSprite(500,700,1000,1000);
  background1.addImage("background",backgroundImage);
  background1.scale=2;

  /*path1=createSprite(100,700,50,50);
  path1.addImage("path1",path1Image);
  path1.velocityY=-10;

  path=createSprite(900,700,50,50);
  path.addImage("path",pathImage);
  path.scale=2;
  path.velocityY=-10;*/

   



  truck=createSprite(500,500,70,70);
  truck.addImage("truck",truckImage);
  truck.scale=0.7;

  car1group=new Group();
  car2group=new Group();
  car3group=new Group();
  fuelgroup=new Group();

  edges=createEdgeSprites();
  
  

  
}

function draw() {
  background(0);
  truck.collide(edges[0])  
 truck.collide(edges[1]) 
 truck.collide(edges[2])  
  truck.collide(edges[3])  
 



  
 /* if(path1.y<200){
    path1.y=500;
  }*/
  

 // console.log(background1.y);
   


  drawSprites();

  fill("red");
  textSize(40)
  text("Score "+score,100,200);
  
  if(gamestate==="play"){
    background1.velocityY=20;

    if(keyDown("up")){
      truck.y=truck.y-5;
  
    }
    if(keyDown("down")){
      truck.y=truck.y+5;
  
    }
    if(keyDown("right")){
      truck.x=truck.x+5;
  
    }
    if(keyDown("left")){
      truck.x=truck.x-5;
   
    }
    
    if(background1.y>500){
      background1.y=400;
  
     
    }
    cars();
    fuels();

    for(var i=0;i<fuelgroup.length;i++){
      if(fuelgroup.get(i).isTouching(truck)){
        fuelgroup.get(i).destroy();
        score=score+5;
      }
   
     }

     for(var i=0;i<car2group.length;i++){
      if(car2group.get(i).isTouching(truck)){
        car2group.destroyEach();
        gamestate="end";
      }
   
     }
     for(var i=0;i<car3group.length;i++){
      if(car3group.get(i).isTouching(truck)){
        car3group.destroyEach();
        gamestate="end";
      }
   
     }
     for(var i=0;i<car1group.length;i++){
      if(car1group.get(i).isTouching(truck)){
        car1group.destroyEach();
        gamestate="end";
      }
   
     }

  }
  
  else if(gamestate==="end"){
    background1.velocityY=0;
   
    car1group.setVelocityYEach(0);
    car2group.setVelocityYEach(0);
    car3group.setVelocityYEach(0);
    fuelgroup.setVelocityYEach(0);

   
  fill("blue");
  textFont("Palatino")
  textSize(150);
  strokeWeight(10);
  stroke("green");
    text("GAME OVER",75,500);

  



  
  }

 
  
}
function cars(){

if(frameCount%100===0 ){
  car1=createSprite(300,300,50,50);
  car1.addImage("car1",car1Image);
  car1.velocityY=10;
  car1.x=Math.round(random(150,800));
  console.log(truck.depth);
  car1.scale=0.3;
  car1.depth=truck.depth;
  truck.depth=truck.depth+1;
  car1group.add(car1);
  //car1.lifetime=500/10=50
  car1.lifetime=50;
  
}

if(frameCount%375===0){
  car2=createSprite(300,300,50,50);
  car2.addImage("car2",car2Image);
  car2.velocityY=10;
  car2.x=Math.round(random(200,450));
  console.log(truck.depth);
  car2.scale=0.3;
  
  car2.depth=truck.depth;
  truck.depth=truck.depth+1;
  car2group.add(car2);
  car2.lifetime=50;
}

if(frameCount%575===0){
  car3=createSprite(300,300,50,50);
  car3.addImage("car3",car3Image);
  car3.velocityY=10;
  car3.x=Math.round(random(300,650));
  console.log(truck.depth);
  car3.scale=0.3;
  
  car3.depth=truck.depth;
  truck.depth=truck.depth+1;
  car3group.add(car3);
  car3.lifetime=50;
}



}
function fuels(){
 
  if(frameCount%60===0){
    fuel=createSprite(400,400,50,50);
    fuel.addImage("fuel",fuelImage);
    fuel.scale=0.2;
    fuel.velocityY=10;
    fuel.x=Math.round(random(200,700));
    fuel.y=Math.round(random(100,400));
    fuel.depth=truck.depth;
    truck.depth=truck.depth+1;
    fuelgroup.add(fuel);
    fuel.lifetime=40;
  }

}