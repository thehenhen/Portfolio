function tutorialsDisplay(){
    background(255);
    fill(100);
    textSize(30);
    
    text("Tutorials",500,100);
    if(tutorialState==1){
        textAlign(LEFT,CENTER);
        textSize(25);
        text("Object-Oriented Programming",500,200);
        textSize(20);
        text("Basics: ",500,280);
        textSize(18);
        text("  -  Object-oriented programming, or OOP, is a style of programming in which the program is\n      based instantiating classes. ",500,320);
        text("  -  An object is a value with attributes and methods that can access and modify the attributes.",500,360);
        text("  -  A class is a blueprint to create an object of a certain type. ",500,390);
        text("  -  A constructor is used to create an object from the class. It has the same name as\n      the class, and it can have parameters that determine the attributes of the new object. ",500,430);
        
        textSize(20);
        text("Writing Classes: ",500,480);
        textSize(18);
        text("  -  Basic Structure of a class: ",500,510);
        rectMode(CORNER);
        noStroke();
        fill('#D3EDF3');
        rect(550,530,300,120);
        fill(100);
        textFont(monoFont); 
        text("     public class MyClass {\n        \\\\instance variables\n        \\\\constructor(s)\n        \\\\methods\n     }",500,585);
        textFont(myFont);
        text("  -  Instance variables are always private. ",500,665);
        text("  -  Constructors are always public. ",500,695);
        text("  -  Methods can be either public or private. ",500,725);
        text("  -  Encapsulation is the idea that an object should keep its data hidden.",500,755);
        text("       -  So, its attributes are private, only accessible through the methods. ",500,785);
        
        textSize(20);
        text("Inheritance: ",500,830);
        textSize(18);
        text("  -  When a class is declared, it can extend another class: ",500,860);
        noStroke();
        fill('#D3EDF3');
        rect(550,885,400,30);
        fill(100);
        textFont(monoFont); 
        text("     public class B extends A { ... }",500,895);
        textFont(myFont);
        text("  -  In the above example, B is a subclass of A, and A is the super class of B.",500,930);
        text("  -  Superclasses share all their attributes and behaviours with the subclass.",500,960);
        textSize(20);
        text("Polymorphism: ",500,1000);
        textSize(18);
        text("  -  When an inheritance relationship is created between 2 classes an is-a relationship is created.",500,1030);
        text("       -  For example, if a Teacher class is a subclass of a Person class, then a Teacher is-a Person.",500,1060)
        text("  -  Because of this, we can create objects as such: ",500,1090);
        noStroke();
        fill('#D3EDF3');
        rect(550,1115,280,30);
        fill(100);
        textFont(monoFont);
        text("     ArrayList<Person> people;",500,1125);
        textFont(myFont);
        text("       -  In this ArrayList, we can add both Person and Teacher objects, as\n\t\t   any Teacher object is-a Person object.",500,1170);

        textSize(20);
        text("Example of Usage: ",500,1230);
        textSize(18);
        /*
        textFont(monoFont);
        text("public class Person{",500,1260);
        text("\tprivate String name;",500,1290);
        text("\tprivate boolean employed;",500,1320);
        text("\tprivate String job;",500,1350);
        text("\tpublic Person(){",500,1380);
        text("\t\tname=\"John Doe\";",500,1410);
        text("\t\temployed=false;",500,1440);
        text("\t\tjob=\"none\";",500,1470);
        text("\t}",500,1500);
        

        text("\tpublic Person(String n,boolean e,String j){",500,1530);
        text("\t\tname=n;",500,1560);
        text("\t\temployed=e;",500,1590);
        text("\t\tjob=j;",500,1620);
        text("\t}",500,1650);
        text("\tpublic void introduceSelf(){",500,1710);
        text("\t\tif(employed){",500,1740);
        text("\t\t\tSystem.out.println(\"Hello, my name is \"+name+\" and I am a \"+job+\".\");",500,1770);
        text("\t\t} else {",500,1800)
        text("\t\t\tSystem.out.println(\"Hello, my name is \"+name+\" and I am unemployed.\");",500,1830);
        text("\t}",500,1860);
        text("\tpublic String getName(){\n\t\treturn name;\n\t}\n}",500,1920);
        textFont(myFont);*/
        imageMode(CORNER);
        image(person,500,1260);
        image(teacher,500,1790);
        image(mainOOP,500,2090);
    }else if(tutorialState==2){
        textAlign(LEFT,CENTER);
        textSize(25);
        text("Arrays",500,200);
        textSize(20);
        text("Basics",500,280);
        textSize(18);

        text("  -  The Array class is a class that stores primitive data types.",500,320);
        text("       -  Once they are created, they have a set size that cannnot be modified.", 500,350);
        text("  -  Arrays are useful to store multiple variables of the same type rather\n\t\t\tthan several individual variables.",500,390);
        text("  -  There are 2 main ways to declare and initialize an array: ",500,430);
        noStroke();
        rectMode(CORNER);
        fill('#D3EDF3');
        rect(560,450,260,30);
        rect(560,530,270,30);
        rect(560,660,130,30);
        rect(560,870,450,30);
        rect(560,990,340,30)
        textFont(monoFont);
        fill(100);
        text("      int[] arr = new int[5];",500,460);
        text("      int[] arr = {1,2,3,4,5};",500,540);
        textFont(myFont);
        text("                    -  This creates an array called \"arr\" of size 5, storing type int,\n                       and all elements assigned the default value of 0.",500,500);
        text("                    -  This creates an array called \"arr\" of size 5, storing type int,\n                       with values {1,2,3,4,5} assigned to it.",500,590);
        text("  -  To access or modify elements with an array, use this syntax:",500,630);
        textFont(monoFont);
        text("      arr[1] = 3;",500,670);
        textFont(myFont);
        text("                    -  This sets the element at index 1 as 3.",500,710);
        text("                    -  Arrays are zero-indexed, meaning that the first element has\n                       index 0, second element has index 1, etc.",500,750);

        textSize(20);
        text("Trasversing Arrays: ",500,800);
        textSize(18);
        text("  -  If you need to modify an entire array, for loops can be used to\n     iterate through the array:",500,840);
        textFont(monoFont);
        text("      for(int i=0;i<arr.length;i++) arr[i]*=2;",500,880);
        textFont(myFont);
        text("                    -  In each iteration, the index increases, looping through each\n                       element of the array.",500,920);
        text(" - Alternatively, for-each loops can be used:",500,960);
        textFont(monoFont);
        text("      for(int value : arr) value*=2;",500,1000);
        textFont(myFont);
        text("                    -  In each iteration, value is assigned the value of each element in the array",500,1030);
        

    }else if(tutorialState==3){
        textAlign(LEFT,CENTER);
        textSize(25);
        text("ArrayLists",500,200);
    }else if(tutorialState==4){
        textAlign(LEFT,CENTER);
        textSize(25);
        text("Searching and Sorting",500,200);
    }else if(tutorialState==5){
        textAlign(LEFT,CENTER);
        textSize(25);
        text("Recursion",500,200);
    }
} 