//Create variables here
var dog,happyDog,database,foodS,foodStock;
var dogDatabase;

function preload()
{
	dog=loadImage("images/dogImg.png")
  happyDog=loadImage("images/dogImg1.png")
  
  
}


function setup() {
  createCanvas(1000,1000);
  
  database = firebase.database();

  dogSprite=createSprite(500,500,50,50)
  dogSprite.addImage("dog",dog)
  
  
}


function draw() {  

  background(46, 139, 87)

  if(keyWentDown(UP_ARROW)){
    writeStroke(Food)
    dog.addImage("happyDog",happyDog);
  }

  drawSprites();
  //add styles here

}

function readStock(){
  foodS=data.val();
}
function writeStroke(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x

 
  })
}


