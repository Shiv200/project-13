var garden,rabbit;
var gardenImg,rabbitImg;

var apple, applesGroup, appleImg;
var leaf, leafGroup, leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg,"garden.png");

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg,"rabbit.png");
}


function draw() {
  background(0);
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,2));
  if (frameCount % 80 === 0){
    if(select_sprites == 1) {
       createApples();
    }
    else {
      createLeafs();
    }

  createApples();
  createLeafs();
  drawSprites();
}

function createApples() {
  
     apple = createSprite(random(50, 350),40,10,10);
    apple.addImage(appleImg)
    apple.scale = 0.5;
    apple.velocityX = -6;

    apple.lifetime = 200

     
  }

function createLeafs() {
    leaf = createSprite(random(50,350),40,10,10);
    leaf.addImage(leafImg)
    leaf.scale = 0.5;
    leaf.velocityX = -6;

    leaf.lifetime = 200
}
}
