var canvas=document.getElementById("myCanvas");
var c=canvas.getContext("2d");
var cloud=document.getElementById("cloud");
c.drawImage(cloud, 0, 0, 1350, 600);

// var array=[];
// var array1=[];
var array=[[],[],[]];
array[0][0]=document.getElementById("button1");
array[0][1]=document.getElementById("button2");
array[1][0]=document.getElementById("button3");
array[1][1]=document.getElementById("button4");
array[2][0]=document.getElementById("button4");
array[2][1]=document.getElementById("button5");
  console.log(array[1]);
  var arra=[];
 arra[0]=document.getElementById("dog1");
arra[1]=document.getElementById("dog2");

  // c.drawImage(array[2], 620, 30, 50, 50);
var i=0;
var x=500;
var y=300,dx=1,dx=2,dy=-2,r=30,s=30;
var l=0;

function Bird(){
    this.x=x;
  this.y=y;
  this.dx=dx;
  this.dy=dy;
  this.r=0;
  this.l=l;
  this.st=0;
  this.c=0;
//   this.s=s;
    // this.select=function(){
        // console.log("selevcting");
  
    
this.move=function (){
    // console.log("changing");
    // console.log(this.x);
    i=i+1;
    if(i>1){
        i=0;
    }
    this.x=this.x+this.dx;
    this.y=this.y+this.dy;
    this.l=this.l+10;
    // console.log("l is ",this.l);
    if(this.x>1200){
        // this.dx=-this.dx;
        bird.posi();

    }
    if(this.l>1300){
        this.l= 0;
    }
    if(this.y>500){
        // this.dy=-this.dy;
        bird.posi();
    }
    if(this.y<50){
        // this.dy =-this.dy;
        bird.posi();
    }

if(i==0){
    
array[this.r][i+1].style.display="none";
array[this.r][i].style.display="block";
array[this.r][i].style.position="absolute";
array[this.r][i].style.left=this.x+"px";
array[this.r][i].style.top=this.y+"px";

// arra[i+1].style.display="none";
// arra[i].style.display="block";
// arra[i].style.position="absolute";
// arra[i].style.left=l+"px";
// arra[i].style.top=l+"px";
c.clearRect(0,0,1350,600);

document.addEventListener("mousemove",function(){
var color=["red","green","blue","orange","voilet","black"];
this.c=Math.floor(Math.random()*7);

    // c.clearRect(0,0,canvas.width,canvas.height);
var x=event.clientX;
var y=event.clientY;
c.beginPath();
c.arc(x,y,30,0,2*Math.PI,false);
c.fillStyle=color[7-this.c];
c.fill();
c.strokeStyle=color[this.c];
c.stroke();
console.log("color is",color[this.c]);

// console.log(come.style.left,come.style.top);
})
c.drawImage(cloud, 0, 0, 1350, 600);

c.drawImage(arra[i],this.l,500,100,100);

}
if(i==1){
    
array[this.r][i-1].style.display="none";
array[this.r][i].style.display="block";
array[this.r][i].style.position="absolute";
array[this.r][i].style.left=this.x+"px";
array[this.r][i].style.top=this.y+"px";


// arra[i-1].style.display="none";
// arra[i].style.display="block";
// arra[i].style.position="absolute";
// arra[i].style.left=l+"px";
// arra[i].style.top=l+"px";
// c.clearRect(0,0,1300,600);
// c.drawImage(cloud, 0, 0, 1350, 600);
// c.drawImage(cloud, 0, 0, 1350, 600);

c.drawImage(arra[i],this.l,500,100,100);
// c.drawImage(eat,this.x,this.y,100,100);

}
}
 this.posi=function(){
     this.x=500;
     this.y=100;
     this.x=Math.floor(Math.random()*600);
     this.y=Math.floor(Math.random()*600);
  this.dx=Math.floor(Math.random()*20);
  this.dy=Math.floor(Math.random()*20);
//   this.l=this.x;

 }
     this.select=function(){
        this.r=Math.floor(Math.random()*3);
     }
     
     this.eat=function(){
        c.drawImage(eat,this.x,this.y,100,100);
        // c.drawImage(arra[0],this.x,this.y,100,100)
       clearInterval(rem);    
this.st=this.st+1;
// this.l=0;

        setTimeout(function(){
                    
         rem=setInterval(change,200);
        },3000);
     }
}
var bird=new Bird();
// bird.select();
var rem;
function change(){
    bird.move();
}
change();
// var inter=[];
    // var rem=setInterval(change,200);
setTimeout(function(){
                    
     rem=setInterval(change,200);
},2000);
function eating(){
    bird.eat();
        // clearInterval(rem);    


}
// setInterval(eating,250);
var p=0;
function blast(){
    // setInterval(change,200);
    // clearInterval(rem);    
     array[0][0].style.display="none";
    array[0][1].style.display="none";
    array[1][0].style.display="none";
    array[1][1].style.display="none";
        // array[0].innerHTML="died";
        // array[1].innerHTML="died";

eating();
bird.posi();
bird.select();
    // console.log(x);
    p=p+1;
    var score=document.getElementById("score");
    score.innerHTML="score"+":"+p;
    

}
// for(var i=1;i<10;i++){
// console.log("i is",i);
// setTimeout(function(){
//     alert("hii");
// },3000);
// }
// var come=document.getElementById("mouse");
