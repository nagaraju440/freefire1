
var c = document.getElementById("myCanvas");

var ctx = c.getContext("2d");
for( var i=0;i<100;i++)
{
var x=Math.floor(Math.random()*window.innerWidth);
 var y=Math.floor(Math.random()*window.innerHeight);

ctx.beginPath();
ctx.arc(x,y,30,0,2*Math.PI,false);
ctx.stroke();
}
// location.reload();