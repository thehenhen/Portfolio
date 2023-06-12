let cnv;

let myFont;
let monoFont;
let yMax=0;
let yMin=0;
let x=0,y=0;
let deltaY=0;

let board = [];
let boardNext = [];
let xSize=0;
let ySize=0;
let moving=true;

let pfp;
let person;
let teacher;
let mainOOP;
let minimum;
let reverse;
let arrL1;
let arrL2;
let linearSearch;
let binarySearch;
let bSort;
let iSort;
let mSort;
let mc2d;
let santa;
let flowtime;
let diep;
let pong;
let conway;
let isp;

let hs1;
let vs1;

let tutorialsMenu=false;
let tutorialState=1;

//1 OOP
//2 Arrays
//3 ArrayLists
//4 Searching and Sorting
//5 Recursion

let webState=-1;

//-1 landing page
//0 home
//1 tutorials
//2 showcase

function preload(){
  myFont = loadFont("assets/SpaceGrotesk-Regular.ttf");
  monoFont = loadFont("assets/SpaceMono-Regular.ttf");
  pfp=loadImage("assets/profilePicture.jpg");
  person=loadImage("assets/person.png");
  teacher=loadImage("assets/teacher.png");
  mainOOP=loadImage("assets/mainOOP.png");
  minimum=loadImage("assets/minimum.png");
  reverse=loadImage("assets/reverse.png");
  arrL1=loadImage("assets/arrayList1.jpg");
  arrL2=loadImage("assets/arrayList2.jpg");
  linearSearch=loadImage("assets/linearSearch.jpg");
  binarySearch=loadImage("assets/binarySearch.jpg");
  bSort=loadImage("assets/bubbleSort.jpg");
  iSort=loadImage("assets/insertionSort.jpg");
  mSort=loadImage("assets/mergeSort.jpg");
  mc2d=loadImage("assets/mc2d.png");
  santa=loadImage("assets/santa.png");
  flowtime=loadImage("assets/flowtime.png");
  diep=loadImage("assets/diep.png");
  pong=loadImage("assets/pong.png");
  conway=loadImage("assets/conway.png");
  isp=loadImage("assets/isp.png");
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight); 
  landingIntialize();
  scrollbarInitialize();
}

function draw() {
  push();
  translate(-(hs1.spos-hs1.sposMin),y-(vs1.spos-vs1.sposMin)*2.3);
  
  if(webState==0){
    frameRate(60);
    yMin=0;
    homeDisplay();
    pop();
    sideBar();
  }else if(webState==1){
    frameRate(60);
    yMin=-1700;
    tutorialsDisplay();
    pop();
    sideBar();
  }else if(webState==2){
    frameRate(60);
    yMin=0;
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


function sideBar(){
  fill(200);
  rectMode(CORNER);
  rect(0,0,450,height);
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

  if(!tutorialsMenu){
    fill(100);
    if(mouseDetect(80,400,210-y,250-y)){
      fill('#75B8C8');
    }
    text("Showcase",80,230);
  }else{
    fill(100);
    if(mouseDetect(80,400,210-y,250-y)){
      fill('#75B8C8');
    }
    text("\tOOP",80,230);

    fill(100);
    if(mouseDetect(80,400,250-y,290-y)){
      fill('#75B8C8');
    }
    text("\tArrays",80,270);

    fill(100);
    if(mouseDetect(80,400,290-y,330-y)){
      fill('#75B8C8');
    }
    text("\tArrayLists",80,310);

    fill(100);
    if(mouseDetect(80,400,330-y,370-y)){
      fill('#75B8C8');
    }
    text("\tSearching and Sorting",80,350);

    fill(100);
    if(mouseDetect(80,400,370-y,410-y)){
      fill('#75B8C8');
    }
    text("\tRecursion",80,390);

    fill(100);
    if(mouseDetect(80,400,410-y,450-y)){
      fill('#75B8C8');
    }
    text("Showcase",80,430);
  }
  
  hs1.update();
  hs1.display();
  vs1.update();
  vs1.display();
}

