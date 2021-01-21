var ball;
var db,position

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    db=firebase.database()
    db.ref("ball/position").on("value",readPosition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-8,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(8,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-8);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+8);
    }
    drawSprites();
}
function writePosition(x,y) {
    db.ref("ball/position").set({ 
        x:position.x+x,
        y:position.y+y
    })
}
function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPosition(data) {
    position=data.val()
    ball.x=position.x;
    ball.y=position.y;
}
