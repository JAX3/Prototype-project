// JavaScript source code
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d');

var mouseX, mouseY;
document.addEventListener('mousemove', getMouseXY);
document.addEventListener('mousedown', onMouseDown);



var scene = {
    width: canvas.width,
    height: canvas.height,
}

var square = [
    {
        x: mouseX,
        y: mouseY,
        colour: 'black',
        height: 100 / 2,
        width: 100/2
    }



];


//draw 
function draw() {



   

    ctx.fillStyle = square.colour;
    ctx.beginPath();
    ctx.rect(mouseX, mouseY, 100/2, 100/2);
    
    ctx.closePath();
    ctx.fill();




   


    
   
}



//trakcing mouse

    function getMouseXY(event) {
        mouseX = event.pageX ;
        mouseY = event.pageY ;
        if (mouseX < 0) {
            mouseX = 0;
        }
        if (mouseY < 0) {
            mouseY = 0;
        }
        console.log('mouse X = ' + mouseX + ' mouse Y = ' + mouseY)





}

function onMouseDown() {

 
    console.log("test");
    draw();
}



