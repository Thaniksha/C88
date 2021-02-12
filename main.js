var canvas=new fabric.Canvas('my_canvas');

player_x=10;
player_y=10;

block_img_width=30;
block_img_height=30;

player_object="";
block_img_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    top:player_y,
    left:player_x
});
canvas.add(player_object);
    });
}

function new_img(get_img){
fabric.Image.fromURL(get_img,function(Img){
 block_img_object=Img;
 block_img_object.scaleToWidth(block_img_width);
 block_img_object.scaleToHeight(block_img_height);
 block_img_object.set({
    top:player_y,
    left:player_x
});
canvas.add(block_img_object);
});
}

window.addEventListener("keydown",myKeyDown);

function myKeyDown(e){
 key_pressed=e.keyCode;
 console.log(key_pressed);

if(e.shiftKey==true && key_pressed=='80'){
    console.log("Shift+P is pressed");
    block_img_height=block_img_height+10;
    block_img_width=block_img_width+10;
    document.getElementById("current_width").innerHTML=block_img_width;
    document.getElementById("current_height").innerHTML=block_img_height;
}
if(e.shiftKey==true && key_pressed=='77'){
    console.log("Shift+M is pressed");
    block_img_height=block_img_height-10;
    block_img_width=block_img_width-10;
    document.getElementById("current_width").innerHTML=block_img_width;
    document.getElementById("current_height").innerHTML=block_img_height;
}
if(key_pressed =='37'){
    left();
    console.log("Left key is pressed");
}
if(key_pressed =='38'){
    up();
    console.log("up key is pressed");
}
if(key_pressed =='39'){
    right();
    console.log("right key is pressed");
}
if(key_pressed =='40'){
    down();
    console.log("down key is pressed");
}
if(key_pressed =='87'){
    new_img("wall.jpg");
    console.log("W is pressed");
}
if(key_pressed =='71'){
    new_img("ground.png");
    console.log("G is pressed");
}
if(key_pressed =='76'){
    new_img("light_green.png");
    console.log("L is pressed");
}
if(key_pressed =='84'){
    new_img("trunk.jpg");
    console.log("T is pressed");
}
if(key_pressed =='82'){
    new_img("roof.jpg");
    console.log("R is pressed");
}
if(key_pressed =='89'){
    new_img("yellow_wall.png");
    console.log("Y is pressed");
}
if(key_pressed =='68'){
    new_img("dark_green.png");
    console.log("D is pressed");
}
if(key_pressed =='67'){
    new_img("cloud.jpg");
    console.log("C is pressed");
}
if(key_pressed =='85'){
    new_img("unique.png");
    console.log("U is pressed");
}
}

function up(){
 if(player_y>0){
player_y=player_y - block_img_height;
console.log("block_img_height="+block_img_height);
console.log("when up arrow is pressed x ="+player_x+" y=" +player_y);
canvas.remove(player_object);
player_update();
 }
}
 
function down(){
    if(player_y<=500){
        player_y=player_y+block_img_height;
        console.log("block_img_height="+block_img_height);
console.log("when down arrow is pressed x ="+player_x+" y=" +player_y);
canvas.remove(player_object);
player_update();
    }
}

function left(){
    if(player_x>0){
        player_x=player_x-block_img_width;
        console.log("block_img_width="+block_img_width);
console.log("when left arrow is pressed x ="+player_x+" y=" +player_y);
canvas.remove(player_object);
player_update();
    }
}

function right(){
    if(player_x<=850){
        player_x=player_x+block_img_width;
        console.log("block_img_width="+block_img_width);
        console.log("when right arrow is pressed x ="+player_x+" y=" +player_y);
        canvas.remove(player_object);
        player_update();
    }
}