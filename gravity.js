var canvas=document.getElementById('canvas');
var c=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var z=0;
var g=0;
function Circle(x,y,dx,dy){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=25;
    this.update=function(){
        if(this.x +30 >1350 || this.x-30 < 0){
            this.dx=-this.dx;
        }
       
        if(this.y >700 || this.y-z < 0 ){
            this.dy=-this.dy;

            // z=z+40;
            
            // console.log(z);
            
            }
   

            if(this.y>700){
                console.log(g)
                g=g+1;
                // console.log(z)
            }
           if(this.y>700 && g==28 ){
               if(z<500){
                z=z+100;

               }else{
                   z=z+20;
                   this.dx=3;
               }
               g=0;
               console.log(z)
        
           }
           if(z>=700){
               this.y=670;
               this.dy=0;

           }
     

        this.x=this.x+this.dx;
        this.y=this.y+this.dy;
    
    }
    // console.log(this.y);
    // if(this.y>700){
    //     z=z+40;
    //     console.log(z)
    // }
    var color=["red","green","blue","orange","voilet","white","indigo"];
    this.c=Math.floor(Math.random()*8);
    this.draw= function() {

        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,2*Math.PI,false);
        // ctx.arc(p,q,this.radius,0,2*Math.PI,false);
        // ctx.arc(p,q+70,this.radius,0,2*Math.PI,false);
        c.strokeStyle=color[this.c];
        c.stroke();
        c.fillStyle=color[7-this.c];
        c.fill();

    }
}
var x=0,y;


var  array=[];
for(var i=0;i<30;i++){
    var x=Math.floor(Math.random()*window.innerWidth);
var y=(Math.floor(Math.random()*100)+100);
// var dx=Math.random()-0.5;
// var dy=Math.random()-0.5;
// var radius=Math.floor(Math.random()*40);
// x=600,y=300;
// x=x+50;
// x=x+50;
// y=30;
dx=0;
dy=10;

    array[i]=(new Circle(x,y,dx,dy));
}


function animate() {
    c.clearRect(0,0,innerWidth,innerHeight);
    
//  req=requestAnimationFrame(animate);
for(var i=0;i<array.length-2;i++){
    array[i].update();
    array[i].draw();

}
}
setInterval(animate,30)
    animate();