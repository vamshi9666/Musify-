var x =10;
var y = 10;
function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
    
}
function draw(){
    ellipse(x, y, 50, 50);
    x = x+1;
    y = y+1;
    
   
}