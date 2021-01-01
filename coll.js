var canvas=document.getElementById('canvas');
var c=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var z=0;
var g=0;
var b=[];
var a,b;
var f,e;
var scale=10;
function Circle(x,y,dx,dy){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.a=a;
    this.b=b;
    this.radius=25;
    // this.color=col;
    this.update=function(){
        if(this.x +30 >window.innerWidth || this.x-30 < 0){
            this.dx=-this.dx;
        }
       
        if(this.y >700 || this.y-z < 0 ){
            this.dy=-this.dy;
        }
        this.x=this.x+this.dx;
        this.y=this.y+this.dy; 
        if(f==this.y){
            // alert("meeted");
        }
}

this.down=function(z){
    switch(z){
       
        case 39 :
            // this.dy=0
            this.dx=10;
            break;
        case 37 :
            // this.dy=0;
            this.dx=-10;
            break;
               
    }
} 
this.updown=function(w){
    switch(w){
       
        case 39 :
            // this.dy=0
            this.dx=0;
            break;
        case 37 :
            // this.dy=0;
            this.dx=0;
            break;
               
    }
}
       
   this.up=function(){
       
    if(this.b >700 || this.b-10 < 0 ){
        this.dy=-this.dy;
    }
    this.a=this.a+this.dx;
    this.b=this.b-this.dy;
    f=this.b;
    e=this.a;
   }
     
   this.dr=function(){
       
    c.fillRect(this.a, this.b, 200, 10);
    c.fillStyle="red";

   }
    this.draw= function() {
        console.log(this.x+100)
         if(f==this.y && this.x+100>600 && this.x+100<800){
            c.beginPath();
            c.arc(this.x+100,this.y-25,this.radius,0,2*Math.PI,false);
            c.stroke();
            c.fill();
            c.fillStyle="white";
            this.dy=-10;
        //   cancelAnimationFrame(req)
        // clearInterval(req)
         }
         else{
             this.dy=10;
            c.beginPath();
            c.arc(this.x+100,this.y,this.radius,0,2*Math.PI,false);
            c.stroke();
            c.fill();
            c.fillStyle="white";
         }
    }
}
var x=600,y=100;


var  array=[];
    dx=0;
    dy=10;
    array[0]=(new Circle(x,y,dx,dy));
// x=x+1100;
y=y+400;
a=x;
b=y;
array[1]=new Circle(a,b,dx,dy);



function animate() {
    c.clearRect(0,0,innerWidth,innerHeight);
    
    
//  req=requestAnimationFrame(animate);
// for(var i=0;i<1;i++){
    
     
    array[1].up();
    array[1].dr();
    array[0].update();   
    array[0].draw();
    // this.me();
// console.log(i)
// }
}
 var req=setInterval(animate,100)
    // animate();

    document.addEventListener("keydown",function keycode(event){    

        var z =event.which || event.keyCode;
        console.log("down");
        array[0].down(z);
    })
    document.addEventListener("keyup",function keycode(event){    

        var w =event.which || event.keyCode;
        console.log("up");
        array[0].updown(w);
    })