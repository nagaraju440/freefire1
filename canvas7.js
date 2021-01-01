
var c = document.getElementById("myCanvas");

var ctx = c.getContext("2d");

var x=100,y=100;
ctx.beginPath();
for( var i=0;i<5;i++){
    ctx.arc(x,,3,0,2*Math.PI,false);
x=x+100;
y=y+100;
}
ctx.stroke();
ctx.fill();