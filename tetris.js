const canvas=document.getElementById('canvas');
const c = canvas.getContext("2d");

var r=20,col=10;
var a,b;
function draw(x,y,clr){
    c.fillStyle=clr;
    // console.log(x,y);
    c.fillRect(x*40,y*40,40,40);
    c.strokeStyle="black";
    c.strokeRect(x*40,y*40,40,40);
    
}
var array=[];
for(var i=0;i<r;i++){
  array[i]=[];
  for(var j=0;j<col;j++){
      array[i][j]="white";
      draw(j,i,"white");
  }
}
const I = [
	[
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	],
	[
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
	],
	[
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0],
	],
	[
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
	]
];

const J = [
	[
		[1, 0, 0],
		[1, 1, 1],
		[0, 0, 0]
	],
	[
		[0, 1, 1],
		[0, 1, 0],
		[0, 1, 0]
	],
	[
		[0, 0, 0],
		[1, 1, 1],
		[0, 0, 1]
	],
	[
		[0, 1, 0],
		[0, 1, 0],
		[1, 1, 0]
	]
];

const L = [
	[
		[0, 0, 1],
		[1, 1, 1],
		[0, 0, 0]
	],
	[
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 1]
	],
	[
		[0, 0, 0],
		[1, 1, 1],
		[1, 0, 0]
	],
	[
		[1, 1, 0],
		[0, 1, 0],
		[0, 1, 0]
	]
];

const O = [
	[
		// [0, 0, 0, 0],
		// [0, 1, 1, 0],
		// [0, 1, 1, 0],
        // [0, 0, 0, 0],
        [1,1],
    [1,1]
	]
];

const S = [
	[
		[0, 1, 1],
		[1, 1, 0],
		[0, 0, 0]
	],
	[
		[0, 1, 0],
		[0, 1, 1],
		[0, 0, 1]
	],
	[
		[0, 0, 0],
		[0, 1, 1],
		[1, 1, 0]
	],
	[
		[1, 0, 0],
		[1, 1, 0],
		[0, 1, 0]
	]
];

const T = [
	[
		[0, 1, 0],
		[1, 1, 1],
		[0, 0, 0]
	],
	[
		[0, 1, 0],
		[0, 1, 1],
		[0, 1, 0]
	],
	[
		[0, 0, 0],
		[1, 1, 1],
		[0, 1, 0]
	],
	[
		[0, 1, 0],
		[1, 1, 0],
		[0, 1, 0]
	]
];

const Z = [
	[
		[1, 1, 0],
		[0, 1, 1],
		[0, 0, 0]
	],
	[
		[0, 0, 1],
		[0, 1, 1],
		[0, 1, 0]
	],
	[
		[0, 0, 0],
		[1, 1, 0],
		[0, 1, 1]
	],
	[
		[0, 1, 0],
		[1, 1, 0],
		[1, 0, 0]
	]
];



const PIECES=[
    [I,"red"],
      [J,"blue"],
    [L,"green"],
[O,"orange"],
[S,"yellow"],
[T,"red"],
[Z,"purple"]];


// for(var i=0;i<I[0].length;i++){
//     for(var j=0;j<I[0].length;j++){
//         if(I[1][i][j]==1){
//             console.log('eat');
//             draw(j,i,"red");
//         }
//     }
// }
// var object=[i,j,t];

var s=0;

function Piece(type,color){
    this.x=3;
    this.y=0;
    this.color=color;
    this.type=type[0];
	this.l=0;
	this.v=0;
	this.m=type[0].length-1;
	this.n=1;
this.s=s;
this.draw1=function(){
    for(var i=0;i<type[0].length;i++){
            for(var j=0;j<type[0].length;j++){
                if(type[this.s][i][j]==1){
                    
                    draw(this.x+j,this.y+i,color);
                }
            }
        }
}
this.undraw1=function(){
    for(var i=0;i<type[0].length;i++){
            for(var j=0;j<type[0].length;j++){
                if(type[this.s][i][j]==1){
                    
                    draw(this.x+j,this.y+i,"white");
                }   
            }
        }
}
this.left=function(){
    piece.undraw1();

    this.x=this.x-1;
    if(this.x+this.l < 0){
        this.x=-this.l;
        piece.draw1();

    }else{
        
        piece.draw1();

    }
}
this.right=function(){

	this.x=this.x+1;
    if(this.x+this.m>=9){
        this.x=9-this.m;
        piece.draw1();


    }else{
        piece.draw1();

    }
}	
this.down=function(){
// clearInterval(stop)

    piece.undraw1();

    this.y=this.y+1;
    if(this.y+this.n >=19){
this.y=19-this.n;
piece.draw1();
this.lock();


    }else{
        piece.draw1();

    }
}
this.rotate=function(){
	
    if(this.x<0){
        this.x=-this.x-this.l;
	}
	if(this.x+this.m>=9-this.m){
		this.x=this.x-1;
	}
	this.s=(this.s+1)%4;
	if(this.y+this.s>=19){
		this.y=16;
	}
var d=0;
    for(var i=0;i<type[0].length;i++){
               this.v=0;
        for(var  j=0;j<type[0].length;j++){
             this.v++;
            if(type[this.s][j][i]){
                  this.l=d;
                //   console.log(this.l);  
            break;      
			}
			
        }
// console.log(type[this.s][this.v-1][i],"it");
        if((type[this.s][this.v-1][i])){

            break;
        }
d++;
	}
	this.m=type[0].length;
	for(var i=type[0].length-1;i>=0;i--){
		
		for(var j=type[0].length-1;j>=0;j--){
			if(type[this.s][j][i]){
				this.m=i;	
 var enough=true;
				break;
			}
		
		}
		if(enough){
			break;
		}
	}
	console.log(this.y," is y");
	for(var i=type[0].length-1;i>=0;i--){
		
		for(var j=type[0].length-1;j>=0;j--){
			if(type[this.s][i][j]){
				this.n=i;	
 var enough=true;
				break;
			}
		}
		if(enough){
			break;
		}
	}

	
}
this.lock=function (){

		
// draw(this.y+i,this.x+j,this.color);

var index=Math.floor(Math.random()*7);
piece= new Piece(PIECES[index][0],PIECES[index][1]);
for(var i=0;i<r;i++){
	for(var j=0;j<col;j++){
		if(array[i][j]=="white"){
			// piece.draw1();
			clearInterval(stop)
		}
	}
  }
}

	


}    

var index=Math.floor(Math.random()*7);
piece= new Piece(PIECES[index][0],PIECES[index][1]);

piece.draw1();

  

document.addEventListener("keydown",function keycode(event){    

    var z =event.which || event.keyCode;
    if(z==37){

        piece.left();

    }else if(z==38){
        piece.undraw1();
        piece.rotate();
        piece.draw1();
    }else if(z==39){
        piece.undraw1();
        piece.right();
    }else if(z==40){
		raju();
    }
})
function raju(){
        piece.down();
         
console.log("hiii");
}
var stop=setInterval(raju, 1000)