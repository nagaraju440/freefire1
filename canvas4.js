var canvas=document.getElementById('myCanvas');
var c = canvas.getContext("2d");


// var d=0,e=100;

// function Image(){
//     this.d=d;
//     this.e=e;

//     this.dino=function(){
                        
//         var img=document.getElementById('din');
//         c.drawImage(img, this.d, this.e, 50, 50);
//         c.fillRect(100, 100, 10,20);
//         console.log("rajj");

//          }
         
// }

// var image=new Image();
// image.dino();



var x=510,y=110,dx=5;
// h=Math.floor(Math.random()*40);
 var id1,id2,id3,id4,id5;

function Rect(x,y){

    this.x=x;
    this.y=y;
    this.dx=dx;
    this.d=d;
    this.e=e;
    // this.w=w;
    // this.h=h;
  
    this.update=function(){
      
        this.x=this.x-this.dx;
        this.y=this.y;
    //    console.log(this.x);

       if(this.x+300<0){
        window.cancelAnimationFrame(id1);
        window.cancelAnimationFrame(id2);
        window.cancelAnimationFrame(id3);
        window.cancelAnimationFrame(id4);
        window.cancelAnimationFrame(id5);

           blocks();
           
       }
    }
    

    
this.draw1=function(){
    c.clearRect(50,90,canvas.width,canvas.height);

    c.fillRect(this.x, this.y, 10,40);
    c.fillRect(this.x+300, this.y+10, 10,30);

        c.moveTo(0,150);
    c.lineTo(600,150);
    c.stroke();
    var cloud=document.getElementById("cloud");
    c.drawImage(cloud, 100, 10, 50, 50);
    var birds=document.getElementById("birds");
    c.drawImage(birds, 520, 30, 50, 50);
    }

    this.draw2=function(){
        c.clearRect(50,90,canvas.width,canvas.height);

        c.fillRect(this.x, this.y+10, 10,30);
        c.fillRect(this.x+350, this.y+20, 10,20);

            c.moveTo(0,150);
        c.lineTo(600,150);
        c.stroke();
        var cloud=document.getElementById("cloud");
        c.drawImage(cloud, 250, 10, 50, 50);
        var birds=document.getElementById("birds");
        c.drawImage(birds, 420, 30, 50, 50);
        }

        this.draw3=function(){
            c.clearRect(50,90,canvas.width,canvas.height);

            c.fillRect(this.x, this.y+20, 10,20);
            
            c.fillRect(this.x+300, this.y+20, 10,20);
            c.fillRect(this.x+320, this.y+20, 10,20);
                c.moveTo(0,150);
            c.lineTo(600,150);
            c.stroke();
            var cloud=document.getElementById("cloud");
            c.drawImage(cloud,340,10, 50, 50);
            var birds=document.getElementById("birds");
    c.drawImage(birds, 320, 30, 50, 50);
            }

            this.draw4=function(){
                c.clearRect(50,90,canvas.width,canvas.height);
    
                c.fillRect(this.x, this.y+20, 10,20);
                c.fillRect(this.x+20, this.y+20, 10,20);



                
                c.fillRect(this.x+300, this.y+20, 10,20);
                c.fillRect(this.x+320, this.y+20, 10,20);

                c.fillRect(this.x+340, this.y+20, 10,20);
                    c.moveTo(0,150);
                c.lineTo(600,150);
                c.stroke();
                var cloud=document.getElementById("cloud");
                c.drawImage(cloud, 440,10, 50, 50);
                var birds=document.getElementById("birds");
    c.drawImage(birds, 220, 30, 50, 50);
                }



                this.draw5=function(){
                    c.clearRect(50,90,canvas.width,canvas.height);
        
                    c.fillRect(this.x, this.y+20, 10,20);
                    c.fillRect(this.x+20, this.y+20, 10,20);

                    c.fillRect(this.x+40, this.y+20, 10,20);

                        c.moveTo(0,150);
                    c.lineTo(600,150);
                    c.stroke();
                    var cloud=document.getElementById("cloud");
                    c.drawImage(cloud, 520, 10, 50, 50);
                    var birds=document.getElementById("birds");
    c.drawImage(birds, 120, 30, 50, 50);
                    }


}


// var dinno=new Rect(x,y);


// function animation8(){
//     requestAnimationFrame(animation8);
//     dinno.dino();
// }
// animation8();




// var rect=new Rect(x,y);
var array=[];
var array1=[];
for(var i=0;i<10000;i++){
 array[i]=new Rect(x,y);

}
for(var i=0;i<10000;i++){
    array1[i]=new Rect(x,y);
   
   }

function animate1(){

   id1= requestAnimationFrame(animate1);
    // c.clearRect(0,0,canvas.width,canvas.height);
// console.log(i);
    array[i].update();
    array[i].draw1();
console.log("eat1");
}


function animate2(){
    console.log("eat2");

    id2=requestAnimationFrame(animate2);
    // c.clearRect(0,0,canvas.width,canvas.height);
    // console.log(i);

    array[i].update();
    array[i].draw2();
}



function animate3(){
    console.log("eat3");

   id3= requestAnimationFrame(animate3);
    // c.clearRect(0,0,canvas.width,canvas.height);
    // console.log(i);

    array[i].update();
    array[i].draw3();
}

function animate4(){

    id4=requestAnimationFrame(animate4);
    // c.clearRect(0,0,canvas.width,canvas.height);
    // console.log(q);

    array[i].update();
    array[i].draw4();
}


function animate5(){

   id5= requestAnimationFrame(animate5);
    // c.clearRect(0,0,canvas.width,canvas.height);
    // console.log(t);

    array[i].update();
    array[i].draw5();
}


// // setInterval(animate,300);
var i=0;
function blocks(){

    var t=Math.floor(Math.random()*5)+1;
    console.log(t);
    i=i+1;
    switch(t){
        case 1:
            x=500,y=110;
        animate1();

            break;
        case 2:
            x=500,y=110;
           animate2();
            break;

        case 3:
            x=500,y=110;
            animate3();
            break;

        case 4:
            x=500,y=110;
            animate4();
            break;  
            
        case 5:
            x=500,y=110;
            animate5();
            break;       
    }
    
}
    blocks();
// blocks();
// setInterval(blocks, 3000);


var d,e;


        

var img=document.getElementById('din');

c.drawImage(img, 0, 100, 50, 50);
console.log('img');


document.addEventListener("keydown",function keycode(event){    

    var z =event.which || event.keyCode;
    console.log(z);
    if(z==38){
        console.log('up');
        up();
    }
    
  
})

function up(){
         c.clearRect(0,0,canvas.width,canvas.height);

    var img=document.getElementById('din');

c.drawImage(img, 0, 40, 50, 50);  
console.log('up');

}
function down(){
        c.clearRect(0,0,canvas.width,canvas.height);

    var img=document.getElementById('din');

    c.drawImage(img, 0, 100, 50, 50); 
    console.log('down');
}




document.addEventListener("keyup",function keycode(event){    

    var z =event.which || event.keyCode;
    console.log(z);
    if(z==38){
        console.log('up');
        down();
    }
  
  
})