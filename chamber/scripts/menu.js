const mainnav = document.querySelector(".navigation");
const menubutton = document.querySelector("#menu");

menubutton.addEventListener("click",() =>{
    mainnav.classList.toggle("show");
    menubutton.classList.toggle("show");
});

const modeButton = document.querySelector("input");
const title = document.querySelector(".titletop");
const navigation = document.querySelector("ul");
const main = document.querySelector("#main");
const button = document.getElementById("button");
const display = document.getElementById("display");
const footer = document.querySelector("footer");

modeButton.addEventListener("click", ()=>{
    if(display.textContent.includes("normal")){
        title.style.background ="var(--dark)"
        navigation.style.background ="var(--blue)"
        main.style.background ="var(--black)"
        button.style.background ="var(--blue)"
        footer.style.background ="var(--dark)"
        display.textContent ="dark"
    } else{
        title.style.background ="var(--blue)"
        navigation.style.background = "var(--dark)"
        main.style.background ="var(--white)"
        button.style.background ="var(--red)"
        footer.style.background ="var(--blue)"
        display.textContent ="normal"
    }
    
});