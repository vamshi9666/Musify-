
function setup() {
    createCanvas(inner, height);
    background(155);
}
function draw(){
    ellipse(x, y, 80, 80);
    x = x + 1;
    y =y +1;
    if (x < innerWidth){
        x -1;
    }
    if ( y < innerHeight){
        y -1;
    }
}