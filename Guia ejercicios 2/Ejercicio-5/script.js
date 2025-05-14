const btn = document.getElementById('btn');
let body = document.getElementById('body');

const colors = ["red", "green", "blue", "yellow", "purple", "orange"];

btn.addEventListener('click', function () {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor
});
