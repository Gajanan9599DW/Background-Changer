
const colors = ["red", "green", "yellow", "blue", "purple", "coral", "skyblue", "#7cfc00", "#648c11", "#ff4500", "#e49b0f", "#7fff00", "#00a86b", "#00ffff"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    const randomNumber1 = getRandomNumber1();
    document.body.style.backgroundColor = colors[randomNumber1];
    color.textContent = randomNumber1;
})

function getRandomNumber1(){
    return Math.floor(Math.random() * colors.length);
}