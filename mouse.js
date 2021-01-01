// var canvas=document.getElementById("myCanvas");
// var c=canvas.getContext("2d");
// var x=300,y=200;

//     document.addEventListener("mousemove",function(){
//             c.clearRect(0,0,canvas.width,canvas.height);

//         var x=event.clientX;
//         var y=event.clientY;
//         c.beginPath();
// c.arc(x,y,30,0,2*Math.PI,false);
// c.stroke();
// c.fill();

//     console.log(x,y);
//     })
       
var come=document.getElementById("move");
document.addEventListener("mousemove",function(){
    // c.clearRect(0,0,canvas.width,canvas.height);
var x=event.clientX;
var y=event.clientY;
come.style.display="block";
come.style.position="absolute";
come.style.left=x;
come.style.top=y;
console.log(come.style.left,come.style.top);
})