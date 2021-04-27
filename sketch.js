var dog, dogimg, happyDog, database, foodS, foodStock;

function preload() {
  dogimg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value", readStock);
  dog = createSprite(250, 250, 50, 50)
 dog.addImage(dogimg)
 dog.scale=0.3;
 
}


function draw() {
  background(rgb(135,206,235) )
  if (keyWentDown("UP_ARROW")){

   dog.addImage(happyDog)
  writeStock(foodS)

  }

  if (keyWentDown("space")){

getFood();

  }
  fill("black")
text("Note: Press UP_ARROW Key to Feed The Dog",150,50)
text("food remaining: "+foodS,200,100)
  drawSprites();
  //add styles here

  console.log(foodS)
}

function readStock(data) {

  foodS = data.val();

}


function writeStock(data){
if (data != 0){
data = data-1;}
database.ref('/').update({food:data});



}
 function getFood(){
if (foodS === 0 ){
  foodS  = 20}
database.ref('/').update({food:foodS})
dog.addImage(dogimg)

 }






