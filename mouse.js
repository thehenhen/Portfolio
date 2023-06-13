function mouseClicked(){
    if(webState!=-1){
      if(mouseDetect(80,400,130-y,170-y)){
        webState=0;
        scrollbarInitialize();
      }
      if(mouseDetect(80,400,170-y,210-y)){
        //webState=1;
        y=0;
        tutorialsMenu=!tutorialsMenu;
      }
      if((mouseDetect(80,400,210-y,250-y)&&!tutorialsMenu)||(mouseDetect(80,400,420-y,460-y)&&tutorialsMenu)){
        webState=2;
        scrollbarInitialize();
        y=0;
      }

      if((mouseDetect(80,400,250-y,290-y)&&!tutorialsMenu)||(mouseDetect(80,400,460-y,500-y)&&tutorialsMenu)){
        webState=3;
        scrollbarInitialize();
        y=0;
      }

      if((mouseDetect(80,400,210-y,250-y)&&tutorialsMenu)){
        webState=1;
        tutorialState=1;
        scrollbarInitialize();
      }

      if((mouseDetect(80,400,250-y,290-y)&&tutorialsMenu)){
        webState=1;
        tutorialState=2;
        scrollbarInitialize();
      }

      if((mouseDetect(80,400,290-y,330-y)&&tutorialsMenu)){
        webState=1;
        tutorialState=3;
        scrollbarInitialize();
      }

      if((mouseDetect(80,400,330-y,370-y)&&tutorialsMenu)){
        webState=1;
        tutorialState=4;
        scrollbarInitialize();
      }

      if((mouseDetect(80,400,370-y,410-y)&&tutorialsMenu)){
        webState=1;
        tutorialState=5;
        scrollbarInitialize();
      }

      if(webState==2){
        if(mouseDetect(500-(hs1.spos-hs1.sposMin),820-(hs1.spos-hs1.sposMin),200+(y-(vs1.spos-vs1.sposMin)*2.3),520+(y-(vs1.spos-vs1.sposMin)*2.3))){
          window.open("https://github.com/thehenhen/MC2D");
        }
        if(mouseDetect(850-(hs1.spos-hs1.sposMin),1170-(hs1.spos-hs1.sposMin),200+(y-(vs1.spos-vs1.sposMin)*2.3),520+(y-(vs1.spos-vs1.sposMin)*2.3))){
          window.open("https://thehenhen.github.io/Santa-s-Terror/");
        }
        if(mouseDetect(1200-(hs1.spos-hs1.sposMin),1520-(hs1.spos-hs1.sposMin),200+(y-(vs1.spos-vs1.sposMin)*2.3),520+(y-(vs1.spos-vs1.sposMin)*2.3))){
          window.open("https://github.com/thehenhen/FlowTime");
        }
        if(mouseDetect(500-(hs1.spos-hs1.sposMin),820-(hs1.spos-hs1.sposMin),550+(y-(vs1.spos-vs1.sposMin)*2.3),870+(y-(vs1.spos-vs1.sposMin)*2.3))){
          window.open("https://github.com/thehenhen/diep");
        }
        if(mouseDetect(850-(hs1.spos-hs1.sposMin),1170-(hs1.spos-hs1.sposMin),550+(y-(vs1.spos-vs1.sposMin)*2.3),870+(y-(vs1.spos-vs1.sposMin)*2.3))){
          window.open("https://github.com/thehenhen/PongInFourHours");
        }
        if(mouseDetect(1200-(hs1.spos-hs1.sposMin),1520-(hs1.spos-hs1.sposMin),550+(y-(vs1.spos-vs1.sposMin)*2.3),870+(y-(vs1.spos-vs1.sposMin)*2.3))){
          window.open("https://thehenhen.github.io/GameOfLife/");
        }
      }

      if(webState==3){
        if(mouseDetect(500-(hs1.spos-hs1.sposMin),815-(hs1.spos-hs1.sposMin),860+(y-(vs1.spos-vs1.sposMin)*2.3),880+(y-(vs1.spos-vs1.sposMin)*2.3))){
          window.open("https://github.com/thehenhen/PathfinderAdventure");
        }
      }


    }else{
      if(mouseDetect(width/2-100,width/2+100,400-40,400+40)){
        webState=0;
        scrollbarInitialize();
      }
      board[(mouseX-(mouseX%20))/20][(mouseY-(mouseY%20))/20]*=-1;
      board[(mouseX-(mouseX%20))/20][(mouseY-(mouseY%20))/20]+=1;
    }
  }
  

  function mouseDragged(){
    mouseClicked();
  }
  
  function keyPressed(){
    if(keyCode==32){
      moving=!moving;
    }
  }
  
  function mouseDetect(x1,x2,y1,y2){
    return(mouseX>x1 && mouseX<x2 && mouseY>y1+y && mouseY<y2+y);
  }

  
function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
    landingIntialize();
    hs1 = new HScrollbar(450, height-8, width-466 , 16, 16);
    vs1 = new VScrollbar(width-8,0,16,height-16,16);
  }


function mouseWheel(event){
  //y-=event.delta*2.3;
  vs1.newspos+=event.delta;
  vs1.newspos=max(vs1.sposMin,vs1.newspos);
  vs1.newspos=min(vs1.sposMax,vs1.newspos);
}
  
  