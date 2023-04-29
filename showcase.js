function showcaseDisplay(){
    imageMode(CORNER);
    background(255);
    fill(100);
    textSize(30);
    text("Showcase",500,100);
    textAlign(LEFT,TOP);
    rectMode(CORNER);

    fill(220);
    if(mouseDetect(500-(hs1.spos-hs1.sposMin),820-(hs1.spos-hs1.sposMin),200+(y-(vs1.spos-vs1.sposMin)*2.3),520+(y-(vs1.spos-vs1.sposMin)*2.3))){
        fill(230);
    }
    rect(500,200,320,320,20);
    fill(100);
    textSize(30);
    text("Minecraft in 2D",520,430);
    textSize(16);
    text("A 2-dimensional remake of\nthe classic game in Processing.",520,465);
    image(mc2d,520,220,280,200); 

    fill(220);
    if(mouseDetect(850-(hs1.spos-hs1.sposMin),1170-(hs1.spos-hs1.sposMin),200+(y-(vs1.spos-vs1.sposMin)*2.3),520+(y-(vs1.spos-vs1.sposMin)*2.3))){
        fill(230);
    }
    rect(850,200,320,320,20);
    fill(100);
    textSize(30);
    text("Santa's Terror",870,430);
    textSize(16);
    text("A mini-horror game made for a game\njam themed around Santa.",870,465);
    image(santa,870,220,280,200); 

    fill(220);
    if(mouseDetect(1200-(hs1.spos-hs1.sposMin),1520-(hs1.spos-hs1.sposMin),200+(y-(vs1.spos-vs1.sposMin)*2.3),520+(y-(vs1.spos-vs1.sposMin)*2.3))){
        fill(230);
    }
    rect(1200,200,320,320,20);
    fill(100);
    textSize(30);
    text("FlowTime",1220,430);
    textSize(16);
    text("A chrome extension to help improve\nproductivity, w/ minigames and more!",1220,465);
    image(flowtime,1220,220,280,200); 

    fill(220);
    if(mouseDetect(500-(hs1.spos-hs1.sposMin),820-(hs1.spos-hs1.sposMin),550+(y-(vs1.spos-vs1.sposMin)*2.3),870+(y-(vs1.spos-vs1.sposMin)*2.3))){
        fill(230);
    }
    rect(500,550,320,320,20);
    fill(100);
    textSize(30);
    text("diep.io",520,780);
    textSize(16);
    text("A remake of the basic tank\nmechanics of diep.io.",520,815);
    image(diep,520,570,280,200); 

    fill(220);
    if(mouseDetect(850-(hs1.spos-hs1.sposMin),1170-(hs1.spos-hs1.sposMin),550+(y-(vs1.spos-vs1.sposMin)*2.3),870+(y-(vs1.spos-vs1.sposMin)*2.3))){
        fill(230);
    }
    rect(850,550,320,320,20);
    fill(100);
    textSize(30);
    text("Pong",870,780);
    textSize(16);
    text("A remake of Pong, in Processing.",870,815);
    image(pong,870,570,280,200); 

    fill(220);
    if(mouseDetect(1200-(hs1.spos-hs1.sposMin),1520-(hs1.spos-hs1.sposMin),550+(y-(vs1.spos-vs1.sposMin)*2.3),870+(y-(vs1.spos-vs1.sposMin)*2.3))){
        fill(230);
    }
    rect(1200,550,320,320,20);
    fill(100);
    textSize(30);
    text("The Game of Life",1220,780);
    textSize(16);
    text("The cellular automata simulation\non the landing page.",1220,815);
    image(conway,1220,570,280,200); 





    textAlign(LEFT,CENTER);
    //Santa's Terror
    //MC2D
    //FlowTime
    //ISP for ICS3U
    //diep
    //Pong
}