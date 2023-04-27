function tutorialsDisplay(){
    background(255);
    fill(100);
    textSize(30);
    
    text("Tutorials",500,100);
    textAlign(LEFT,CENTER);
    textSize(25);
    text("Object-Oriented Programming",500,200);
    textSize(20);
    text("Basics: ",500,280);
    textSize(18);
    text("  -  Object-oriented programming, or OOP, is a style of programming in which the program is based\n      around using classes and creating objects. ",500,320);
    text("  -  An object is a value with attributes (variables) and methods that can access and modify the attributes.",500,360);
    text("  -  A class is a blueprint to create an object of a certain type. ",500,390);
    text("  -  A constructor is used to create an object from the class. It has the same name as the class, and it\n      can have parameters that determine the attributes of the new object. ",500,430);
    
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
    text("  -  When an inheritance relationship is created between two classes, an is-a relationship is created.",500,1030);
    text("       -  For example, if a Teacher class is a subclass of a Person class, then a Teacher is-a Person.",500,1060)
    text("  -  Because of this, we can create objects as such: ",500,1090);
    noStroke();
    fill('#D3EDF3');
    rect(550,1115,280,30);
    fill(100);
    textFont(monoFont);
    text("     ArrayList<Person> people;",500,1125);
    textFont(myFont);
    text("       -  In this ArrayList, we can add both Person and Teacher objects, because any Teacher object is-a Person object.",500,1160);

    textSize(20);
    text("Example of Usage: ",500,1200);
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
} 