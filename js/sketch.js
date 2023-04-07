let cnv;

let myFont;
let yMax=0;
let x=0,y=0;
let scrolling=false;
let deltaY=0;

let board = [];
let boardNext = [];
let xSize=0;
let ySize=0;
let moving=true;

let webState=-1;

//-1 landing page
//0 home
//1 tutorials
//2 showcase
//3 about me

function preload(){
  myFont = loadFont('assets/SpaceGrotesk-Regular.ttf');
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
  push();
  //translate(x,y);
  
  if(webState==0){
    sideBar();
    homeDisplay();
  }else if(webState==1){
    sideBar();
    tutorialsDisplay();
  }else if(webState==2){
    sideBar();
    showcaseDisplay();
  }else if(webState==3){
    sideBar();
    aboutMeDisplay(); 
  }else if(webState==-1){
    if(moving){
      landingUpdate();
    }
    landingDisplay();
    //filter(BLUR);
    console.log(get(width/2,400));
  }
  pop();
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
    if(mouseDetect(80,500,130,170)){
      webState=0;
    }
    if(mouseDetect(80,500,170,210)){
      webState=1;
    }
    if(mouseDetect(80,500,210,250)){
      webState=2;
    }
    if(mouseDetect(80,500,250,290)){
      webState=3;
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
  background(255);
  textAlign(LEFT,CENTER);
  textSize(30);
  textFont(myFont);
  fill(0);
  text("HENRY ZHANG",140,80);
  textSize(16);

  fill(100);
  if(mouseDetect(80,500,130,170)){
    fill('#75B8C8');
  }
  text("Home",80,150);

  fill(100);
  if(mouseDetect(80,500,170,210)){
    fill('#75B8C8');
  }
  text("Tutorials",80,190);

  fill(100);
  if(mouseDetect(80,500,210,250)){
    fill('#75B8C8');
  }
  text("Showcase",80,230);

  fill(100);
  if(mouseDetect(80,500,250,290)){
    fill('#75B8C8');
  }
  text("About Me",80,270);
}