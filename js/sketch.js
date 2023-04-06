let myFont;
let yMax=0;
let x=0,y=0;
let scrolling=false;
let deltaY=0;

let board = [];
let boardNext = [];
let xSize=0;
let ySize=0;

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
  createCanvas(windowWidth, windowHeight);
  console.log(width,height);
  xSize=(width-(width%20))/20-5;
  ySize=(height-(height%20))/20-5;
  console.log(xSize,ySize);

  for(let i=0;i<xSize;i++){
    boardNext[i]=[];
  }
  for(let i=0;i<xSize;i++){
    for(let j=0;j<ySize;j++){
      boardNext[i][j]=0;
    }
  }



  for(let i=0;i<xSize;i++){
    board[i]=[];
  }
  for(let i=0;i<xSize;i++){
    for(let j=0;j<ySize;j++){
      board[i][j]=0;
    }
  }

  
  
  for(let i=1;i<xSize-1;i++){
    for(let j=1;j<ySize-1;j++){
      
      if(floor(random(0,10))>1){
        board[i][j]=0;
      }else{
        board[i][j]=1;
      }
    }
  }
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
    landingUpdate();
    landingDisplay();
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
}

function mousePressed(){
  if(mouseDetect(80,500,130,170)){
    console.log("detect");
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
  
  board[(mouseX-(mouseX%20))/20][(mouseY-(mouseY%20))/20]=1;
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