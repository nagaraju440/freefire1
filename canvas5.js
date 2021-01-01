
var c = document.getElementById("myCanvas");

var ctx = c.getContext("2d");
var x=100,y=300,dx=0,dy=0,radius=30;



function Circle(x,y,dx,dy) {
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.p=0;
// console.log(this.x);

  
    this.update=function(){

        if(this.x +30 >1350 || this.x-30 < 0){
            this.dx=-this.dx;
        }
        if(this.y+30 >600 || this.y-30 < 0){
            this.dy=-this.dy;
        }
        this.x=this.x+this.dx;
        this.y=this.y+this.dy;
        // console.log(this.x);
        // raj.draw();

    }
    this.draw= function() {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,false);
        ctx.stroke();
        ctx.fill();
        // ctx.font = "30px OSWALD";

        // ctx.fillText("TEJU", this.x,this.y);

    }
}

    var  array=[];




function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight);
for(var i=0;i<array.length;i++){
    array[i].update();
    array[i].draw();
}

    
}
animate();
   
window.addEventListener("mousemove",function(){
    var x=event.clientX;
var y=event.clientY;
if(x>100 && y>300){
 
for(var i=0;i<20;i++){
    var x=Math.floor(Math.random()*window.innerWidth)+130;
var y=Math.floor(Math.random()*window.innerHeight)+130;
var dx=Math.random()-0.5;
var dy=Math.random()-0.5;
var radius=Math.floor(Math.random()*40);
// x=600,y=300;
x=x+50;
    array[i]=(new Circle(x,y,dx,dy,radius));
}
    
}
console.log(x,y);
})






