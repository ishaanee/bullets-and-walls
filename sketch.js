var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2)
  speed=random(55,90);
  weight=random(1500,400);
  car.velocityX=speed;

}

function draw() {
  background(0,0,0);  
  console.log("123");
  
   
if (car.isTouching(wall))
{
deformation(car,speed);
   car.velocityX=0;
   car.x=1420;
}
  drawSprites();
}

function deformation (car,speed)
{

  deformation=0.5*weight*speed*speed/22500;

   if (deformation<100)
   {

     car.shapeColor="green";
   }
   if ((deformation>100)&&(deformation<180))
   {
     car.shapeColor="yellow";
   }
   if (deformation>180)
   {
     car.shapeColor="red"
   }
  }