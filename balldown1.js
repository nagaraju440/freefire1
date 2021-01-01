var canvas=document.getElementById('canvas');
var c=canvas.getContext('2d');
canvas.width=400;
canvas.height=window.innerHeight;
var z=0;
var g=0;
var b=[];
var a,b;
var f1,e1;
var scale=10;
function Circle(x,y,dx,dy,w){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.a=a;
    this.b=b;
    this.w=w;
    this.radius=15;
    this.a=x;
    this.b=y;
    this.da=dx;
    this.db=dy;
    // this.color=col;
    this.update=function(){
      console.log(window.innerHeight)
       
        if( this.y < 0 ){
            // this.dy=-this.dy;
            this.y=730;
            
        }
        this.x=this.x+this.dx;
        this.y=this.y-this.dy; 
        e1=this.w;
        f1=this.y;
        
    //   console.log(this.y)
}

var color=["red","green","blue","orange","voilet","indigo","purple","pink","yellow"];
this.c=Math.floor(Math.random()*8);

    this.draw= function() {
      
             c.fillRect(this.x,this.y,this.w, 10);
             c.fillStyle=color[this.c];
         }

         

//for ball
this.ballupdate=function(){
           
    this.a=this.a+this.da;
    this.b=this.b+this.db; 
 }
 this.balldraw=function(){
// console.log(f1)
    if(this.b == f1&& this.a<e1+5){
        l=i;
        // alert("hii")
        this.db=-10;
       //  f1=f1-20;
       this.b=this.b-20; 
  
}

else{ 
   this.db=10;

 
}
    c.beginPath();
    c.arc(this.a,this.b,this.radius,0,2*Math.PI,false);
    c.stroke();
    c.fill();
    // c.fillStyle="white";
      

 } 


 this.down=function(z){
    switch(z){
       
        case 39 :
            // this.dy=0
            this.da=scale*1;
            break;
        case 37 :
            // this.dy=0;
            this.da=-scale*1;
            break;
               
    }
} 
this.updown=function(w){
    switch(w){
       
        case 39 :
            // this.dy=0
            this.da=0;
            break;
        case 37 :
            // this.dy=0;
            this.da=0;
            break;
               
    }
}




}

var  x=0,y=720;
dx=0,dy=10;
var array=[];
var array1=[];
var array2=[];
for(var i=0;i<6;i++){
    var g=(Math.floor(Math.random()*5)*10);
    var h=(Math.floor(Math.random()*10)*10);
    if(h<50){
        h=h+50;
    }
    var j=(Math.floor(Math.random()*6)*10);
    var k=50-j;
    array[i]=new Circle(0,y,dx,dy,100);
    array1[i]=new Circle(150,y+g,dx,dy,100);
    array2[i]=new Circle(300+k,y-g,dx,dy,j+50);

     y=y+100;
console.log(y)
}

var ball=new Circle(200,10,0,10,0);


function animate1(){
    c.clearRect(0,0,innerWidth,innerHeight);
    // requestAnimationFrame(animate1);
    c.fillStyle="white"
    for(var i=0;i<6;i++){
        array[i].update();
        array[i].draw();
    ball.balldraw();

        // array1[i].update();
        // array1[i].draw();
        // array2[i].update();
        // array2[i].draw();
    }
    ball.ballupdate();

  
}
setInterval(animate1,100)




document.addEventListener("keydown",function keycode(event){    

    var z =event.which || event.keyCode;
    console.log("down");
    ball.down(z);
})
document.addEventListener("keyup",function keycode(event){    

    var w =event.which || event.keyCode;
    console.log("up");
    ball.updown(w);
})