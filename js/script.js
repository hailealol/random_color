const genBtn = document.getElementById("genBtn");

function newColor() {
    const color = Math.floor(Math.random() * 16777216).toString(16);
    document.body.style.backgroundColor = "#" + color;
    document.getElementById("hex").innerHTML = "#" + color;
    genBtn.innerHTML = "Generate Another Color";
    genBtn.style.backgroundColor = "#" + color;
};