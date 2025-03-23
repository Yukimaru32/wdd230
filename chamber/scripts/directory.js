const directoryURL ="https://yukimaru32.github.io/wdd230/chamber/data/members.json";

async function getLinks() {
    const response = await fetch(directoryURL);
    const data = await response.json();
    displayLinks(data.members); // Now passing the lessons array
}
getLinks();

const displayLinks = (members) => {
    const container = document.getElementById("directory-list"); // Make sure you have an element with this id in your HTML

    members.forEach(member => {
        // Create elements for each lesson
        let section = document.createElement("section");
        let heading = document.createElement("h4");
        let adress = document. createElement("p");
        let phone = document. createElement("p");
        let industry = document. createElement("p");
        let url = document.createElement("a");
        let urlcontainer = document.createElement("p");
        let image = document.createElement("img");

        heading.textContent = `${member.name}`; // Add lesson number as heading
        adress.textContent =`${member.address}`;
        phone.textContent =`${member.phone}`;
        industry.textContent =`${member.industry}`;
        url.textContent =`${member.url}`;

        url.setAttribute("href",member.url);
        image.setAttribute("src",member.image);
        image.setAttribute("loading","lazy");
        image.setAttribute("alt",`Image of ${member.name}`);
        image.setAttribute("width","200px");
        image.setAttribute("height","150px");



        section.appendChild(image);
        section.appendChild(heading);
        section.appendChild(adress);
        section.appendChild(phone);
        urlcontainer.appendChild(url);
        section.appendChild(urlcontainer);
        section.appendChild(industry);

        
        container.appendChild(section); // Append the section to the container
    });
}

function switchView(viewType) {
    const container = document.getElementById("directory-list");
    if (viewType === "list") {
        container.classList.add("list-view");
        container.classList.remove("grid-view");
    } else if (viewType === "grid") {
        container.classList.add("grid-view");
        container.classList.remove("list-view");
    }
}

// Attach event listeners to the navigation links
document.getElementById("grid").addEventListener("click", (e) => {
    e.preventDefault();
    switchView("grid");
});

document.getElementById("list").addEventListener("click", (e) => {
    e.preventDefault();
    switchView("list");
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

modeButton.addEventListener("click", ()=>{
    if(display.textContent.includes("normal")){
        title.style.background ="var(--dark)";
        navigation.style.background ="var(--blue)";
        main.style.background ="var(--black)";
        buttons.forEach(btn =>{
            btn.classList.remove("hover-normal");
            btn.classList.add("hover-dark");
        });

        footer.style.background ="var(--dark)";
        display.textContent ="dark";
    } else{
        title.style.background ="var(--blue)";
        navigation.style.background = "var(--dark)";
        main.style.background ="var(--white)";
        buttons.forEach(btn =>{
            btn.classList.remove("hover-dark");
            btn.classList.add("hover-normal");
        });
        footer.style.background ="var(--blue)";
        display.textContent ="normal";
    }
    
});