
var c = document.getElementById("myCanvas");

var ctx = c.getContext("2d");

// var x=Math.floor(Math.random()*window.innerWidth);
//  var y=Math.floor(Math.random()*window.innerHeight);
var x=300;
var y=300,dx=5,dy=5;
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight);
    
    if(x+30==1350 || x-30 == 0){
        dx=-dx;
    }
    if(y+30==600 || y-30 == 0){
        dy=-dy;
    }
    x=x+dx;
    y=y+dy;
    
ctx.beginPath();
ctx.arc(x,y,30,0,2*Math.PI,false);
ctx.stroke();
}
animate();
