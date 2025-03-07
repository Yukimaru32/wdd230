const baseURL = "https://yukimaru32.github.io/wdd230/";
const linksURL = "https://yukimaru32.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons); // Now passing the lessons array
}
getLinks();

const displayLinks = (lessons) => {
    const container = document.getElementById("links-container"); // Make sure you have an element with this id in your HTML

    lessons.forEach(lesson => {
        // Create elements for each lesson
        let section = document.createElement("section");
        let heading = document.createElement("h4");
        heading.textContent = `Lesson ${lesson.lesson}:`; // Add lesson number as heading
        section.appendChild(heading);
        section.setAttribute("class","links");
        
        let ul = document.createElement("ul");

        lesson.links.forEach(link => {
            let li = document.createElement("li");
            let linkA = document.createElement("a");

            linkA.setAttribute("href", link.url);
            linkA.textContent = link.title;

            li.appendChild(linkA);
            ul.appendChild(li);
        });

        section.appendChild(ul);
        container.appendChild(section); // Append the section to the container
    });
}
