

var mouseX, mouseY;
document.addEventListener('mousemove', getMouseXY);
document.addEventListener('mousedown', onMouseDown);


function onMouseDown() {
    balls.push(new Ball(mouseX, mouseY, 16, 0.1));
    console.log("click");

}

function getMouseXY(event) {
    mouseX = event.pageX;
    mouseY = event.pageY;
    if (mouseX < 0) {
        mouseX = 0;
    }
    if (mouseY < 0) {
        mouseY = 0;
    }
    //console.log('mouse X = ' + mouseX + ' mouse Y = ' + mouseY)
}

var balls = [];
// Global gravity variable
var gravity = 1;

function create_balls(num) {
    for (i = 0; i < num; i++) {
        balls.push(new Ball(mouseX + 20 * i, mouseY, 16, 0.1));
    }
}



function setup() {
    createCanvas(480, 275);
   
   
   
    //create_balls(100000);
    frameRate(60);
}


function draw() {
    background(204);
    bounding_Box();
    
    push();
    for (var i = 0; i < balls.length; i++) {
        // Display ball objects
        balls[i].display();
        
        // Move ball objects
        balls[i].update();

        
    }
    pop();
}


function bounding_Box() {

    //bot
    push();

    let bot = rect(5, 265, 470, 9);
    
    pop();

    //top
    push();
    let top = rect(5, 0, 470, 9);
    pop();
    //left
    push();
    let left = rect(0, 0, 9, 470);
    pop();

    //right
    push();
    let right = rect(470, 0, 9, 470);
    pop();


}