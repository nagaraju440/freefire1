
var c = document.getElementById("myCanvas");

var ctx = c.getContext("2d");
var x=200,y=200,dx=5,dy=5;



function Circle(x,y,dx,dy) {
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
console.log(this.x);

  
    this.update=function(){
        if(this.x +130 >1350 || this.x-30 < 0){
            this.dx=-this.dx;
        }
        if(this.y+30 >600 || this.y-30 < 0){
            this.dy=-this.dy;
        }
        this.x=this.x+this.dx;
        this.y=this.y+this.dy;
        console.log(this.x);
        // raj.draw();

    }
    this.draw= function() {
        // ctx.beginPath();
        // ctx.arc(this.x,this.y,30,0,2*Math.PI,false);
        // ctx.stroke();
        // ctx.fill();
        ctx.font = "30px OSWALD";

        ctx.fillText("SUDHARSHAN SIR", this.x,this.y);

    }
}


var  array=[];
for(var i=0;i<10;i++){
    var x=Math.floor(Math.random()*window.innerWidth);
var y=Math.floor(Math.random()*window.innerHeight);
var dx=Math.random()-0.5;
var dy=Math.random()-0.5;
x=600,y=300;
    array[i]=(new Circle(x,y,dx,dy));
}


function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight);
for(var i=0;i<array.length;i++){
    array[i].update();
    array[i].draw();
}

    
}

     
    animate();







