const bColors = ["#e63946", "#ddbea9", "#6a040f", "#560bad", "#cddafd"]

const btn = document.getElementById("btn");
const b_color = document.querySelector("b_color");

btn.addEventListener('click', function(){
     const randomNumber = getRandomNumber();
     document.body.style.backgroundColor = bColors[randomNumber];
     b_color.textContent = [randomNumber];
})

function getRandomNumber(){
     return Math.floor (Math.random() * bColors.length);
}
console.log(getRandomNumber());