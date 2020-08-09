var ball;
var database

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database=firebase.database()
   var data= database.ref("ball/position" )
   data.on("value",readValue );


}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        write(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        write(1,0);
    }
    else if(keyDown(UP_ARROW)){
        write(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        write(0,+1);
    }
     
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function readValue(data1) {
var position=data1.val();
ball.x=position.x 
ball.y=position.y
}
function write (x,y) {
    database.ref("ball/position" ).set({x:ball.x+x,y:ball.y+y})

}