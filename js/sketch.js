let cnv;

let myFont;
let yMax=0;
let yMin=0;
let x=0,y=0;
let scrolling=false;
let deltaY=0;

let board = [];
let boardNext = [];
let xSize=0;
let ySize=0;
let moving=true;

let pfp;

let webState=-1;

//-1 landing page
//0 home
//1 tutorials
//2 showcase

function preload(){
  myFont = loadFont('assets/SpaceGrotesk-Regular.ttf');
  pfp=loadImage('assets/profilePicture.jpg');
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  landingIntialize();
}

function draw() {
  if(scrolling){
    if(y%100!=0){
      if(deltaY>0){
        y-=10;
      }else{
        y+=10;
      }
    }else{
      scrolling=false;
    }
  }
  if(y>yMax){
    y=yMax;
    scrolling=false;
  }
  if(y<yMin){
    y=yMin;
    scrolling=false;
  }
  push();
  translate(x,y);
  
  if(webState==0){
    frameRate(60);
    
    homeDisplay();
    pop();
    sideBar();
  }else if(webState==1){
    frameRate(60);
    
    tutorialsDisplay();
    pop();
    sideBar();
  }else if(webState==2){
    frameRate(60);
    
    showcaseDisplay();
    pop();
    sideBar();
  }else if(webState==-1){
    frameRate(10);
    if(moving){
      landingUpdate();
    }
    landingDisplay();
  }
}

function mouseWheel(event){
  deltaY=event.deltaY;
  if(deltaY>0){
    y-=10;
    scrolling=true;
  }else{
    y+=10;
    scrolling=true;
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
  landingIntialize();
}

function mousePressed(){
  if(webState!=-1){
    if(mouseDetect(80,400,130-y,170-y)){
      webState=0;
      y=0;
    }
    if(mouseDetect(80,400,170-y,210-y)){
      webState=1;
      y=0;
    }
    if(mouseDetect(80,400,210-y,250-y)){
      webState=2;
      y=0;
    }
  }else{
    if(mouseDetect(width/2-100,width/2+100,400-40,400+40)){
      webState=0;
    }
    board[(mouseX-(mouseX%20))/20][(mouseY-(mouseY%20))/20]*=-1;
    board[(mouseX-(mouseX%20))/20][(mouseY-(mouseY%20))/20]+=1;
  }
}

function mouseDragged(){
  mousePressed();
}

function keyPressed(){
  if(keyCode==32){
    moving=!moving;
  }
}

function mouseDetect(x1,x2,y1,y2){
  return(mouseX>x1 && mouseX<x2 && mouseY>y1+y && mouseY<y2+y);
}

function sideBar(){
  noFill();
  imageMode(CENTER);
  image(pfp,100,85,50,50);
  //rect(135,65,210,35);


  textAlign(LEFT,CENTER);
  textSize(30);
  textFont(myFont);
  fill(0);
  text("HENRY ZHANG",140,80);

  //fill(200);
  //noStroke();
  noFill();
  rectMode(CORNERS);
  for(let i=0;i<3;i++){
    //rect(75,135+i*40,400,165+i*40);
  }

  textSize(16);

  fill(100);
  if(mouseDetect(80,400,130-y,170-y)){
    fill('#75B8C8');
  }
  text("Home",80,150);

  fill(100);
  if(mouseDetect(80,400,170-y,210-y)){
    fill('#75B8C8');
  }
  text("Tutorials",80,190);

  fill(100);
  if(mouseDetect(80,400,210-y,250-y)){
    fill('#75B8C8');
  }
  text("Showcase",80,230);
}