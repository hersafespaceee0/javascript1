const themeButton = document.querySelector("#theme-btn")
// const themeButton = document.getElementById("theme-btn")

themeButton.innerHTML = "<span>Light</span> Mode";

console.log(themeButton.getAttribute("name"));
   //data attributes in js and html

themeButton.setAttribute("src","images/profile.png");

const url = "https://kesoru.org/images/kesorulogo.svg";

document.querySelector("img").setAttribute("src",url);
document.querySelector("img").setAttribute("width","100px");

   // template literals 