function chnagedColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    document.getElementById("danceFloor").style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

setInterval(chnagedColor, 1000);

let x = 0;
let y = 0;

function moveDancer() {
    document.getElementById("danceFloor").style.transform = `translate(${x}px, ${y}px)`;

}

document.getElementById("leftButton").onclick = function() {
    x -= 10;
    moveDancer();
};
document.getElementById("rightButton").onclick = function() {
    x += 10;
    moveDancer();
};
document.getElementById("upButton").onclick = function() {
    y -= 10;
    moveDancer();
};
document.getElementById("downButton").onclick = function() {
    y += 10;
    moveDancer();
};