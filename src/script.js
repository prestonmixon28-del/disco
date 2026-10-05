function chnagedColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    document.getElementById("danceFloor").style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

setInterval(chnagedColor, 1000);