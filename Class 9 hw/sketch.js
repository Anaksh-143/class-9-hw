var arena;
var player, enemy1Group;
var planetearth, planetenemy;
var boder1, boder2;
var rocket, score


function preload(){
  
  arenaImage = loadImage ("arena.png");
  planetearthImage = loadImage ("earth.png");
  planetenemyImage = loadImage ("earth.png");
  playerImage = loadImage ("ship.png");
  enemyplane1 = loadImage ("ship2.png");
  enemyplane2 = loadImage ("ship2.png");
  enemyplane3 = loadImage ("ship2.png");
  enemyplane4 = loadImage ("ship2.pngg");
  rocketImage = loadImage ("rocket.png");
  diamondImage = loadImage ("diamond.png");
  emeraldImage = loadImage ("emerald.png");
  goldImage = loadImage ("gold.png");
  rubyImage = loadImage ("ruby.png");
  sliverImage = loadImage ("ruby.png");

}

function setup() {
  createCanvas(645, 295);

  arena = createSprite (320,145,20,20);
  arena.addImage("area", arenaImage);

  planetearth = createSprite (40,40,20,20);
  planetearth.addImage("earth", planetearthImage);
  planetearth.scale=0.1;

  planetenemy = createSprite (590,40,20,20);
  planetenemy.addImage("enemiya", planetenemyImage);
  planetenemy.scale=0.1;

  player = createSprite (80,150,20,20);
  player.addImage("ship", playerImage);
  player.scale=0.7


  score = 0;
  enemy1Group = new Group();
  enemy2Group = new Group();
  enemy3Group = new Group();
  enemy4Group = new Group();
  rocketGroup = new Group();
  power1Group = new Group();
  power2Group = new Group();
  power3Group = new Group();
  power4Group = new Group();
  power5Group = new Group();

}

function draw() {
  background("white");  

  if (keyDown("space")) {
    rocket();    
  }
  
  if (rocketGroup.isTouching(enemy1Group)){
    enemy1Group.destroyEach();
    rocketGroup.destroyEach(); 
    score=score+1;   
  }
  if (rocketGroup.isTouching(enemy2Group)){
    enemy2Group.destroyEach();
    rocketGroup.destroyEach();  
    score=score+1;  
  }
  if (rocketGroup.isTouching(enemy3Group)){
    enemy3Group.destroyEach();
    rocketGroup.destroyEach();    
    score=score+1;
  }
  if (rocketGroup.isTouching(enemy4Group)){
    enemy4Group.destroyEach();
    rocketGroup.destroyEach();   
    score=score+1; 
  }
  if (player.isTouching(power1Group)){
    power1Group.destroyEach();
    score=score+2;   
  }
  if (player.isTouching(power2Group)){
    power2Group.destroyEach();
    score=score+2;   
  }
  if (player.isTouching(power3Group)){
    power3Group.destroyEach();
    score=score+22;    
  }
  if (player.isTouching(power4Group)){
    power4Group.destroyEach();
    score=score+2;    
  }
  if (player.isTouching(power5Group)){
    power5Group.destroyEach();
    score=score+2;    
  }  
  
  var select_enemy = Math.round(random(1,4));
  
  if (World.frameCount % 50 == 0) {
    if (select_enemy == 1) {
      enemy1();
    } else if (select_enemy == 2) {
      enemy2();
    } else if (select_enemy == 3) {
      enemy3();
    } else {
      enemy4();
    }
  }

  var select_power = Math.round(random(5,9));

  if (World.frameCount % 20 == 0) {
    if (select_power == 5) {
      power1();
    } else if (select_power == 6) {
      power2();
    } else if (select_power == 7) {
      power3();
    } else if (select_power == 8) {
      power4();
    } else {
      power5();
    }
  }

  player.x = World.mouseX
  player.y = World.mouseY
  
  
  drawSprites();
  
  textSize(15);
  text(+ score, 70,45);  
  
  for (var i = 0; i < 400; i=i+20) {
    line(200,i,200,i+10);
  }

}

function enemy1(){
  var enemy1 = createSprite (600,Math.round(random(100, 250)), 20, 20);
  enemy1.addImage("plane1", enemyplane1);
  enemy1.scale=0.4;
  enemy1.velocityX =-3;
  enemy1.lifetime = 300;
  enemy1Group.add(enemy1);   
  return enemy1;

}
function enemy2(){
  var enemy2 = createSprite (600,Math.round(random(100, 250)), 20, 20);
  enemy2.addImage("plane2", enemyplane2);
  enemy2.scale=0.4;
  enemy2.velocityX =-3;
  enemy2.lifetime = 300;
  enemy2Group.add(enemy2);   
  return enemy2;

}
function enemy3(){
  var enemy3 = createSprite (600,Math.round(random(100, 250)), 20, 20);
  enemy3.addImage("plane3", enemyplane3);
  enemy3.scale=0.4;
  enemy3.velocityX =-3;
  enemy3.lifetime = 300;
  enemy3Group.add(enemy3);
  return enemy3;   

}
function enemy4(){
  var enemy4 = createSprite (600,Math.round(random(100, 250)), 20, 20);
  enemy4.addImage("plane4", enemyplane4);
  enemy4.scale=0.4;
  enemy4.velocityX =-3;
  enemy4.lifetime = 300;
  enemy4Group.add(enemy4); 
  return enemy4;  

}
function rocket(){
  var rocket = createSprite (World.mouseX, World.mouseY, 20, 20);
  rocket.addImage("fire", rocketImage);
  rocket.scale=0.2;
  rocket.velocityX =3;
  rocket.lifetime = -300;
  rocketGroup.add(rocket); 
  return rocket; 
}
function power1(){
  var diamond = createSprite (600,Math.round(random(100, 250)), 20, 20);
  diamond.addImage("power1", diamondImage);
  diamond.scale=0.2;
  diamond.velocityX =-3;
  diamond.lifetime = -300;
  power1Group.add(diamond); 
  return diamond; 
}
function power2(){
  var emerald = createSprite (600,Math.round(random(100, 250)), 20, 20);
  emerald.addImage("power2", emeraldImage);
  emerald.scale=0.2;
  emerald.velocityX =-3;
  emerald.lifetime = -300;
  power2Group.add(emerald); 
  return emerald; 
}
function power3(){
  var gold = createSprite (600,Math.round(random(100, 250)), 20, 20);
  gold.addImage("power3", goldImage);
  gold.scale=0.2;
  gold.velocityX =-3;
  gold.lifetime = -300;
  power3Group.add(gold); 
  return gold; 
}
function power4(){
  var ruby = createSprite (600,Math.round(random(100, 250)), 20, 20);
  ruby.addImage("power4", rubyImage);
  ruby.scale=0.2;
  ruby.velocityX =-3;
  ruby.lifetime = -300;
  power4Group.add(ruby); 
  return ruby; 
}
function power5(){
  var sliver = createSprite (600,Math.round(random(100, 250)), 20, 20);
  sliver.addImage("power5", sliverImage);
  sliver.scale=0.2;
  sliver.velocityX =-3;
  sliver.lifetime = -300;
  power5Group.add(sliver); 
  return sliver; 
}