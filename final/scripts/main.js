document.addEventListener('DOMContentLoaded', function() {
    // Fetch and display weather info on the home page if applicable.
    if (document.getElementById('current-temp')) {
        fetchWeather();
    }
    
    // Load pricing data on the Rentals page if applicable.
    if (document.getElementById('pricing-table')) {
        loadPricing();
    }
});

function closeBanner() {
    const bannerContainer = document.getElementById('banner-container');
    if (bannerContainer) {
        bannerContainer.style.display = 'none';
    }
}



