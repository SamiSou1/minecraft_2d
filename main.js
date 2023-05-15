var canvas = new fabric.Canvas('myCanvas');

blockImageWidth = 30;
blockImageHeigth = 30;

playerX = 10;
playerY = 10;

var playerObject="";

var blockImageObject="";

function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img){
    playerObject = Img;

    playerObject.scaleToWidth(150);
    playerObject.scaleToHeight(140);
    playerObject.set({
    top:playerY,
    left:playerX
    });
    canvas.add(playerObject); 
    });
}

function newImage(getImage){
    fabric.Image.fromURL(getImage, function(Img){
    blockImageObject = Img;

    blockImageObject.scaleToWidth(blockImageWidth);
    blockImageObject.scaleToHeight(blockImageHeigth);
    blockImageObject.set({
    top:playerY,
    left:playerX
    });
    canvas.add(blockImageObject);
    });
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80'){
        console.log("p e shift presionadas juntas");
        blockImageWidth = blockImageWidth + 23;
        blockImageHeigth = blockImageHeigth + 23;
        document.getElementById("currentWidth").innerHTML= blockImageWidth;
        document.getElementById("currentHeight").innerHTML= blockImageHeigth;
    }

    if(e.shiftKey == true && keyPressed == '77'){
        console.log("m e shift presionadas juntas");
        blockImageWidth = blockImageWidth - 23;
        blockImageHeigth = blockImageHeigth - 23;
        document.getElementById("currentWidth").innerHTML= blockImageWidth;
        document.getElementById("currentHeight").innerHTML= blockImageHeigth;
    }


    if(keyPressed == '38'){
        up();
        console.log("seta para cima");
    }

    if(keyPressed == '40'){
        down();
        console.log("seta para baixo");
    }

    if(keyPressed == '37'){
        left();
        console.log("seta para esquerda");
    }

    if(keyPressed == '39'){
        right();
        console.log("seta para direita");
    }

    if(keyPressed == '87'){
        newImage('wall.jpg');
        console.log("w");
    }

    if(keyPressed == '71'){
        newImage('ground.png');
        console.log("g");
    }

    if(keyPressed == '76'){
        newImage('light_green.png');
        console.log("l");
    }
    
    if(keyPressed == '84'){
        newImage('trunk.jpg');
        console.log("t");
    }

    if(keyPressed == '82'){
        newImage('roof.jpg');
        console.log("r");
    }

    if(keyPressed == '68'){
        newImage('dark_green.png');
        console.log("d");
    }

    if(keyPressed == '89'){
        newImage('yellow_wall.png');
        console.log("y");
    }

    if(keyPressed == '85'){
        newImage('unique.png');
        console.log("u");
    }

    if(keyPressed == '67'){
        newImage('cloud.jpg');
        console.log("c");
    }
}
function up(){
    if(playerY >=0){
        playerY = playerY - blockImageHeigth;
        console.log("autura do bloco ="+ blockImageHeigth);
        console.log("seta pra cima, X = "+ playerX +", Y ="+playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function down(){
    if(playerY <=500){
        playerY = playerY + blockImageHeigth;
        console.log("autura do bloco ="+ blockImageHeigth);
        console.log("seta pra baixo, X = "+ playerX +", Y ="+playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function left(){
    if(playerY >=0){
        playerX = playerX - blockImageWidth;
        console.log("largura do bloco ="+ blockImageWidth);
        console.log("seta pra esquerda, X = "+ playerX +", Y ="+playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function right(){
    if(playerY <=850){
        playerX = playerX + blockImageWidth;
        console.log("largura do bloco ="+ blockImageWidth);
        console.log("seta pra direita, X = "+ playerX +", Y ="+playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}