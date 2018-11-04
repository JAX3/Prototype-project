// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com


// Ball constuctor
function Ball(tempX, tempY, tempW, tempS) {
    this.x = tempX;  // x location of square 
    this.y = tempY;  // y location of square 
    this.width = tempW;
    this.speed = 1;
    //this.impact = this.speed / 2;

    this.display = function () {
        // Display the square 
        push();
        fill(175);
        stroke(0);
        rect(this.x, this.y, this.width, this.width);
        pop();
    };

    this.update = function () {

        this.y += this.speed / gravity;

        
      

        // Add gravity to speed
      this.y += gravity;

        // If square reaches the bottom 
        // Reverse speed 
        if (this.y + this.width > height) {
             //this.speed -= this.impact;
            //this.speed *= -1;

            //this.speed = this.speed * gravity * - 0;


            //if (this.speed.abs < this.height) {

        //}
            this.y = height - this.width ;

         this.y += gravity;

     


            //console.log("hit");
        }









    };
}
