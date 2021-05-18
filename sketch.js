var ball;
var database,position;
function setup(){
    createCanvas(500,500);
    database=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
//.ref is used to create reference to location of db
    var ballp=database.ref('Ball/position');
    //.on .on creates listener which keeps listening to changes in db
    ballp.on("value",readPosition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
//writting back to db
//.set is to set values in db
function changePosition(x,y){
database.ref('Ball/position').set({
    x:position.x+x,
    y:position.y+y
})    
}
function readPosition(data){
//.val is used to retrive the data from database
    position=data.val();
   ball.x=position.x;
   ball.y=position.y;



}







