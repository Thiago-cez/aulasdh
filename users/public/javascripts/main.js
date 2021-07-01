const button = document.getElementById("loginBtn");
console.log(button);


const form = document.getElementById("form");
console.log(form);

let color = 1;

setInterval(() => {
    const colorSpan = document.getElementById("color");
    if (color == 1 ){
    button.style.background = "#000";
    colorSpan.innerText = "preto";
    }
    if (color == 2) {
        button.style.background ="#930";
        colorSpan.innerText = "laranja";
    }
    if (color == 3 ) {
        button.style.background ="#457450";
        colorSpan.innerText = "Verde musgo";
        color = 1
        return 
    }
    color ++;
},1000);

const background = document.getElementById("background");
background.classList.toggle("dark-mode")