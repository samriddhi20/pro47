const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var sb,playbimg;

function preload(){
  sb=loadImage("sb.jpg")
  playbimg=loadImage("playb.png")
  boyimg=createImage("roll-unscreen.gif")
}

function setup() {
  createCanvas(1250,570);
  playb=createSprite(300,500,50,50)
  playb.addImage(playbimg)
  playb.scale=0.4

  boy=createSprite(500,500,0,0)
  boy.addImage(gif_boyimg)
  //playb.scale=0.4
 
}

function draw() {
  background(sb); 
  
  
drawSprites();
}
