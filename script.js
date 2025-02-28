function changeColor() {
    let colors = ["lightblue", "lightgreen", "lightcoral", "lightpink", "lightgoldenrodyellow"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
