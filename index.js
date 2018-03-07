var mic;


function windowResized() {
    resizeCanvas();
}
function setup() {
    let c = createCanvas(windowWidth, windowHeight);
    c.position(0, 0);
    c.style('z-index', '-1');
    console.log("started ");
    mic = new p5.AudioIn();
    mic.start()
}
function draw() {
    background(0);
    var vol = mic.getLevel();
    ellipse(width / 2, height / 2, vol * 800);

}
chrome.storage.local.set({
    kitten: { name: "Mog", eats: "mice" },
    monster: { name: "Kraken", eats: "people" }

});
localStorage.setItem('favoriteflavor','vanilla');
