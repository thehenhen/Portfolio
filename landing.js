function landingDisplay(){
    background(0);
    rectMode(CENTER);
    fill(255);
    stroke(100,10,50);
    for(let i=0;i<xSize;i++){
        for(let j=0;j<ySize;j++){
            if(board[i][j]<1){
                fill(0);
            }else{
                fill(100);
            }
            rect(i*20+10,j*20+10,20,20);
        }
    }
    fill(255);
    textSize(100);
    textFont(myFont);
    textAlign(CENTER,CENTER);
    text("Welcome",width/2,200);
    textSize(20);
    text("This is Henry Zhang's final portfolio project for ICS4U. ",width/2,300);
    textSize(15);
    text("SPACE to start/stop, click and drag to draw/erase.",width/2,height-105)
    textSize(20);
    fill(255);
    if(mouseDetect(width/2-100,width/2+100,400-40,400+40)){
        fill(200); 
    }
    rect(width/2,400,200,80);
    fill(0);
    text("Enter",width/2,395);
    noStroke();
}

function landingUpdate(){
    let count=0;
    
    //arrayCopy(board,boardNext,board.length);

    for(let i=0;i<xSize;i++){
        for(let j=0;j<ySize;j++){
            boardNext[i][j]=board[i][j];
        }
    }


    for(let i=1;i<xSize-1;i++){
        for(let j=1;j<ySize-1;j++){
            count=0;
            count+=int(board[i-1][j-1]);
            count+=int(board[i-1][j]);
            count+=int(board[i-1][j+1]);
            count+=int(board[i][j-1]);
            count+=int(board[i][j+1]);
            count+=int(board[i+1][j-1]);
            count+=int(board[i+1][j]);
            count+=int(board[i+1][j+1]);
            if(board[i][j]==1){
                if(count>=4 || count<=1){
                    boardNext[i][j]=0;
                }else{
                    boardNext[i][j]=1;
                }
            }else if(board[i][j]==0){
                if(count==3){
                    boardNext[i][j]=1;
                }else{
                    boardNext[i][j]=0;
                }
            }
        }
    }
    //arrayCopy(boardNext,board,board.length);
    for(let i=0;i<xSize;i++){
        for(let j=0;j<ySize;j++){
            board[i][j]=boardNext[i][j];
        }
    }
}

function landingIntialize(){
    xSize=(width-(width%20))/20;
    ySize=(height-(height%20))/20+1;
    for(let i=0;i<xSize;i++){
        boardNext[i]=[];
    }
    for(let i=0;i<xSize;i++){
        boardNext[i]=[];
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
            if(floor(random(0,15))>1){
                board[i][j]=0;
            }else{
                board[i][j]=1;
            }
        }
    }
    xSize=(width-(width%20))/20;
    ySize=(height-(height%20))/20+1;
}