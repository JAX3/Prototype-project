function Box(x,y,w,h){
    var options ={
        friction : 0.6,
        restitution:0.3


    }
this.body =  Bodies.rectangle(x, y, w, h,options);
this.w= w;


this.h = h;
World.add(world, this.body);

this.show = function(){
var pos = this.body.position;
var ang = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(ang);
rectMode(CENTER);
strokeWeight(1);
stroke(255);
fill(127);
rect(0,0,this.w,this.h);
pop();





}



};
