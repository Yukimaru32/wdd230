document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("timestamp").value = Date.now();
});


const mainnav = document.querySelector(".navigation");
const menubutton = document.querySelector("#menu");

menubutton.addEventListener("click",() =>{
    mainnav.classList.toggle("show");
    menubutton.classList.toggle("show");
});

const modeButton = document.querySelector("input");
const title = document.querySelector(".titletop");
const navigation = document.querySelector("ul");
const main = document.querySelector("main");
const buttons =document.querySelectorAll(".buttons");
const display = document.getElementById("display");
const footer = document.querySelector("footer");
const register = document.querySelector("h2");
const body = document.querySelector("body");

modeButton.addEventListener("click", ()=>{
    if(display.textContent.includes("normal")){
        title.style.background ="var(--dark)";
        navigation.style.background ="var(--blue)";
        main.style.color = "var(--white)";
        main.style.background ="var(--black)";
        register.style.color ="var(--white";
        buttons.forEach(btn =>{
            btn.classList.remove("hover-normal");
            btn.classList.add("hover-dark");
        });
        body.style.color ="var(--black)";
        footer.style.background ="var(--dark)";
        display.textContent ="dark";
    } else{
        title.style.background ="var(--blue)";
        navigation.style.background = "var(--dark)";
        register.style.color ="var(--black";
        main.style.color ="var(--black)";
        main.style.background ="var(--white)";
        buttons.forEach(btn =>{
            btn.classList.remove("hover-dark");
            btn.classList.add("hover-normal");
        });
        body.style.color ="(var--white)";
        footer.style.background ="var(--blue)";
        display.textContent ="normal";
    }
    
});