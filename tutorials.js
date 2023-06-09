function tutorialsDisplay(){
    background(255);
    fill(100);
    textSize(30);
    
    text("Tutorials",500,100);
    if(tutorialState==0){
        textAlign(LEFT,CENTER);
        textSize(25);
        text("Bibliography",500,200);
        textSize(20);
        text("http://support.ebsco.com/LEX/AP-Computer-Science-A_Study-Guide.pdf",500,280);
        text("https://library.fiveable.me/ap-comp-sci-a",500,320);
        text("https://www.geeksforgeeks.org/sorting-algorithms/",500,360);
    }
    else if(tutorialState==1){
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
        text("Basics:",500,280);
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
        text("Traversing Arrays: ",500,800);
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
        textSize(20);
        text("Example of Usage: ",500,1070);
        imageMode(CORNER);
        image(minimum,500,1100);
        image(reverse,500,1450);

    }else if(tutorialState==3){
        textAlign(LEFT,CENTER);
        textSize(25);
        text("ArrayLists",500,200);
        textSize(20);
        text("Basics:",500,280);
        textSize(18);

        text("  -  ArrayList: a data structure that stores a list of objects.",500,320);
        text("       -  Its size is dynamic - it can be changed.",500,350)
        text("  -  ArrayLists can only store objects, not primitive data types.",500,380);
        text("       -  No ints, chars, doubles, etc.",500,410);
        text("       -  However, wrapper classes such as Integer, etc. that store their respective\n\t\t\tdata types, can be stored in ArrayList.",500,450);
        text("  -  To declare and initialize an ArrayList:",500,490);
        
        noStroke();
        rectMode(CORNER);
        fill('#D3EDF3');
        rect(560,505,430,30);
        rect(735,570,490,30);
        rect(560,910,700,30);
        rect(560,950,450,30);
        fill(100);
        textFont(monoFont);
        text("\t\t\tArrayList<E> list = new ArrayList<>();",500,515);
        text("ArrayList<Integer> list = new ArrayList<>();",740,580);
        textFont(myFont);
        text("                    -  E is the element type",500,550);
        text("                    -  For example: ",500,580);
        textSize(20);
        text("ArrayList Methods:",500,620);
        textSize(18);
        text("  -  int size(): returns an integer with the number of elements in the list.",500,660);
        text("  -  boolean add(E obj): adds obj to the end of the list, returns true if sucessful, otherwise false.",500,690);
        text("  -  void add(int index, E obj): adds obj at the specified position.",500,720);
        text("  -  E get(int index): returns objects at specified index.",500,750);
        text("  -  E set(int index, E obj): sets the element at index as obj, returns the previous value at index.",500,780);
        text("  -  E remove(int index): removes the element at the specified index, returns removed element.",500,810);
        textSize(20);
        text("Traversing ArrayLists: ",500,850);
        textSize(18);
        text(" -  To iterate through an ArrayList, for loops or for-each loops can be used:",500,890);
        textFont(monoFont);
        text("      for(int i=0;i<list.size();i++) System.out.println(list.get(i));",500,920);
        text("      for(int i : list) System.out.println(i);",500,960);
        textFont(myFont);
        textSize(20);
        text("Example of Usage:",500,1000);
        imageMode(CORNER);
        image(arrL1,500,1040);
        image(arrL2,500,1250);
    }else if(tutorialState==4){
        textAlign(LEFT,CENTER);
        textSize(25);
        text("Searching and Sorting",500,200);
        textSize(20);
        text("Searching Algorithms: algorithms to find an element in a sorted list of items",500,280);
        textSize(18);
        text("  -  Linear/Sequential Search: ",500,310);
        text("       -  In linear/sequential search, the algorithm iterates through the list item-by-item until the element is found.",500,340);
        imageMode(CORNER);
        image(linearSearch,540,370);
        text("  - Binary Search:",500,550);
        text('       -  In binary search, the algorithm checks if the middle element is larger or smaller than the element,\n\t\t\t\thalves the array, and repeats with the appropriate subarray until found.',500,590);
        image(binarySearch,540,640);
        textSize(20);
        text("Sorting Algorithms:",500,880);
        textSize(18);
        text("  -  Bubble Sort: ",500,910);
        text("       -  In bubble sort, the algorithm repeatedly iterates through the array, and swaps any 2 neighbouring\n            elements if they are in the wrong order.",500,950);
        image(bSort,540,990);
        text("  -  Insertion Sort: ",500,1300);
        text("       -  In insertion sort, the algorithm splits the list into a sorted and an unsorted part, and slowly\n            moves elements from the unsorted part to the sorted part.",500,1340);
        image(iSort,540,1380);
        text("  -  Merge Sort: ",500,1640);
        text("       -  In merge sort, the array is recursively split into subarrays, then the subarrays are\n            recursively merged, in order, to form a sorted array.",500,1680);
        image(mSort,540,1720,357,459);
    }else if(tutorialState==5){
        textAlign(LEFT,CENTER); 
        textSize(25);
        text("Recursion",500,200);
        textSize(20);
        text("Basics:",500,280);
        textSize(18);
        rectMode(CORNER);
        fill('#D3EDF3');
        rect(560,450,500,90);
        rect(560,690,550,110);
        rect(560,985,590,140);
        fill(100);
        text("  -  Recursion is a method of solving a problem by dividing it into smaller and\n     smaller versions of itself.",500,320);
        text("  -  Every recursive method has a base case and a recursive call:",500,360);
        text("       -  The base case terminates the method once it reaches a certain point.",500,390);
        text("       -  The recursive call calls the method, with slightly different parameters:",500,420);
        textFont(monoFont);
        text("public int factorial (int n) {\n\tif(n==1) return 1;//base case\n\treturn n*factorial(n-1);//recursive recall\n}",560,490);
        textFont(myFont);
        text("                    -  In this function, the function calls itself with the parameter\n                      decreased by 1, multiplies the return by the parameter, and returns it.",500,560);
        text("                    -  Once the parameter reaches 1, the function will return 1.",500,600);
        textSize(20);
        text("Recursive Traversal: ",500,640);
        textSize(18);
        text("  -  Recursion can be used to traverse arrays: ",500,670);
        textFont(monoFont);
        text("public void traverseArray(int[] array, int index){\n\tif (index==array.length) return;//base case\n\tSystem.out.println(array[index]);\n\ttraverseArray(array,index+1);//recursive recall\n}",560,740);
        textFont(myFont);
        text("  -  In this function, the base case is when the index reaches the end of the array,\n      and it recursively calls itself with the index increased by 1.",500,830);
        textSize(20);
        text("Recursive Searching and Sorting: ",500,880);
        textSize(18);
        text("  -  Recursion can be used as a substitute to iterations in many situations,\n       including searching and sorting.",500,920);
        text("  - Recursive Binary Search: ",500,960);
        textFont(monoFont);
        textSize(14);
        text("public int binarySearch(int[] array, int target, int low, int high) {\n\tif(low>high) return -1;//base case\n\tint mid = (low + high)/2;\n\tif(array[mid]==target) return mid;//base case\n\telse if(target < array[mid])\n\t\treturn binarySearch(array, target, low, mid-1);//recursive call\n\telse return binarySearch(array,target,mid+1,high);//recursive call\n}",560,1050);
        textSize(18);
        textFont(myFont);
        text("  -  Recursive Merge Sort: ",500,1150);
        imageMode(CORNER);
        image(mSort,560,1200);
    }   
} 