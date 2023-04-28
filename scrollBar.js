function HScrollbar(xp, yp, sw, sh, l) {
    this.swidth = sw; // width and height of bar
    this.sheight = sh;
    var widthtoheight = sw - sh;
    this.ratio = sw / widthtoheight;
    this.xpos = xp; // x and y position of bar
    this.ypos = yp - this.sheight / 2;
    
    this.sposMin = this.xpos; // max and min values of slider
    this.spos = this.sposMin; // x position of slider
    this.newspos = this.spos;
    this.sposMax = this.xpos + this.swidth - this.sheight;
    this.loose = l; // how loose/heavy
    this.over = false; // is the mouse over the slider?
    this.locked = false;



  
    this.update = function() {
      if (this.overEvent()&&!vs1.locked) {
        this.over = true;
      } else {
        this.over = false;
      }
      if (mouseIsPressed && this.over) {
        this.locked = true;
      }
      if (!mouseIsPressed) {
        this.locked = false;
      }
      if (this.locked) {
        this.newspos = constrain(mouseX - this.sheight / 2, this.sposMin, this.sposMax);
      }
      if (abs(this.newspos - this.spos) > 1) {
        this.spos = this.spos + (this.newspos - this.spos) / this.loose;
      }
    }
  
    this.constrain = function(val, minv, maxv) {
      return min(max(val, minv), maxv);
    }
  
    this.overEvent = function() {
      if (mouseX > this.xpos && mouseX < this.xpos + this.swidth &&
        mouseY > this.ypos && mouseY < this.ypos + this.sheight) {
        return true;
      } else {
        return false;
      }
    }
  
    this.display = function() {
      rectMode(CORNER);
      noStroke();
      fill(204);
      rect(this.xpos, this.ypos, this.swidth, this.sheight);
      if (this.over || this.locked) {
        fill(0, 0, 0);
      } else {
        fill(102, 102, 102);
      }
      rect(this.spos, this.ypos, this.sheight, this.sheight);
    }
  
    this.getPos = function() {
      // Convert spos to be values between
      // 0 and the total width of the scrollbar
      return this.spos * this.ratio;
    }
  }
  
  
  function VScrollbar(xp, yp, sw, sh, l) {
    this.swidth = sw; // width and height of bar
    this.sheight = sh;
    var heighttowidth = sh - sw;
    this.ratio = sh / heighttowidth;
    this.xpos = xp - this.swidth / 2; // x and y position of bar
    this.ypos = yp;
    
    this.sposMin = this.ypos; // max and min values of slider
    this.spos = this.sposMin; // x position of slider
    this.newspos = this.spos;
    this.sposMax = this.ypos + this.sheight - this.swidth;
    this.loose = l; // how loose/heavy
    this.over = false; // is the mouse over the slider?
    this.locked = false;
  
  
    this.update = function() {
      if (this.overEvent()&&!hs1.locked) {
        this.over = true;
      } else {
        this.over = false;
      }
      if (mouseIsPressed && this.over) {
        this.locked = true;
      }
      if (!mouseIsPressed) {
        this.locked = false;
      }
      if (this.locked) {
        this.newspos = constrain(mouseY - this.swidth / 2, this.sposMin, this.sposMax);
      }
      if (abs(this.newspos - this.spos) > 1) {
        this.spos = this.spos + (this.newspos - this.spos) / this.loose;
      }
    }
  
    this.constrain = function(val, minv, maxv) {
      return min(max(val, minv), maxv);
    }
  
    this.overEvent = function() {
      if (mouseY > this.ypos && mouseY < this.ypos + this.sheight &&
        mouseX > this.xpos && mouseX < this.xpos + this.swidth) {
        return true;
      } else {
        return false;
      }
    }
  
    this.display = function() {
      rectMode(CORNER);
      noStroke();
      fill(204);
      rect(this.xpos, this.ypos, this.swidth, this.sheight);
      if (this.over || this.locked) {
        fill(0, 0, 0);
      } else {
        fill(102, 102, 102);
      }
      rect(this.xpos, this.spos, this.swidth, this.swidth);
    }
  
    this.getPos = function() {
      // Convert spos to be values between
      // 0 and the total width of the scrollbar
      return this.spos * this.ratio;
    }
  }

  function scrollbarInitialize(){
    hs1 = new HScrollbar(450, height-8, width-466 , 16, 16);
    vs1 = new VScrollbar(width-8,0,16,height-16,16);
  }