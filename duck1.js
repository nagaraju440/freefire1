var canvas=document.getElementById("myCanvas");
var c=canvas.getContext("2d");
var cloud=document.getElementById("cloud");
var array=[];
 array[0]=document.getElementById("button1");
// c.drawImage(array[1], 520, 30, 50, 50);
array[1]=document.getElementById("button2");

// c.drawImage(array[2], 620, 30, 50, 50);
var i=0;
var x=0;
function change(){
    
    console.log(x);
    i=i+1;
    if(i>1){
        i=0;
    }
    x=x+10;
    
    c.drawImage(cloud, 0, 0, 1350, 600);

if(i==0){
    
array[i+1].style.display="none";
array[i].style.display="block";
array[i].style.position="absolute";
array[i].style.left=x+"px";
array[i].style.top=x+"px";
}
if(i==1){
        
array[i-1].style.display="none";
array[i].style.display="block";
array[i].style.position="absolute";
array[i].style.left=x+"px";
array[i].style.top=x+"px";
}
    // c.drawImage(array[i], x, 30, 50, 50);
// console.log("changing");

}
change();
   var rem=setInterval(change,200);


function blast(){
    // setInterval(change,200);
    clearInterval(rem);    
    //  array[0].style.display="none";
    // array[1].style.display="none";
    // array[0].innerHTML="died";
    // array[1].innerHTML="died";
var  x=Math.floor(Math.random()*600);
change();
    console.log(x);

}
