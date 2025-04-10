function loadPricing() {
    fetch('data/pricing.json')
        .then(response => response.json())
        .then(data => {
            let tableBody = "";
            data.rentals.forEach(rental => {
                tableBody += `<tr>
                    <td>${rental.name}</td>
                    <td>${rental.max_persons}</td>
                    <td>$${rental.prices.reservation.half_day}</td>
                    <td>$${rental.prices.reservation.full_day}</td>
                    <td>$${rental.prices.walk_in.half_day}</td>
                    <td>$${rental.prices.walk_in.full_day}</td>
                </tr>`;
            });
            document.querySelector('#pricing-table tbody').innerHTML = tableBody;
        })
        .catch(err => console.error("Error loading pricing data:", err));
}