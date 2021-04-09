var mouseevent="empty";
var last_position_of_x, last_position_of_y;
color="black";
width=1;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseevent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseevent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseevent="mouseLeave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_xpos=e.clientX-canvas.offsetLeft;
    current_ypos=e.clientY-canvas.offsetTop;
    if(mouseevent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        console.log("last position of x and y");
        console.log("x="+last_position_of_x+"y="+last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("current position of x and y");
        console.log("x="+current_xpos+"y="+current_ypos);
        ctx.arc(current_xpos,current_ypos,40,0,2*Math.PI);
        ctx.stroke();  
    }
    last_position_of_x=current_xpos;
    last_position_of_y=current_ypos;
 }