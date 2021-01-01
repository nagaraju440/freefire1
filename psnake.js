var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
// var scoreElement = document.getElementById("score");/
let n=2;
const row=15;
const col=15;
const size=40;
const vacant = "WHITE";
function drawsquare(x,y,color){
    ctx.fillStyle = color;
    ctx.fillRect(x*size,y*size,size,size);
    ctx.strokeStyle = "BLACK";
    ctx.strokeRect(x*size,y*size,size,size);
}

let board= [];
for(let i=0;i<row;i++){
    board[i] = [];
    for(let j=0;j<col;j++){
        board[i][j]=vacant;
    }
}

function drawBoard(){
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            drawsquare(j,i,board[i][j]);
        }
    }
}

drawBoard();
let snake = []
snake[0] = {x:3*size,y:2*size};


let food = {
    x:Math.floor(Math.random()*15)*size,
    y:Math.floor(Math.random()*15)*size
};

let move;
let a=[];
let i=0;
document.addEventListener("keydown",control);

function control(eve)
{

    if(eve.keyCode == 37 && move!="RIGHT")
    {
        console.log("you pressed left arrow");
        move = "LEFT"; 
        // moveleft();
    }
    else if(eve.keyCode == 38 && move!="DOWN")
    {
        console.log("you pressed up arrow");
        move = "UP";
        // moveup();
    }
    else if(eve.keyCode == 39 && move!="LEFT")
    {
        move = "RIGHT";
        console.log("you pressed right arrow");
        // moveright();
    }
    else if(eve.keyCode == 40 && move!="UP")
    {
        move = "DOWN";
        console.log("you pressed down arrow");
        // movedown();  
    }
    if(eve.keyCode==37 || eve.keyCode==38 ||eve.keyCode==39 || eve.keyCode==40){
    a[i]=move;
    i=i+1;
    if(i==2){
        i=0;
    }
}
}
function hi(){
    // console.log("hii");
}

function draw()
{  
    // console.log(a[0],"a[0]");

    hi();
    ctx.fillStyle = "red";
    ctx.fillRect(food.x,food.y,size,size); 
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    for(let i=0;i<snake.length;i++)
    { 
        
        ctx.fillStyle = (i==0) ? "green" : "pink";
        ctx.fillRect(snake[i].x,snake[i].y,size,size);
        ctx.strokeStyle = "yellow";
        ctx.strokeRect(snake[i].x,snake[i].y,size,size);
    }
    
    

// ctx.clearRect(0,0,c.width,c.height)
// snakey=snakey+0;
    // console.log(snakeX);
    if(move == "LEFT") snakeX -= size;
    if(move == "RIGHT") snakeX += size;
    if(move == "UP") snakeY -= size;
    if(move == "DOWN") snakeY += size;


    if(snakeX == food.x && snakeY == food.y){
        food = {
            x:Math.floor(Math.random()*15)*size,
            y:Math.floor(Math.random()*15)*size
        };
    }else {
        // console.log(snakeX,food.x);
        undraw(snakeX,snakeY,food.x,food.y,a[0]);
    snake.pop();

    }
    // console.log(snake);
    
    let newHead = {
        x : snakeX,
        y : snakeY
    }
    // console.log(newHead.x,newHead.y)

    snake.unshift(newHead);

} 

var GO;
function undraw(x,y,a,b,c)
{ 
    
    console.log("a[0]",c)
     if(move == "LEFT")
    {
        ctx.fillStyle = "white";
        ctx.fillRect(x+size*(snake.length+1),y,size,size);
        ctx.fillRect(x+size,y-size,size,size);
        ctx.fillRect(x+size,y+size,size,size);
        ctx.strokeStyle = "black";
        ctx.strokeRect(x+size*(snake.length+1),y,size,size);
        ctx.strokeRect(x+size,y-size,size,size);
        ctx.strokeRect(x+size,y+size,size,size);
        if(a[0]=="UP"){

        }
        if(a[0]=="DOWN"){

        }
    }
     if(move == "RIGHT")
    {
        ctx.fillStyle = "white";
        ctx.fillRect(x-size*(snake.length+1),y,size,size);
        ctx.fillRect(x-size,y-size,size,size);
        ctx.fillRect(x-size,y+size,size,size);
        ctx.strokeStyle = "black";
        ctx.strokeRect(x-size*(snake.length+1),y,size,size);
        ctx.strokeRect(x-size,y-size,size,size);
        ctx.strokeRect(x-size,y+size,size,size);
        if(a[0]=="UP"){

        }
        if(a[0]=="DOWN"){
            
        }
    }
     if(move == "UP")
    {
        ctx.fillStyle = "white";
        ctx.fillRect(x,y+size*(snake.length+1),size,size);
        ctx.fillRect(x-size,y+size,size,size);
        ctx.fillRect(x+size,y+size,size,size);
        ctx.strokeStyle = "black";
        ctx.strokeRect(x,y+size*(snake.length+1),size,size);
        ctx.strokeRect(x-size,y+size,size,size);
        ctx.strokeRect(x+size,y+size,size,size);
        if(c =="RIGHT"){
     

        }
        if(a[0]=="LEFT"){
            
        }
    }
     if(move == "DOWN")
    {
        if(c=="RIGHT"){
            ctx.fillStyle = "blue";
console.log("jhsmbdhk")
            ctx.fillRect(x-size*(snake.length+1),y-size  ,size,size);
        }
        if(a[0]=="LEFT"){

        }
// console.log(x,y)
        ctx.fillStyle = "white";
        ctx.fillRect(x,y-size*(snake.length+1),size,size);
        ctx.fillRect(x-size,y-size,size,size);
        ctx.fillRect(x+size,y-size,size,size);
        ctx.strokeStyle = "black";
        ctx.strokeRect(x,y-size*(snake.length+1),size,size);
        ctx.strokeRect(x-size,y-size,size,size);
        ctx.strokeRect(x+size,y-size,size,size);

       
    }


}
        let game = setInterval(draw,1000)