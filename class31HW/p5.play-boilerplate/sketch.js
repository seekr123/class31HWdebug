const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var plinkos=[];
var particles=[];
var divisions=[];
var divisionHeight=300;
var stand1,stand2,stand3,stand4,stand5,stand6,stand7

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  engine=Engine.create();
  world=engine.world;

  stand1 = new Ground(0, 680, 5, 200);
  stand2 = new Ground(80, 680, 10, 200);
  stand3 = new Ground(170, 680, 10, 200);
  stand4 = new Ground(250, 680, 10, 200);
  stand5 = new Ground(330, 680, 10, 200);
  stand6 = new Ground(410, 680, 10, 200);
  stand7 = new Ground(475, 680, 5, 200);

  ground=new Ground(0,780,1200,10);

  for(var k=50;k<=width;k=k+50){
   plinkos. push(new Plinko(k,175,10))
  }

  for(var k=75;k<=width;k=k+50){
    plinkos. push(new Plinko(k,75,10))
  }

  for(var k=75;k<=width;k=k+50){
    plinkos. push(new Plinko(k,275,10))
  }

  for(var k=50;k<=width;k=k+50){
    plinkos.push(new Plinko(k,375,10))
  }

}

function draw() {
  background(0);  
  Engine.update(engine);
 
  
  ground.display();

  for(var j=0;j<particles.legnth;j++){
    particles[j].display();
  }

  for(var i=0;i<plinkos.legnth;i++){
    plinkos[i].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10))
  }

  stand1.display();
  stand2.display();
  stand3.display();
  stand4.display();
  stand5.display();
  stand6.display();
  stand7.display();




  
  drawSprites();


}



