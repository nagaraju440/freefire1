
var canvas=document.getElementById('canvas');
var c=canvas.getContext('2d');
function Block(x,y){
this.x=x;
this.y=y;
this.draw=function(){
    c.fillRect(this.x,this.y,20,100);
}
this.update=function(){
    this.x=this.x+2;
    if(this.x>500){
        this.x=0;
    }
}
}
var array=[];
var p=50,q=100;
for(var i=0;i<3;i++){
    array[i]=new Block(p,q)
    p=p+50;
}
function animate(){
    requestAnimationFrame(animate);
    
    c.clearRect(0,0,500,500)
      for(var i=0;i<3;i++){
          array[i].update();
          array[i].draw();
      }
     
}
animate();







