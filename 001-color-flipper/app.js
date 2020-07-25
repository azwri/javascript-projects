const colors = [
    'green', 'red', '#f15025', 'blue',
]

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', ()=>{
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]

});


getRandomNumber = () => Math.floor(Math.random() * colors.length);