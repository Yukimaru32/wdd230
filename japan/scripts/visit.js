document.addEventListener("DOMContentLoaded", function () {
    const visitElement = document.querySelector("#visit");
    const lastVisit = localStorage.getItem("lastVisit");
    const now = new Date().getTime();

    if (!lastVisit) {
        visitElement.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitTime = parseInt(lastVisit, 10);
        const timeDifference = now - lastVisitTime;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            visitElement.textContent = "Back so soon! Awesome!";
        } else {
            visitElement.textContent = `You last visited ${daysDifference} ${daysDifference === 1 ? "day" : "days"} ago.`;
        }
    }

    localStorage.setItem("lastVisit", now);
});