
document.addEventListener('DOMContentLoaded', () => {
    // Get the form element
    const contactForm = document.querySelector('.contact-container');
  
    // Check if the form exists
    if (contactForm) {
      contactForm.addEventListener('submit', (event) => {
        // Prevent default form submission (and page refresh/navigation)
        event.preventDefault();
  
        // Optionally, you could process the form data here via AJAX
  
        // Check if a confirmation message already exists to avoid duplication
        if (!document.getElementById('contact-confirmation')) {
          // Create the confirmation message element
          const confirmationMessage = document.createElement('p');
          confirmationMessage.id = 'contact-confirmation';
          confirmationMessage.textContent = 'Your Message has successfully been sent.';
          confirmationMessage.style.color = 'var(--green)';
          confirmationMessage.style.marginTop = '10px';
  
          // Insert the message after the form (or below it)
          contactForm.insertAdjacentElement('afterend', confirmationMessage);
        }
      });
    }
  });