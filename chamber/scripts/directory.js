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