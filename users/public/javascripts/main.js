// const button = document.getElementById("loginBtn");
// console.log(button);


// const form = document.getElementById("form");
// console.log(form);

// let color = 1;

// setInterval(() => {
//     const colorSpan = document.getElementById("color");
//     if (color == 1 ){
//     button.style.background = "#000";
//     colorSpan.innerText = "preto";
//     }
//     if (color == 2) {
//         button.style.background ="#930";
//         colorSpan.innerText = "laranja";
//     }
//     if (color == 3 ) {
//         button.style.background ="#457450";
//         colorSpan.innerText = "Verde musgo";
//         color = 1
//         return 
//     }
//     color ++;
// },1000);

// const background = document.getElementById("background");
// background.classList.toggle("dark-mode")
function onClickSubmit(event){
  event.preventDefault();
  // pegar valores digitados pelo usuario
  const inpUser = document.getElementById("user");
  const inpPassword = document.getElementById("password");
}

function onClickDarkMode(event){
  console.log(event)
  const background = document.getElementById("background");
  
  background.classList.toggle("dark-mode")

  if(background.classList.contains("dark-mode")){
    event.target.innerText = "default";
  }else event.target.innerText = "dark" 
}

function onClickDropdown() {
  const menu = document.querySelector(".dropdown-content");
  
  //menu suspenso pode ser dessa maneira comentada
  // if(menu.style.display == "none"){
  //   menu.style.display = "block";
  // }
  // else menu.style.display = "none";

  menu.classList.toggle("show");// ou dessa forma 
}

window.onload = function() {
const form = document.getElementById("form");
form.addEventListener("submit", onClickSubmit);
const darkModeButton = document.getElementById("darkBtn");
darkModeButton.addEventListener("click", onClickDarkMode)

const dropdownMenu = document.getElementById("dropbtn");
dropdownMenu.addEventListener("click", onClickDropdown);

}


