// module aliases
var Engine = Matter.Engine,
   // Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

//global varibles
    var engine;
    var world;
    var boxes = [];

    function setup(){

        createCanvas(800,600);
         engine = Engine.create();
         world = engine.world;
         
         var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
         World.add(world, ground);

         Engine.run(engine);
   


    }


    function draw(){
        background(51);

        for(var i = 0; i < boxes.length; i++){

            boxes[i].show();
        }

 stroke(255);
 fill(170);
 rectMode(CENTER);
 rect(400,height,width,10);



    }

    
function mousePressed() {
    boxes.push(new Box(mouseX,mouseY,20,20));
    
  }
