
var canvas=document.getElementById('canvas');
var c=canvas.getContext('2d');
var x=100,y=50;
function animate(){
requestAnimationFrame(animate)

c.clearRect(0,0,500,500);


c.fillRect(x,y, 20, 100);

    x=x+1;
    if(x>500){
        x=0;
    }

}
animate();
