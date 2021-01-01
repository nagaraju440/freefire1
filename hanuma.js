
var balls1=document.getElementById("balls1");
var balls=document.getElementById("balls");

document.onmousemove=function(){
    var x=event.clientX*100/window.innerWidth+"%";
    var y=event.clientY*100/window.innerHeight+"%";
    balls.style.left=x;
    balls.style.top=y;   
    balls1.style.left=x;
    balls1.style.top=y;   
    balls.style.transform="translate(-"+x+"-20,-"+y+"-20)";
    balls1.style.transform="translate(-"+x+"-20,-"+y+"-20)";
}
