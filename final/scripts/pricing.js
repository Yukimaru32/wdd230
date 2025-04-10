const directoryURL ="https://yukimaru32.github.io/wdd230/final/data/pricing.json";

async function getLinks() {
    const response = await fetch(directoryURL);
    const data = await response.json();
    displayLinks(data.rentals); // Now passing the lessons array
}
getLinks();
const displayLinks = (rentals) =>{
    
    let tableBody ="";
    rentals.forEach(rental => {
        tableBody += `<tr>
            <td>${rental.name}</td>
            <td>${rental.max_persons}</td>
            <td>$${rental.prices.reservation.half_day}</td>
            <td>$${rental.prices.reservation.full_day}</td>
            <td>$${rental.prices.walk_in.half_day}</td>
            <td>$${rental.prices.walk_in.full_day}</td>
        </tr>`;
        document.querySelector('#pricing-table tbody').innerHTML = tableBody;

    });

}