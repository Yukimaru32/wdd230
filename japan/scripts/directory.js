const directoryURL = "https://yukimaru32.github.io/wdd230/japan/data/members.json";

async function getLinks() {
    const response = await fetch(directoryURL);
    const data = await response.json();
    displayLinks(data.members); // Passing the members array
}
getLinks();

const displayLinks = (members) => {
    const container = document.getElementById("directory-list"); // Ensure you have an element with this id in your HTML

    members.forEach(member => {
        // Create elements for each member
        let section = document.createElement("section");
        let image = document.createElement("img");
        let heading = document.createElement("h4");
        let locationEl = document.createElement("p");
        let categoryEl = document.createElement("p");
        let urlEl = document.createElement("a");
        let urlContainer = document.createElement("p");

        // Set the content for each element using the new JSON keys
        heading.textContent = member.name;
        locationEl.textContent = member.location;
        categoryEl.textContent = member.category;
        urlEl.textContent = member.url;
        urlEl.setAttribute("href", member.url);

        image.setAttribute("src", member.image);
        image.setAttribute("loading", "lazy");
        image.setAttribute("alt", `Image of ${member.name}`);
        image.setAttribute("width", "200px");
        image.setAttribute("height", "150px");

        // Append elements in the desired order: image first, then name, location, category, and finally the URL
        section.appendChild(image);
        section.appendChild(heading);
        section.appendChild(locationEl);
        section.appendChild(categoryEl);
        urlContainer.appendChild(urlEl);
        section.appendChild(urlContainer);

        container.appendChild(section);
    });
};

// Switch view function remains unchanged
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

// Attach event listeners to the view toggle links
document.getElementById("grid").addEventListener("click", (e) => {
    e.preventDefault();
    switchView("grid");
});

document.getElementById("list").addEventListener("click", (e) => {
    e.preventDefault();
    switchView("list");
});

// Mobile menu toggle
const mainnav = document.querySelector(".navigation");
const menubutton = document.querySelector("#menu");

menubutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    menubutton.classList.toggle("show");
});

// Dark mode toggle code
const modeButton = document.querySelector("input");
const title = document.querySelector(".titletop");
const navigation = document.querySelector("ul");
const main = document.querySelector("main");
const buttons = document.querySelectorAll(".buttons");
const display = document.getElementById("display");
const footer = document.querySelector("footer");

modeButton.addEventListener("click", () => {
    if (display.textContent.includes("normal")) {
        title.style.background = "var(--dark)";
        navigation.style.background = "var(--blue)";
        main.style.background = "var(--black)";
        buttons.forEach(btn => {
            btn.classList.remove("hover-normal");
            btn.classList.add("hover-dark");
        });
        footer.style.background = "var(--dark)";
        display.textContent = "dark";
    } else {
        title.style.background = "var(--blue)";
        navigation.style.background = "var(--dark)";
        main.style.background = "var(--white)";
        buttons.forEach(btn => {
            btn.classList.remove("hover-dark");
            btn.classList.add("hover-normal");
        });
        footer.style.background = "var(--blue)";
        display.textContent = "normal";
    }
});