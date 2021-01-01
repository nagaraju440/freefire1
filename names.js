
var c = document.getElementById("myCanvas");

var ctx = c.getContext("2d");

// var x=Math.floor(Math.random()*window.innerWidth);
//  var y=Math.floor(Math.random()*window.innerHeight);
var x=300;
var y=300,dx=5,dy=5;
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight);
    
    if(x+400==1350 || x-30 == 0){
        dx=-dx;
    }
    if(y+70==600 || y-80 == 0){
        dy=-dy;
    }
    x=x+dx;
    y=y+dy;
    ctx.font = "40px Arial";
    ctx.fillText("SUDHARSHAN SIR", x, y);

ctx.fillText("KEERTHY AKKA", x+50, y+70);
}
animate();
