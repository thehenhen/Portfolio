let myFont;
let yMax=0;
let x=0,y=0;
let scrolling=false;
let deltaY=0;

function preload(){
  myFont = loadFont('assets/SpaceGrotesk-Regular.ttf');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(width+" "+height);
}


function draw() {
  console.log("PUSHED");
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
  translate(x,y);
  
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
  }
}

function mouseDetect(x1,x2,y1,y2){
  return(mouseX>x1 && mouseX<x2 && mouseY>y1+y && mouseY<y2+y);
}