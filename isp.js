function ispDisplay(){
    imageMode(CORNER);
    background(255);
    fill(100);
    textSize(30);
    text("ISP - Pathfinder Adventure",500,100);
    textAlign(LEFT,TOP);
    rectMode(CORNER);

    textSize(20);
    text("For this course's final project, I made a game call \"Pathfiner Adventure\".",500,200);
    text("\"Pathfinder Adventure\" is a game about learning to use a map to navigate unfamiliar buildings.",500,240);
    image(isp1,500,280); 
    text("In this game, the player doesn't know where they are on the map, and must accomplish tasks within a time limit.",500,760);
    text("My individual contribution was the base framework, the collision, and a portion of the second and third levels.",500,800);
    if(mouseDetect(500-(hs1.spos-hs1.sposMin),815-(hs1.spos-hs1.sposMin),860+(y-(vs1.spos-vs1.sposMin)*2.3),880+(y-(vs1.spos-vs1.sposMin)*2.3))){
        fill(10);
    }
    text("Check out the Github repository",500,860);
    image(isp2,500,900);
    //text(mouseX+","+mouseY,mouseX,mouseY);
    textAlign(LEFT,CENTER);
    //Santa's Terror
    //MC2D
    //FlowTime
    //diep
    //Pong
    //Conway
}