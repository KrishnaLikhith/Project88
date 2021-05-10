var canvas = new fabric.Canvas("myCanvas");
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({ top: player_y, left: player_x });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", mykeydown);

function mykeydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("shift and p pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey == true && keyPressed == '77') {
        console.log("Shift and M pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (keyPressed == '38') {
        Up();
        console.log("Up");
    }
    if (keyPressed == '40') {
        Down();
        console.log("Down");
    }
    if (keyPressed == '37') {
        Left();
        console.log("Left");
    }
    if (keyPressed == '39') {
        Right();
        console.log("Right");
    }
    if (keyPressed == '70') {
        new_image('ironman_face.png');
        console.log("IronMan Face");
    }
    if (keyPressed == '66') {
        new_image('ironman_body.png');
        console.log("IronMan Body");
    }
    if (keyPressed == '75') {
        new_image('ironman_left_hand.png');
        console.log("IronMan Left Hand");
    }
    if (keyPressed == '76') {
        new_image('ironman_legs.png');
        console.log("Iron Man Legs");
    }
    if (keyPressed == '77') {
        new_image('ironman_right_hand.png');
        console.log("IronMan Right Hand");
    }
    if (keyPressed == '72') {
        new_image('hulk_face.png');
        console.log("Hulk Face");
    }
    if (keyPressed == '68') {
        new_image('hulk_left_hand.png');
        console.log("Hulk Left Hand");
    }
    if (keyPressed == '65') {
        new_image('hulk_legs.png');
        console.log("Hulk Legs");
    }
    if (keyPressed == '69') {
        new_image('hulk_right_hand.png');
        console.log("Hulk Right Hand");
    }
    if (keyPressed == '71') {
        new_image('hulkd_body.png');
        console.log("Hulk Body");
    }
    if (keyPressed == '81') {
        new_image('spiderman_body.png');
        console.log("Spiderman Body");
    }
    if (keyPressed == '87') {
        new_image('spiderman_face.png');
        console.log("Spiderman Face");
    }
    if (keyPressed == '82') {
        new_image('spiderman_left_hand.png');
        console.log("Spiderman Left hand");
    }
    if (keyPressed == '84') {
        new_image('spiderman_right_hand.png');
        console.log("Spiderman Right Hand");
    }
    if (keyPressed == '89') {
        new_image('spiderman_legs.png');
        console.log("SpiderMan Legs");
    }
    if (keyPressed == '88') {
        new_image('thor_face.png');
        console.log("Thor face");
    }
    if (keyPressed == '74') {
        new_image('thor_left_hand.png');
        console.log("Thor Left Hand");
    }
    if (keyPressed == '78') {
        new_image('thor_right_hand.png');
        console.log("Thor Right Hand");
    }
    if (keyPressed == '67') {
        new_image('captain_america_left_hand.png');
        console.log("Captain America Left Hand");
    }
}

function Up() {
    if (player_y >= 0) {
        player_y = player_y - block_image_height;
        console.log("block_image_height =" + block_image_height);
        console.log("When up arrow is pressed , X =" + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function Down() {
    if (player_y <= 500) {
        player_y = player_y + block_image_height;
        console.log("block_image_height =" + block_image_height);
        console.log("When Down arrow is pressed, X =" + player_x + ", Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function Left() {
    if (player_x > 0) {
        player_x = player_x - block_image_width;
        console.log("block_image_width =" + block_image_width);
        console.log("When Left arrow is pressed, X=" + player_x + ", Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function Right() {
    if (player_x <= 900) {
        player_x = player_x + block_image_width;
        console.log("block_image_width =" + block_image_width);
        console.log("When Right arrow is pressed, X=" + player_x + ",Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function pic() {
    document.getElementById("img").src = "CAPTURE.PNG";
    document.getElementById("h2").innerHTML = "Press the Arrow Keys to make the Player visible";
}