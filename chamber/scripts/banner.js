// Get today's day (0=Sunday, 1=Monday, etc.)
var today = new Date().getDay();

// Check if today is Monday (1), Tuesday (2), or Wednesday (3)
if (today >= 1 && today <= 3) {
  document.getElementById('chamber-banner').style.display = 'block';
}

// Add a click event to the close button to hide the banner
document.getElementById('close-banner').addEventListener('click', function() {
  document.getElementById('chamber-banner').style.display = 'none';
});