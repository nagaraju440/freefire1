var canvas=document.getElementById('canvas');
var c=canvas.getContext('2d');

var x=600,y=200,dx,dy;
var a,b;
var dx=Math.floor(Math.random()*5);
    // dx=a,dy=b;
    var dx=Math.floor(Math.random()*5);
function Circle(){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;

    this.update=function(){
        // this.dx=a,this.dy=b;
        if(this.x+100 > 1200|| this.x-100 < 0){
            this.dx=-this.dx;
        }
        if(this.y+100 >600 || this.y-100 < 0){
            this.dy=-this.dy;
        }
        this.x=this.x+this.dx;
        this.y=this.y+this.dy;
        console.log(this.dx);
    }

    this.draw=function(){
// c.clearRect(0,0,innerWidth,innerHeight);
console.log('srae');
        c.beginPath();
        c.arc(this.x,this.y-3,5,0,2*Math.PI,false);
        c.arc(this.x-10,this.y-10,5,0,2*Math.PI,false);
        
        c.arc(this.x-20,this.y-8,5,0,2*Math.PI,false);
        
        
        c.arc(this.x-30,this.y-5,5,0,2*Math.PI,false);
        
        c.arc(this.x-40,this.y,5,0,2*Math.PI,false);
        c.arc(this.x-40,this.y+10,5,0,2*Math.PI,false);
        c.arc(this.x-35,this.y+20,5,0,2*Math.PI,false);
        c.arc(this.x-30,this.y+30,5,0,2*Math.PI,false);
        c.arc(this.x-23,this.y+40,5,0,2*Math.PI,false);
        c.arc(this.x-16,this.y+50,5,0,2*Math.PI,false);
        c.arc(this.x-10,this.y+60,5,0,2*Math.PI,false);
        c.arc(this.x-2,this.y+70,5,0,2*Math.PI,false);
        c.arc(this.x+8,this.y+60,5,0,2*Math.PI,false);
        c.arc(this.x+16,this.y+50,5,0,2*Math.PI,false);
        c.arc(this.x+25,this.y+40,5,0,2*Math.PI,false);
        c.arc(this.x+33,this.y+30,5,0,2*Math.PI,false);
        c.arc(this.x+38,this.y+20,5,0,2*Math.PI,false);
        c.arc(this.x+42,this.y+10,5,0,2*Math.PI,false);
        c.arc(this.x+40,this.y,5,0,2*Math.PI,false);
        c.arc(this.x+30,this.y-5,5,0,2*Math.PI,false);
        c.arc(this.x+20,this.y-8,5,0,2*Math.PI,false);
        c.arc(this.x+10,this.y-5,5,0,2*Math.PI,false);
        
        
        
        
        c.stroke();
        // c.fill();
        console.log('eat');
    }
}
  circle=new Circle;
  
circle.draw();
function disperse(){
    requestAnimationFrame(disperse);
  

    // a=dx,b=dy;
    // console.log(a);
circle.update();
circle.draw();
}
disperse();