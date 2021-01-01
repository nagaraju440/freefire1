var canvas=document.getElementById('canvas');
var c=canvas.getContext('2d');
var ctx=canvas.getContext('2d')
var z=0;
var g=0;
var cFont = ctx.font;
function Circle(x,y,dx,dy){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=25;
    this.s=0;
    this.p=0;
    this.update=function(){
        if(this.x +30 >1350 || this.x-30 < 0){
            this.dx=-this.dx;
        }
       
        if(this.y >700 || this.y-z < 0 ){
            this.dy=-this.dy;

            // z=z+40;
            
            // console.log(z);
            
            }
   

     

        this.x=this.x+this.dx;
        this.y=this.y+this.dy;
    this.s=this.s+0.1;
    if(this.s>20){
        this.s=1;
        this.x=Math.floor(Math.random()*400);
        
        this.y=Math.floor(Math.random()*500);
    }
    this.p=this.s+"px"
    }
    var color=["red","green","blue","orange","voilet","black","indigo","pink",];
    this.c=Math.floor(Math.random()*8);
    this.draw= function() {

        var fontArgs = ctx.font.split(' ');
var newSize =this.p;
ctx.font = newSize + ' ' + fontArgs[fontArgs.length - 1];
        c.fillText("HBD PRAVEEN 😘",this.x,this.y);
        c.strokeStyle=color[this.c];
        c.stroke();
        c.fillStyle=color[7-this.c];
        c.fill();

    }
}
var x=0,y;


var  array=[];
for(var i=0;i<3;i++){
    var x=Math.floor(Math.random()*500);
    if(x>300){
        x=x-300
    }
var y=Math.floor(Math.random()*500);
if(y<100){
    y=y+200
}
dx=0.5;
dy=0.5;

    array[i]=(new Circle(x,y,dx,dy));
}


var  array1=[];
for(var i=0;i<3;i++){
    var x=Math.floor(Math.random()*500);
    if(x>300){
        x=x-300
    }
var y=Math.floor(Math.random()*500);
if(y<100){
    y=y+200
}
dx=0;
dy=0;

    array1[i]=(new Circle(x,y,dx,dy));
}

function animate() {
    c.clearRect(0,0,innerWidth,innerHeight);
    
 req=requestAnimationFrame(animate);
for(var i=0;i<array.length;i++){
    array[i].update();
    array[i].draw();
}
}
// setInterval(animate,600)
    animate();


    function animate1() {
        // c.clearRect(0,0,innerWidth,innerHeight);
        
     req=requestAnimationFrame(animate1);
    for(var i=0;i<array.length;i++){
        array1[i].update();
        array1[i].draw();
    }
    }
    // setInterval(animate,600)
        setTimeout(animate1,1000)
        

        var  array2=[];
for(var i=0;i<3;i++){
    var x=Math.floor(Math.random()*500);
    if(x>300){
        x=x-300
    }
var y=Math.floor(Math.random()*500);
if(y<100){
    y=y+200
}
dx=0;
dy=0;

    array2[i]=(new Circle(x,y,dx,dy));
}



function animate2() {
    // c.clearRect(0,0,innerWidth,innerHeight);
    
 req=requestAnimationFrame(animate2);
for(var i=0;i<array.length;i++){
    array2[i].update();
    array2[i].draw();
}
}
// setInterval(animate,600)
    setTimeout(animate2,2000)